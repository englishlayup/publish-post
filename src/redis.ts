import { config } from "dotenv";
import { Client, Entity, Schema } from "redis-om";

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    config();
    await client.open(process.env.REDIS_URL);
  }
}

interface Post {
  title: string;
  date: Date;
  description: string;
  content: string;
  filename: string;
}

class Post extends Entity {}

const schema = new Schema(
  Post,
  {
    title: { type: "text" },
    date: { type: "date", sortable: true },
    description: { type: "text" },
    content: { type: "string" },
    filename: { type: "string" },
  },
  {
    dataStructure: "JSON",
  }
);

export async function createPost(data: {
  title: string;
  date: Date;
  description: string;
  content: string;
  filename: string;
}) {
  await connect();

  const repository = client.fetchRepository(schema);

  const post = repository.createEntity(data);

  const id = await repository.save(post);

  return id;
}
