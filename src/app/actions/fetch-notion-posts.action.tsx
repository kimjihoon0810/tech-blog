import { Client } from "@notionhq/client";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({
  auth: notionSecret,
});

export async function getPosts() {
  if (!notionSecret || !notionDatabaseId)
    throw new Error("Missing notion secret or DB-ID");

  const query = await notion.databases.query({
    database_id: notionDatabaseId,
  });

  console.log(query.results[0], { query });

  return query.results;
}
