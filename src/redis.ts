import { Client, Entity, Schema } from "redis-om";
import { config } from "dotenv";

const client = new Client();

async function connect() {
    if(!client.isOpen()){
        config();
        await client.open(process.env.REDIS_URL)
    }
}

interface Post {
    title: string;
    date: Date;
    description: string;
    content: string;
}

class Post extends Entity {}

const schema = new Schema(
    Post,
    {
        title: { type: 'string' },
        date: { type: 'date', sortable: true },
        description: { type: 'string' },
        content: { type: 'string' },
    },
    {
        dataStructure: 'JSON',
    },
)

export async function createPost(
    data: {
        title: string;
        date: Date;
        description: string;
        content: string;
    }) {

    await connect()

    const repository = client.fetchRepository(schema)

    const post = repository.createEntity(data)

    const id = await repository.save(post)
    
    return id
}
