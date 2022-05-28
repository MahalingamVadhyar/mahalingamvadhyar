import { NextPage } from 'next'
import Heading from '~/components/Heading'
import Layout from '~/components/Layout'
import Projects from '~/components/Projects'

const Index: NextPage = () => (
  <Layout>
       <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-20">
    <div className="grid justify-center items-center order-1 col-span-1">
      <img className="lg:h-80 md:h-84 h-40 rounded-full" src="img/maha.jpeg" alt="" />
    </div>
    <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
      <h1 className="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">Hi, I am  Mahalingam Vadhyar, Prohit</h1>
      <p className="text-xl text-gray-800 text-center md:text-left">Experience upto 40 years in the field of Prohit in Coimbatore.</p>
      <button className="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-blue-400">Poojai list</button>
   <h1 className="text-2xl mt-3 font-bold text-gray-700">Join us with</h1>
    <div className="mt-5 sm:mt-3 sm:flex items-center justify-center sm:justify-center lg:justify-start">
            
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a target="_blank" href="https://meet.google.com/getalink?hs=202&authuser=1&illm=1653713477327&hl=en" className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-400 hover:bg-indigo-200 md:py-2 md:text-sm md:px-2"> <img className="h-10 w-10" src="img/google-meet.svg" alt="" /> &nbsp;&nbsp;Google Meet</a>
            </div>&nbsp;(or)
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a target="_blank" href="https://us05web.zoom.us/j/8815372384" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-2 md:text-sm md:px-2"> <img className="h-10 w-10" src="img/zoom.svg" alt="" />&nbsp;&nbsp;Zoom Id</a>
            </div>
          </div>

    
    </div>

  </div>
      <div className="md:gap-4 p-6 bg-blue-50 md:grid">
  <div className="grid grid-cols-2 justify-between lg:px-40 md:mb-4">
    <h1 className="justify-start md:text-left text-2xl">My Son's</h1>
    
  </div>
  <div className="md:grid grid-cols-2 gap-6 lg:px-40">
   

     
<div className="bg-white p-4 md:mt-0 mt-2">
     
        <div className="mb-1">
          <h1 className="text-2xl font-bold text-gray-700">M.Manikandan  <span style={{fontSize:'14px'}}>(Mani Vadhyar)</span></h1>
      </div>

        <div className="flex items-center p-1 bg-white rounded-lg shadow-sm dark:bg-gray-800">
      <div className="flex flex-basis p-2 mr-4 text-white rounded-full">
     
        <a href="https://wa.me/919344850599?text=Hello,%20I%20am%20Vijay%20please%20contact%20me?">
        <div className="flex"><img alt="whatapp" className="h-10 w-10" src="img/whatsapp-color.png"/>
         <img className="h-10 w-10" src="img/telegram-logo-945.png"/></div></a>
         <div>
        <a href="tel:+91 919344850599" ><h3 style={{color:'blue'}} className="mb-0 text-lg font-medium text-gray-900">+91 93448 50599</h3></a>
        <p className="text-sm font-normal text-gray-800">Connect us</p>
      </div>
      </div>
      
    </div>
      
    </div>

    <div className="bg-white p-4 md:mt-0 mt-2">
     
        <div className="mb-1">
          <h1 className="text-2xl font-bold text-gray-700">M.Venkateswaran  <span style={{fontSize:'14px'}}>(Vijay Vadhyar)</span></h1>
      </div>

        <div className="flex items-center p-1 bg-white rounded-lg shadow-sm dark:bg-gray-800">
      <div className="flex flex-basis p-2 mr-4 text-white rounded-full">
     
        <a href="https://wa.me/919443440856?text=Hello,%20I%20am%20Vijay%20please%20contact%20me?">
        <div className="flex"><img alt="whatapp" className="h-10 w-10" src="img/whatsapp-color.png"/>
         <img className="h-10 w-10" src="img/telegram-logo-945.png"/></div></a>
         <div>
        <a href="tel:+91 9443440856" ><h3 style={{color:'blue'}} className="mb-0 text-lg font-medium text-gray-900">+91 94434 40856</h3></a>
        <p className="text-sm font-normal text-gray-800">Connect us</p>
      </div>
      </div>
      
    </div>
      
    </div>
    
  </div>
<div className="mt-6 p-4 bg-white px-6">
    <div className="border-b pb-6">
      <h1 className="mt-2 mb-6 text-center text-xl">Location</h1>
      <div className="md:grid grid-cols-2 gap-6">
        <div>
          <img className="md:h-full object-cover" src="img/map.png" alt="" />
        </div>
        <div>
          <h1 className="my-6 text-2xl font-bold text-gray-700">Address</h1>
          
          <span className="text-lg"></span>
          <p className="mt-6 text-lg text-gray-700">9c S.A Nagar <br/>Muthusamy colony <br/>Selvapuram Coimbatore 641026</p>
        </div>
      </div>
    </div>
  </div>
  
</div>
</Layout>
)

export default Index
