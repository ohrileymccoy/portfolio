export default {
  async fetch(req, env, ctx) {
    return new Response("Backend running!", { status: 200 });
  }
}
