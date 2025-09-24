import type { PagesFunction, D1Database } from "@cloudflare/workers-types";


interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { DB } = context.env;

  try {
    const { results } = await DB.prepare(
      "SELECT id, title, slug, description, demo_url, github_url, image, created_at FROM projects ORDER BY created_at DESC"
    ).all();

    return new Response(JSON.stringify({ items: results }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
