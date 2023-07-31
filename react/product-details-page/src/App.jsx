import React, {Suspense} from "react";
import ReactDOM from "react-dom";
//Asynchronous loading component
const Header = React.lazy(() => import("home/Header"));
import Footer from "home/Footer";
import "./index.scss";

const App = () => (
    <div className="text-3xl mx-auto max-w-6xl">
        <Suspense fallback={<div>Loading...</div>}>
            <Header title="Header from Product Details page" />
        </Suspense>
        <div className="py-10 bg-gray-300 h-80">
            <div className="text-center">Home Page From Product details page</div>
        </div>
        <Footer />
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
