import path from "path";
import fs from 'fs';
import matter from 'gray-matter';
import { createPost } from "./redis";

const postsDir = path.join(process.cwd(), 'posts')

function parseFile(filename: string) {
    let fullPath: string;

    if(filename.endsWith('.md')) {
        fullPath = path.join(postsDir, `${filename}`)
    } else {
        fullPath = path.join(postsDir, `${filename}.md`)
    }

    const fileContent = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContent)

    return {
        ...matterResult.data
    }
}

interface Post {
    title: string;
    date: Date;
    description: string;
    content: string;
}

async function publish(filename: string) {
    const data = parseFile(filename)

    data.date = Date.now()

    const id = await createPost(data as Post)
    
    console.log(id)
}
