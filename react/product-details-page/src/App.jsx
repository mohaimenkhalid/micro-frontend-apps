import React, {Suspense} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { createRoot } from 'react-dom/client';
//Asynchronous loading component
const Header = React.lazy(() => import("home/Header"));
import Footer from "home/Footer";

import "./index.scss";
import PDPContent from "./components/PDPContent";

const App = () => (
    <BrowserRouter basename="/">
        <div className="mx-auto max-w-6xl">
            <Suspense fallback={<div>Loading...</div>}>
                <Header title="Header from Product Details page" />
            </Suspense>
            <div className="py-10 min-h-80">
                <Routes>
                    <Route path="product/:id" element={<PDPContent />} />
                </Routes>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
);

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

// ReactDOM.render(<App />, document.getElementById("app"));
