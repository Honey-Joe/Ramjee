import ReactDOM from "react-dom/client";
import "./index.css"
import Footer from "./components/Footer/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contactroute from "./components/Contactroute/Contactroute";
import Navbar from "./components/Navbar/Navbar";
import Courseroute from "./components/Courseroute/Courseroute";
import Body from "./components/Body/Body";

const Applayot =()=>{
  return (
    <>
      <Navbar></Navbar>
      <Body></Body>
      <Footer></Footer>
    </>
  )
}
const approuter = createBrowserRouter([
  {
    path:"/contact",
    element:<Contactroute></Contactroute> 
  },
  {
    path:"/",
    element:<Applayot></Applayot>
  },
  {
    path:"/course",
    element:<Courseroute></Courseroute>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter}></RouterProvider>)