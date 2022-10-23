import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

const Home = () => {
  return (
    <div className="home">
      <h1>Home Component</h1>
      <Banner />

      <div className="home__section">
        <Card
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Entire Homes"
          description="comfortable private places, with room for family or friends"
        />
        <Card
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts"
        />
        <Card
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Unique stays"
          description="Spaces that are more than just a place to stay"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Entire Homes"
          description="comfortable private places, with room for family or friends"
          price="$350 a night"
        />
        <Card
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts"
          price="$70 a night"
        />
        <Card
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Unique stays"
          description="Spaces that are more than just a place to stay"
          price="$50 a night"
        />
      </div>
    </div>
  );
};

export default Home;
