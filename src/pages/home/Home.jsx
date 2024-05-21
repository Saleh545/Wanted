import "./home.css";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import Header from "../../components/header/Header";
import Foooter from "../../components/footer/Foooter";
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
              <span className="words">
                <span>steps </span>
                <span>life</span>
                <span>path</span>
              </span>
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
          <h3>Top companies</h3>

          <div className="companies-cards">
            <div className="companies-card">
              <div className="img">
                <img src="./images/img-1.png" alt="" />
              </div>
              <div className="card-text">
                <h5>Mailchimp</h5>
                <p>Software Engineering Intern</p>
                <Link>
                  Get details <GoArrowRight />
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
                  Get details <GoArrowRight />
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
                  Get details <GoArrowRight />
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
                  Get details <GoArrowRight />
                </Link>
              </div>
            </div>
            <div className="companies-card">
              <div className="img">
                <img src="./images/img-1.png" alt="" />
              </div>
              <div className="card-text">
                <h5>Mailchimp</h5>
                <p>Software Engineering Intern</p>
                <Link>
                  Get details <GoArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="container">
            <h1>Your project timeline:</h1>
            <div className="timeline-grid">
              <div className="timeline-texts ">
                <h2>Product</h2>
                <p>
                  The product details page offers all necessary project
                  information, including a clear 4-week timeline. Your main
                  objective is to deliver a viable solution within this
                  timeframe
                </p>
              </div>
              <div className="timeline-texts timeline-texts2 ">
                <h2>Team</h2>
                <p>
                  Explore your team's profiles to learn about them, including
                  links to their professional accounts and past projects. Feel
                  free to drop them a message to introduce yourself and say
                  hello!{" "}
                </p>
              </div>
              <div className="timeline-texts timeline-texts4 ">
                <h2>Task Done</h2>
                <p>
                Most companies employ task management tools. We've designed one for you to organize and track tasks effectively, showcasing your proficiency in task management to hiring managers!
                </p>
              </div>
              <div className="timeline-texts timeline-texts3 ">
                <h2>Calendar</h2>
                <p>
                Efficient communication within your team is vital. Access our team calendar to view everyone's availability and simplify meeting scheduling. We've already scheduled the first meeting for you!
                </p>
              </div>
              <div className="timeline-texts timeline-texts5 ">
                <h2>Submit your project</h2>
                <p>
                You've completed your project and deployed it. We're excited to see your work! You now have the chance to present it to professionals, gaining valuable feedback to boost your confidence in interviews!                </p>
              </div>
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
                  professionally crafted CV, on us! Showcase your newfound
                  skills and experiences with confidence as you transition into
                  the next phase of your career.
                </p>
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
              <div className="card-img">
                <img src="./images/find.png" alt="" />
              </div>
              <div className="card-text">
                <h5>Find a job</h5>
                <span>Apply to the vacancy that suits</span>
              </div>
            </div>

            <div className="card">
              <div className="card-img">
                <img src="./images/get.png" alt="" />
              </div>
              <div className="card-text">
                <h5>Get experience</h5>
                <span>Do your hybrid practice</span>
              </div>
            </div>

            <div className="card">
              <div className="card-img">
                <img src="./images/join.png" alt="" />
              </div>
              <div className="card-text">
                <h5>Join a Team</h5>
                <span>Individual, Teamwork opportunity</span>
              </div>
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
            </div>
          </div>
        </div>
      </div>
      <div className="here">
        <div className="container">
          <h3>Here's What Our Users Say </h3>
          <div className="here-flex">
            <div className="here-card">
              <div className="here-top">
                <img src="./images/mira.png" alt="" />
                <h4>Mira Herwitz</h4>
              </div>
              <div className="here-text">
                <p>
                  <span>"</span>
                  The variety of prestigious internships listed here is
                  unmatched. I found exactly what I was looking for{" "}
                  <span>"</span>
                </p>
              </div>
            </div>
            <div className="here-card livia">
              <div className="here-top">
                <img src="./images/livia.png" alt="" />
                <h4>Livia Dokidis</h4>
              </div>
              <div className="here-text">
                <p>
                  <span>"</span>
                  Finding and applying for internships has never been this easy.
                  Great job on the design
                  <span>"</span>
                </p>
              </div>
            </div>
          </div>
          <div className="here-flex2">
            <div className="here-card talan">
              <div className="here-top">
                <img src="./images/talan.png" alt="" />
                <h4>Talan Culhane</h4>
              </div>
              <div className="here-text">
                <p>
                  <span>"</span>
                  Highly satisfied with the internships listed here. It's my
                  go-to site for career opportunities
                  <span>"</span>
                </p>
              </div>
            </div>
            <div className="here-card jaylon">
              <div className="here-top">
                <img src="./images/jaylon.png" alt="" />
                <h4>Jaylon Botosh</h4>
              </div>
              <div className="here-text">
                <p>
                  <span>"</span>
                  Thanks to this platform, I secured an internship at a Fortune
                  500 company. Couldn't be happier <span>"</span>
                </p>
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
