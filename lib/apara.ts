export interface Apara {
  title: string
  description: string
  url: string
}

export const getApara = (): Apara[] => {
  return [
    {
      title: '1and2day',
      description:"1and2day",
      url: 'firstandsecondday',
    },{
      title: '1stto10thday ',
      description:"1stto10thday",
      url: '1stto10thday',
    },{
      title: '11thand12thday ',
      description:"11thand12thday",
      url: '11thand12thday',
    }

    
  ]
}
