export default {
  async fetch(req: Request, env: Record<string, unknown>, ctx: ExecutionContext) {
    return new Response("Backend running!", { status: 200 });
  }
};
