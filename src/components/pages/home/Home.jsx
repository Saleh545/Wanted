import "./home.css";
import Header from "../../header/Header";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";


const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <Header />
        <div className="hero">
          <div className="wrapper">
            <p>Beginning of your</p>

            <p>
              career
              <div className="words">
                <span>steps </span>
                <span>life</span>
                <span>path</span>
              </div>
              is Wanted !
            </p>
          </div>

          <div className="input">
            <input type="search" placeholder="Search for any internships" />
            <i>
              <CiSearch />
            </i>
          </div>
        </div>
        <div className="companies">
          <h3>Our collaborated companies</h3>

          <div className="companies-cards">

            <div className="companies-card">
              <div className="img">
                <img src="public/images/img-1.png" alt="" />
              </div>
              <div className="card-text">
                <h5>Mailchimp</h5>
                <p>Software Engineering Intern</p>
                <Link>Get details <i><GoArrowRight /></i></Link>
              </div>
            </div>
            <div className="companies-card">
              <div className="img">
                <img src="public/images/img-2.png" alt="" />
              </div>
              <div className="card-text">
                <h5>Azercell</h5>
                <p>Product Management Intern</p>
                <Link>Get details <i><GoArrowRight /></i></Link>
              </div>
            </div>
            <div className="companies-card">
              <div className="img">
                <img src="public/images/img-3.png" alt="" />
              </div>
              <div className="card-text">
                <h5>Trello</h5>
                <p>Human Resources Intern</p>
                <Link>Get details <i><GoArrowRight /></i></Link>
              </div>
            </div>
            <div className="companies-card">
              <div className="img">
                <img src="public/images/img-4.png" alt="" />
              </div>
              <div className="card-text">
                <h5>Asana</h5>
                <p>Graphic Design Intern</p>
                <Link>Get details <i><GoArrowRight /></i></Link>
              </div>
            </div>


          </div>
        </div>

        <div className="timeline">
          <h1>Your project timeline:</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
