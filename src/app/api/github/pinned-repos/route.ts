import { Readable } from 'node:stream'
import { load } from 'cheerio'
import { environment } from '@/config/environment'

const username = environment.GITHUB_USERNAME

const fetchRepo = async (repo: string) => {
  const response = await fetch(
    `https://api.github.com/repos/${username}/${repo}`,
    { cache: 'force-cache' }
  )
  return await response.json()
}

export async function GET() {
  const response = await fetch(`https://github.com/${username}`, {
    cache: 'force-cache',
  })
  const data = await response.text()
  const $ = load(data)
  const repoList = $('.js-pinned-items-reorder-list > li')
    .map((_, el) => {
      const $el = $(el)
      const name = $el.find('.repo').text().trim()
      return {
        title: name,
        description: $el.find('.pinned-item-desc').text().trim(),
        link: `https://github.com/${username}/${name}`,
      }
    })
    .toArray()
  const repos = await Readable.from(repoList)
    .map(
      async (repo) => {
        const repoFull = await fetchRepo(repo.title)
        const tags = Array.from(
          new Set(
            repoFull.topics
              .concat(repoFull.language ?? [])
              .map((tag) => tag.toLowerCase())
          )
        )
        return { ...repo, id: repoFull.id, tags }
      },
      { concurrency: 2 }
    )
    .toArray()
  return Response.json({ repos })
}
