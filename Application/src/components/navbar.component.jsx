import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.svg";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "black", height: "70px" }}>
      <nav className="px-3">
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ height: "100%" }}
        >
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="logo" style={{ height: "50px" }} />
          </Link>

          {/* Navigation buttons */}
          <div className="d-flex align-items-center" style={{ gap: "20px" }}>
            <Link to="/video">
              <button
                type="button"
                className="btn"
                style={{
                  borderColor: "orange",
                  color: "orange",
                  fontWeight: "bold",
                }}
              >
                Video
              </button>
            </Link>

            <Link to="/audio">
              <button
                type="button"
                className="btn"
                style={{
                  borderColor: "orange",
                  color: "orange",
                  fontWeight: "bold",
                }}
              >
                Audio
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
