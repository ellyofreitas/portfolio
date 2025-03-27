const { CREDLY_USERNAME: credlyUsername } = process.env

export async function GET() {
  const response = await fetch(
    `https://www.credly.com/users/${credlyUsername}/badges?sort=rank`,
    {
      headers: { Accept: 'application/json' },
      cache: 'force-cache',
    }
  )
  const data = await response.json()
  const badges = data.data
  return Response.json({ badges })
}
