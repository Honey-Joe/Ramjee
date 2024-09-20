import Footer from "../Footer/Footer"
import Popular from "./Popular/Popular"
import About from "./About/About"
import AboutUs from "./AboutUs/AboutUs"
import Many from "./Many/Many"
import Partners from "./Partners/Partners"
import Navbar from "../Navbar/Navbar"
import Header from "./Header/Header"

const AboutRoute = () => {
  return (
    <>
        <Navbar></Navbar>
        <Header></Header>
      <AboutUs></AboutUs>
      <About></About>
      <Many></Many>
      <Popular></Popular>
      <Partners></Partners>
      <Footer></Footer>
    </>
  )
}

export default AboutRoute

