import React from "react";
import {createRoot} from "react-dom/client";
import "./index.scss"
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header title="Header from Home page" />
      <div className="py-10 bg-gray-300 h-80">
         <div className="text-center">Home Page Container</div>
      </div>
    <Footer />
  </div>
);
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

// ReactDOM.render(<App />, document.getElementById("app"));
