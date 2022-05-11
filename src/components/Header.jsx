import React from "react";

const Header = () => {
  return (
    <header id="header">
      <div className="cw">
        <h1 className="title">Simple, traffic-based pricing</h1>
        <p className="desc">
          Sign-up for our 30-day trial.{" "}
          <span className="mobile-only">
            <br />
          </span>{" "}
          No credit card required.
        </p>
      </div>
    </header>
  );
};

export default Header;
