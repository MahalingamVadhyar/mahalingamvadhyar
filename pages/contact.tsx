import { NextPage } from 'next'
import Heading from '~/components/Heading'
import Layout from '~/components/Layout'
import Projects from '~/components/Projects'

const About: NextPage = () => {
  return (
    <Layout>
       
      <div className="md:gap-4 p-6 bg-blue-50 md:grid">
  
  <div className="md:grid grid-cols-2 gap-6 lg:px-40">
    <div>

      <div className="bg-white p-4">
        <div>
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-700">M.Manikandan (Main Vadhyar)</h1>
          </div>
<div className="flex items-center p-4 bg-white rounded-lg shadow-sm dark:bg-gray-800">
      <div className="p-2 mr-4 text-white rounded-full">
        <a href="https://wa.me/919344850599?text=Hello,%20I%20am%20Manikandan%20please%20contact%20me?"><img alt="whatapp" src="img/whatsapp.png"/></a>
      </div>
      <div>
        <a href="tel:+91 93448 50599"><h4 className="mb-2 text-sm font-medium text-gray-900">+91 93448 50599</h4></a>
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
          <h1 className="text-2xl font-bold text-gray-700">M.Venkateswaran (Vijay Vadhyar)</h1>
          
        </div>

        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm dark:bg-gray-800">
      <div className="p-2 mr-4 text-white rounded-full">
        <a href="https://wa.me/919443440856?text=Hello,%20I%20am%20Vijay%20please%20contact%20me?"><img alt="whatapp" src="img/whatsapp.png"/></a>
      </div>
      <div>
        <a href="tel:+91 9443440856"><h4 className="mb-2 text-sm font-medium text-gray-900">+91 94434 40856</h4></a>
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
          
          <spnan className="text-lg"></spnan>
          <p className="mt-6 text-lg text-gray-700">9c S.A Nagar <br/>Muthusamy colony <br/>Selvapuram Coimbatore 641026</p>
        </div>
      </div>
    </div>
  </div>
</div>
</Layout>
  )
}

export default About
