import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/japan/home/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/japan" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
