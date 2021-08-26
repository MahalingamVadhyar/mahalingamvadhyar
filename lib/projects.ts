export interface Project {
  title: string
  description: string
  url: string
}

export const getProjects = (): Project[] => {
  return [
    {
      title: 'அன்னப்ராசனம்',
      description:"Annaprasanam",
      url: 'annaprasanam',
    },
    {
      title: 'ஆயுஷ்ய ஹோமம்',
      description:"ayushyahomam",
      url: 'ayushyahomam',
    },
    {
      title: 'பீமரதசாந்தி',
      description: "bheemarathashanthi",
      url: '',
    },
    {
      title: 'கணபதி ஹோமம்',
      description: "ganapathyhomam",
      url: '',
    },
    {
      title: 'க்ருஹப்ரவேசம்',
      description: 'gruhapravesham',
      url: '',
    },
    {
      title: 'ஜாதகர்மா & நாமகரணம்',
      description: 'jathakarma',
      url: '',
    },
    {
      title: 'கனகாபிஷேகம்',
      description: 'kanakabiseakam',
      url: '',
    },
    
    {
      title: 'ம்ருத்யுஞ்சய ஹோமம்',
      description: 'mruthyunjayahomam',
      url: '',
    },
    {
      title: 'நவக்ரஹ ஹோமம்',
      description: 'navagrahahomam',
      url: '',
    },
    {
      title: 'ருத்ரைகாதசி',
      description: 'ruthrakaadhashi',
      url: '',
    },
    {
      title: 'சதாபிஷேகம்',
      description: 'sathabiseakam',
      url: '',
    },
    {
      title: 'சீமந்தம்',
      description: 'seemantham',
      url: '',
    },
    {
      title: 'ஷஷ்ட்யப்த பூர்த்தி',
      description: 'shashtyabdhapoorthi',
      url: '',
    },
    {
      title: 'சுதர்சன ஹோமம்',
      description: 'sudarsanahomam',
      url: '',
    },
    {
      title: 'உபநயனம்',
      description: 'upanayam',
      url: '',
    },
    {
      title: '    விவாஹம்',
      description: 'vivaham',
      url: '',
    },


    
  ]
}
