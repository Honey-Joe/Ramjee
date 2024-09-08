import ReactDOM from "react-dom/client";
import "./index.css"
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

const Applayot =()=>{
  return (
    <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayot></Applayot>)