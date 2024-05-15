import "./home.css";
import Header from "../../header/Header";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import Foooter from "../../footer/Foooter";

const Home = () => {
  return (
    <div className="home-page">
        <Header />
      <div className="home-img">
        <img src="./images/hero-bckrnd.png" alt="" />
      </div>
      <div className="container">
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
                <img src="./images/img-1.png" alt="" />
              </div>
              <div className="card-text">
                <h5>Mailchimp</h5>
                <p>Software Engineering Intern</p>
                <Link>
                  Get details{" "}
                  <i>
                    <GoArrowRight />
                  </i>
                </Link>
              </div>
            </div>
            <div className="companies-card">
              <div className="img">
                <img src="./images/img-2.png" alt="" />
              </div>
              <div className="card-text">
                <h5>Azercell</h5>
                <p>Product Management Intern</p>
                <Link>
                  Get details{" "}
                  <i>
                    <GoArrowRight />
                  </i>
                </Link>
              </div>
            </div>
            <div className="companies-card">
              <div className="img">
                <img src="./images/img-3.png" alt="" />
              </div>
              <div className="card-text">
                <h5>Trello</h5>
                <p>Human Resources Intern</p>
                <Link>
                  Get details{" "}
                  <i>
                    <GoArrowRight />
                  </i>
                </Link>
              </div>
            </div>
            <div className="companies-card">
              <div className="img">
                <img src="./images/img-4.png" alt="" />
              </div>
              <div className="card-text">
                <h5>Asana</h5>
                <p>Graphic Design Intern</p>
                <Link>
                  Get details{" "}
                  <i>
                    <GoArrowRight />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline">
          <h1>Your project timeline:</h1>

          <div className="timeline-img">
            <img src="./images/timeline.png" alt="" />
          </div>

          <div className="timeline-texts">
            <div className="timeline-text">
              <h2>Product</h2>
              <p>
                The product details page offers all necessary project
                information, including a clear 4-week timeline. Your main
                objective is to deliver a viable solution within this timeframe
              </p>
            </div>
            <div className="timeline-text2 timeline-text">
              <h2>Team</h2>
              <p>
                Explore your team's profiles to learn about them, including
                links to their professional accounts and past projects. Feel
                free to drop them a message to introduce yourself and say hello!{" "}
              </p>
            </div>
          </div>
          <div className="timeline-texts">
            <div className="timeline-text3 timeline-text">
              <h2>Task Done</h2>
              <p>
                Most companies employ task management tools. We've designed one
                for you to organize and track tasks effectively, showcasing your
                proficiency in task management to hiring managers!
              </p>
            </div>
            <div className="timeline-text4 timeline-text">
              <h2>Calendar</h2>
              <p>
                Efficient communication within your team is vital. Access our
                team calendar to view everyone's availability and simplify
                meeting scheduling. We've already scheduled the first meeting
                for you!
              </p>
            </div>
          </div>
          <div className="timeline-texts timeline-texts5">
            <div className="timeline-text5 timeline-text">
              <h2>Submit your project</h2>
              <p>
                You've completed your project and deployed it. We're excited to
                see your work! You now have the chance to present it to
                professionals, gaining valuable feedback to boost your
                confidence in interviews!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cv">
        <div className="container">
          <div className="cv-content">

          <div className="cv-flex">
            <div className="cv-text">
              <h3>Unlock Your Future: Free CV Upon Internship Completion</h3>
              <p>
                We believe in empowering our interns to succeed beyond their
                internship experience. That's why we offer a special bonus for
                those who complete their internship online with us a
                professionally crafted CV, on us! Showcase your newfound skills
                and experiences with confidence as you transition into the next
                phase of your career.
              </p>
              <Link>Learn more</Link>
            </div>
            <div className="cv-img">
              <img src="./images/cv.png" alt="" />
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="card-center">
        <div className="container">
          <div className="card-flex">
            <div className="card">
              <img src="./images/cirle1.png" className="img1" alt="" />
              <div className="card-img">
                <img src="./images/join.png" alt="" />
              </div>
              <div className="card-text">
                <h5>Join team</h5>
                <span>Hiring managers look for soft skills</span>
              </div>
              <img className="img2" src="./images/circle2.png" alt="" />
            </div>

            <div className="card">
              <img src="./images/circle3.png" className="img3" alt="" />
              <div className="card-img">
                <img src="./images/get.png" alt="" />
              </div>
              <div className="card-text">
                <h5>Get experience</h5>
                <span>Work-simulated environment</span>
              </div>
              <img src="./images/circle4.png" className="img4" alt="" />
            </div>

            <div className="card">
              <img src="./images/circle5.png" className="img5" alt="" />
              <div className="card-img">
                <img src="./images/find.png" alt="" />
              </div>
              <div className="card-text">
                <h5>Find a job</h5>
                <span>Apply what you’ve learned</span>
              </div>
              <img src="./images/circle6.png" className="img6" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="intern">
        <div className="container">
          <div className="intern-flex">
            <div className="intern-img">
              <img src="./images/qaqas.png" alt="" />
            </div>
            <div className="intern-text">
              <h2>Intern Success: Our Special Bonus Offer</h2>
              <p>
                1. <span>Setting Expectations:</span> Clearly outline tasks,
                responsibilities, and performance standards at the start of the
                internship.
              </p>
              <p>
                2. <span>Monitoring Progress:</span> Continuously track interns'
                performance, offering feedback and support as needed.
              </p>
              <p>
                3. <span>Rewarding Achievement:</span> Present a special bonus
                upon successful completion of the internship, acknowledging
                their hard work and contributions.
              </p>
              <div className="input email">
                <input type="search" placeholder="Email address" />
                <i>
                  <MdOutlineMail />{" "}
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foooter />
    </div>
  );
};

export default Home;
