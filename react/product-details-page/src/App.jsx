import React from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import "./index.scss";

const App = () => (
    <div className="text-3xl mx-auto max-w-6xl">
        <Header title="Header from Product Details page" />
        <div className="py-10 bg-gray-300 h-80">
            <div className="text-center">Home Page From Product details page</div>
        </div>
        <Footer />
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
