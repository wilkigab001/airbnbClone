import React from "react";
import './Home.css';
import Banner from './Banner'

const Home = () => {
    return( 
        <div className="home">
            <h1>Home Component</h1>
            <Banner />
        </div>
    )
}

export default Home