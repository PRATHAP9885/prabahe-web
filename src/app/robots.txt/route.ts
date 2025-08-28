export async function GET() {
  const base = 'https://prabahe.com';
  const text = `User-Agent: *
Allow: /
Disallow: /author/

Host: ${base}
Sitemap: ${base}/sitemap.xml
`;
  return new Response(text, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
