export async function GET() {
  const content = 'google.com, pub-6276217203648123, DIRECT, f08c47fec0942fa0';

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
