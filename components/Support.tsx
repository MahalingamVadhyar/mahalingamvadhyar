import Footer from '~/components/Footer'
import Nav from '~/components/Nav'

const Layout: React.FunctionComponent = () => {
  return (
    <div className="">
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
      <Footer />
    </div>
  )
}

export default Layout
