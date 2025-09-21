import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer.component";
import Newnavbar from "../components/newnavbar";

import LandingPageImg from "../assets/images/landing.svg";

const Landing = () => {
  return (
    <>
      <Newnavbar />

      <div className="container py-5" style={{ backgroundColor: "#f8f9fa", borderRadius: "20px" }}>
        <div className="d-flex flex-column align-items-center text-center my-5">
          <h1 className="display-2 text-primary fw-bold mb-4">
            AI Interview Test
          </h1>
          <p className="fs-4 text-secondary mb-4">
            Test & Develop Your Interview Skills
          </p>

          <Link to="/video">
            <button
              type="button"
              className="btn btn-primary btn-lg py-3 px-5 rounded-pill shadow-sm"
            >
              Get Started
            </button>
          </Link>
        </div>

        <div className="landing-img text-center my-5">
          <img
            src={LandingPageImg}
            className="img-fluid"
            alt="Landing Illustration"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Landing;
