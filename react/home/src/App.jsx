import React from "react";
import {createRoot} from "react-dom/client";
import "./index.scss"
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <div className="mx-auto max-w-6xl">
    <Header title="Header from Home page" />
      <div className="py-10 min-h-80">
         <HomeContent />
      </div>
    <Footer />
  </div>
);
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BrowserRouter><App /> </BrowserRouter>,);

// ReactDOM.render(<App />, document.getElementById("app"));
