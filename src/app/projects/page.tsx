import { Layers } from 'lucide-react'
import { getGithubPinnedRepos } from '@/api-services/github/get-github-pinned-repos'
import Heading from '@/components/Heading'
import ProjectCards from '@/components/ProjectsCard'
import { Badge } from '@/components/ui/badge'

export default async function ProjectsPage() {
  const repos = await getGithubPinnedRepos()
  return (
    <div className='h-full w-full relative flex flex-col items-start gap-5 overflow-hidden'>
      <Badge variant='secondary' className='gap-1.5 py-1'>
        <Layers className='h-4 w-4' />
        Projects
      </Badge>
      <div className='flex flex-col gap-3'>
        <Heading>My Projects</Heading>
      </div>
      <div className=' w-full flex flex-row flex-wrap gap-3 max-lg:flex-col'>
        {repos.map((project, indx) => (
          <ProjectCards key={project.id} value={project} num={indx} />
        ))}
      </div>
    </div>
  )
}
