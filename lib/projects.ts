export interface Project {
  title: string
  description: string
  url: string
}

export const getProjects = (): Project[] => {
  return [
    {
      title: 'M.Manikandan Vadhyar',
      description:"Contact me: +91 9344850599",
      url: '',
    },
    {
      title: 'M.Venkateswaran(Vijay Vadhyar)',
      description: 'Contact me: +91 9443440856',
      url: '',
    }

    
  ]
}
