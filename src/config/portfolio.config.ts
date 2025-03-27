import { environment } from './environment'

export const portfolioConfig = {
  name: 'Ellyo Freitas',
  title: 'Solutions Architect',
  description: 'I am a Passionate Solutions Architect',
  location: 'Fortaleza, Ceará, Brazil',
  socialLinks: {
    upwork: `https://www.upwork.com/freelancers/~${environment.UPWORK_USER_ID}?mp_source=share`,
    x: `https://x.com/${environment.TWITTER_USERNAME}`,
    linkedin: `https://www.linkedin.com/in/${environment.LINKEDIN_USERNAME}`,
    credly: `https://www.credly.com/users/${environment.CREDLY_USERNAME}`,
    wakatime: `https://wakatime.com/${environment.WAKATIME_USERNAME}`,
    github: `https://github.com/${environment.GITHUB_USERNAME}`,
  },
  seo: {
    ogImage: `${environment.NEXT_PUBLIC_SITE_URL}/og-image.png`,
    url: environment.NEXT_PUBLIC_SITE_URL,
    keywords: [
      'md',
      'taqui',
      'imam',
      'Md',
      'MD',
      'TAQUI',
      'Taqui',
      'Imam',
      'Imam',
      'Md Taqui Imam',
      'md taqui imam',
      'mdtaqui',
      'mdtaquiimam',
      'taqui imam',
      'Taqui Imam',
      'Taquiimam',
      'portfolio',
      'web developer',
      'web',
      'web dev',
      'developer',
      'PROGRAMMER ',
      'programmer ',
      'MD TAQUI IMAM ',
      'website',
      '@Taquiimam',
      'Taquiimam',
      'taqui developer',
    ],
    authors: [
      {
        name: 'Ellyo Freitas',
        url: `https://github.com/${environment.GITHUB_USERNAME}`,
      },
    ],
  },
  about: {
    bio: 'Passionate about building high-quality, scalable, and cost-efficient software solutions. With 5+ years of experience, I specialize in backend development, software architecture, and cloud infrastructure, focusing on the retail sector while having a strong interest in financial systems.',
    bioTipList: [
      'Expert in Node.js, designing high-performance and maintainable applications using DDD, Clean Architecture, and well-structured design patterns.',
      'Strong foundation in cloud computing (AWS, OpenStack), following Well-Architected Framework principles to optimize cost and performance.',
      'Proficient in DevOps, managing my own infrastructure and leveraging Kubernetes, Terraform, and CI/CD pipelines.',
      'Passionate about software design, creating robust architectures, and solving complex problems with clean, efficient code.',
      'Adept at frontend technologies like React, Next.js, and Vite, ensuring performance optimization even though UI/UX is not my primary focus.',
      'Excellent communicator and public speaker, with experience presenting at local tech events.',
    ],
    bioFooter:
      'Constantly learning and refining my skills, I enjoy tackling challenging problems, pushing the limits of technology, and improving every system I work on. 🚀',
    hobbies: [
      'Coding',
      'Workout',
      'Playing Games',
      'Basketball',
      'Watching Anime',
      'Managing a Homelab',
      'Smart Home - IOT',
      'Creating Cool Projects',
    ],
    personalInfo: {
      language: 'Portuguese BR',
      nationality: 'Brazilian',
      gender: 'Male',
    },
  },
  skills: {
    description:
      'Passionate about building scalable, high-performance applications with a strong focus on cloud computing, software architecture, and DevOps. Experienced in designing backend solutions using Node.js, TypeScript, and cloud-native technologies. Enthusiastic about infrastructure automation, Kubernetes, and cost-efficient architectures.',
    roles: [
      'Software Engineer',
      'Freelancer',
      'DevOps Enthusiast',
      'Gamer',
      'Cloud Certified',
      'Continuous Learner',
    ],
    programmingLanguages: [
      {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'Java',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      },
    ],
    frameworks: [
      {
        name: 'Fastify',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastify/fastify-original.svg',
      },
      {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'Next.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      },
      {
        name: 'Tailwind CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      },
    ],
    tools: [
      {
        name: 'AWS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      },
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Openstack',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openstack/openstack-original.svg',
      },
      {
        name: 'Linux',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      },
      {
        name: 'GraphQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
      },
      {
        name: 'Cloudflare',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg',
      },
      {
        name: 'Terraform',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
      },
      {
        name: 'Argocd',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg',
      },
      {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'GitHub',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
      {
        name: 'VS Code',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      },
      {
        name: 'Docker',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      },
      {
        name: 'Kubernetes',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg',
      },
      {
        name: 'Traefik Proxy',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/traefikproxy/traefikproxy-original.svg',
      },
      {
        name: 'Opentelemetry',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opentelemetry/opentelemetry-original.svg',
      },
      {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
    ],
  },
}
