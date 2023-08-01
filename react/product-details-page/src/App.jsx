import React, {Suspense} from "react";
import { createRoot } from 'react-dom/client';
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

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

// ReactDOM.render(<App />, document.getElementById("app"));
