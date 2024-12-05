import React from "react";
import Header from "../../component/Header"
import Hero from "../../component/HomeHero/Hero";
import Main from "./HomeMain/Main";
import Footer from "../../component/Footer";

const Home = () => {

    return (
        <>
            <Header/>
            <Hero/>
            <Main/>
            <Footer/>
        </>
    )
}

export default Home