import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";


//Animation
import AOS from "aos"
import "aos/dist/aos.css"


const app = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
    AOS.refresh()
  }, [])


  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();