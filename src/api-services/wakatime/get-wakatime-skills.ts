import { portfolioConfig } from '@/config/portfolio.config'

const { WAKATIME_USER_ID: wakatimeUserId } = process.env
const normalize = (text: string) => text.replace(/\W/, '').toLowerCase()

export async function getWakatimeSkills() {
  const response = await fetch(
    `https://wakatime.com/api/v1/users/${wakatimeUserId}/stats/all_time`,
    { cache: 'force-cache' }
  )
  const data = await response.json()
  const tools = new Set(
    [
      ...portfolioConfig.skills.programmingLanguages,
      ...portfolioConfig.skills.frameworks,
      ...portfolioConfig.skills.tools,
    ].map((item) => normalize(item.name.toLowerCase()))
  )
  const wakaTools = [
    ...data.data.languages,
    ...data.data.operating_systems,
    ...data.data.editors,
  ].map((item) => ({ name: item?.name, text: item?.text }))
  const skills = wakaTools.filter((lang: any) =>
    tools.has(normalize(lang.name.toLowerCase()))
  )
  return skills
}
