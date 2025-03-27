import { z } from 'zod'

export const environment = z
  .object({
    NEXT_PUBLIC_SITE_URL: z.string().default('http://localhost:3000'),
    WAKATIME_USER_ID: z.string(),
    WAKATIME_USERNAME: z.string(),
    GITHUB_USERNAME: z.string(),
    CREDLY_USERNAME: z.string(),
    UPWORK_USER_ID: z.string(),
    LINKEDIN_USERNAME: z.string(),
    TWITTER_USERNAME: z.string(),
  })
  .parse(process.env)
