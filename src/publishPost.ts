import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { argv, exit } from 'process';
import { createPost } from './redis';

const postsDir = path.join(process.cwd(), 'posts');

interface Post {
	title: string;
	date: Date;
	description: string;
	content: string;
	filename: string;
}

async function publish(filename: string) {
	let fullPath: string;

	if (filename.endsWith('.md')) {
		fullPath = path.join(postsDir, `${filename}`);
	} else {
		fullPath = path.join(postsDir, `${filename}.md`);
	}

	const fileContent = fs.readFileSync(fullPath, 'utf8');

	const matterResult = matter(fileContent);

	const post: Post = {
		title: matterResult.data.title,
		date: new Date(),
		description: matterResult.data.description,
		content: matterResult.content,
		filename: filename,
	};

	const id = await createPost(post);

	console.log(id);
}

publish(argv[2]).then(() => exit());
