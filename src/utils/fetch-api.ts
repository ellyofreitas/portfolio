import { getURL } from './get-url'

export async function fetchApi(path: string) {
  const response = await fetch(getURL(path), {
    cache: 'force-cache',
  })
  const data = await response.json()
  return data
}
