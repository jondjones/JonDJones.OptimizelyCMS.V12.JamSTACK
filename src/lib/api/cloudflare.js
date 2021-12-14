 export const cloudflareGetApiData = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_CLOUDFLARE_API_URL);
  return await res.text();
}
