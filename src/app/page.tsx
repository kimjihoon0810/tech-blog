import { getPosts } from "./actions/fetch-notion-posts.action";

export default async function Home() {
  const response = await getPosts();

  return <>5</>;
}
