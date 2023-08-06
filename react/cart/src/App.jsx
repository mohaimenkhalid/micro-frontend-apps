import React from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import "./index.scss";
import CartContent from "./components/CartContent";

const App = () => (
    <div className="mx-auto max-w-6xl">
        <Header title="Cart Page" />
        <div className="py-10 min-h-80">
            <CartContent />
        </div>
        <Footer />
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
