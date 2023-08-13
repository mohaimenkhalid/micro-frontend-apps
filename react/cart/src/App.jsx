import React from "react";
import Header from "home/Header";
import Footer from "home/Footer";
import "./index.scss";
import CartContent from "./components/CartContent";
import {createRoot} from "react-dom/client";

const App = () => (
    <div className="mx-auto max-w-6xl">
        <Header title="Cart Page" />
        <div className="py-10 min-h-80">
            <CartContent />
        </div>
        <Footer />
    </div>
);
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
