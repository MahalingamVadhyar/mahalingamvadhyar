import Footer from '~/components/Footer'
import Nav from '~/components/Nav'


const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="">
      <Nav />
      <main>{children}</main>
      
      <Footer />
    </div>
  )
}

export default Layout
