import Navbar from "../components/Navbar"
import Router from "../router/Router"
import Footer from "../components/Footer"


const Layout = () => {
  return (
    <div>
        <Navbar />
        <Router/>
        <Footer />
    </div>
  )
}

export default Layout