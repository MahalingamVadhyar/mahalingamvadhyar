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
    </div>
  </div>
      <div className="md:gap-4 p-6 bg-blue-50 md:grid">
  <div className="grid grid-cols-2 justify-between lg:px-40 md:mb-4">
    <h1 className="justify-start md:text-left text-2xl">My Son's</h1>
    
  </div>
  <div className="md:grid grid-cols-2 gap-6 lg:px-40">
    <div>

      <div className="bg-white p-4">
        <div>
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-700">M.Manikandan <span style={{fontSize:'14px'}}>(Mani Vadhyar)</span></h1>
          </div>
<div className="flex items-center p-4 bg-white rounded-lg shadow-sm dark:bg-gray-800">
      <div className="p-2 mr-4 text-white rounded-full">
        <a href="https://wa.me/919344850599?text=Hello,%20I%20am%20Manikandan%20please%20contact%20me?"><img alt="whatapp" src="img/whatsapp.png"/></a>
      </div>
      <div>
        <a href="tel:+91 93448 50599"><h4 style={{color:'blue'}} className="mb-2 text-sm font-medium text-gray-900">+91 93448 50599</h4></a>
        <p className="text-sm font-normal text-gray-800">Connect us</p>
      </div>
    </div>
          <div className="flex">
            <span className="block mb-4 text-xl"></span>
            
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white p-4 md:mt-0 mt-6">
      <div>
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-700">M.Venkateswaran  <span style={{fontSize:'14px'}}>(Vijay Vadhyar)</span></h1>

          
        </div>

        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm dark:bg-gray-800">
      <div className="p-2 mr-4 text-white rounded-full">
        <a href="https://wa.me/919443440856?text=Hello,%20I%20am%20Vijay%20please%20contact%20me?"><img alt="whatapp" src="img/whatsapp.png"/></a>
      </div>
      <div>
        <a href="tel:+91 9443440856" ><h4 style={{color:'blue'}} className="mb-2 text-sm font-medium text-gray-900">+91 94434 40856</h4></a>
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
