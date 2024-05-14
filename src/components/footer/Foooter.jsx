import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Foooter = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="footer-flex">
            <div className="footer-card">
              <Link className="logo">wanted</Link>
              <p>
                Begin new experiences here – guiding users on transformative
                journeys of learning and growth.
              </p>
              <div className="social">
              <Link to="https://www.instagram.com" target="blank">
                  <FaInstagram />
                </Link>
              <Link to="https://www.twitter.com" target="blank">
                  <RiTwitterXFill />
                </Link>
              <Link to="https://www.facebook.com" target="blank">
                  <FaFacebook />
                </Link>
              <Link to="https://www.youtube.com" target="blank">
                  <FaYoutube />
                </Link>
              </div>
            </div>
            <div className="footer-link">

            <div className="footer-card">
              <h5>Company</h5>
              <Link>Find a team member</Link>
              <Link>Candidates</Link>
              <Link>Vacancy</Link>
              <Link>FAQ</Link>
            </div>
            <div className="footer-card">
              <h5>Contact</h5>
              <Link>Baku, Azerbaijan</Link>
              <Link to={"mailto:wanted@gmail.com"}>wanted@gmail.com</Link>
              <Link to={"tel:+994705621269"}>+994 70 562 12 69</Link>
            </div>
            </div>
          </div>{" "}
          <div className="footer-bottom">
            <Link>Terms of Use</Link>
            <Link>Privacy Policy</Link>
            <p>© 2024 Wanted All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foooter;
