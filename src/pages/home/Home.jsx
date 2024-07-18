import React from "react";
import "./style.css";
import Background from "../../components/background/Background";

const Home = () => {
  return (
    <Background>
      <section className="app-home-text app-aboutus-text-first">
        <p>
          Welcome to TopMovies, your ultimate destination for discovering the
          top movies!
        </p>
      </section>
      <section className="app-home-text app-home-text-second">
        <p>
          At TopMovies, we are dedicated to providing you with the latest
          information on the top releases across various genres. Whether
          you&#39;re a fan of action, drama, comedy, or thriller, we have
          something for everyone.
        </p>
      </section>
      <section className="app-home-text app-home-text-third">
        <p>
          Join us. Let TopMovies be your go-to source for discovering the top
          and most captivating movies of today!
        </p>
      </section>
    </Background>
  );
};

export default Home;
