
import React from "react";
import sec from '../../../requirement/home/sec.jpg';


import "./Style.css";

export default function Profile() {
  return (
    <div id="home">
      <div className="profile-container">
        <nav className="head">
          <h2 className="logo">
            Portfo<span className="log">lio</span>
          </h2>
          <ul className="det">
            <li>
              <a href="#home" >Home</a>
            </li>
            <li>
              <a href="#abt">About</a>
            </li>
            <li>
              <a href="#Educa">Education</a>
            </li>
            <li>
              <a href="#max">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a href="https://github.com/Vibhor02">
                  <i className="fa fa-github-square"></i>
                </a>{" "}
                <a href="https://www.linkedin.com/in/vibhor-mishra-866a191a6/">
                  <i className="fa fa-linkedin"></i>
                </a>{" "}
                <a href="https://www.instagram.com/vibhor_mishra16/">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="details-name">
              <span className="first">
                {" "}
                Hello, I'm <span className="bold">Vibhor Mishra</span>
              </span>
            </div>
            <div className="details-role">
              <span className="first">
                {" "}
                <h1>A Enthusiast Learner And Engineer</h1>
              </span>
            </div>

            <div className="options">
              <a className="btn primary-btn" href="#max">
                {""}
                Hire Me{""}
              </a>
              <a href="Vibhor Resume.pdf" download={"Vibhor Resume.pdf"}>
                <button className="btn highlighted-btn">Resume</button>
              </a>
            </div>
          </div>
          <div className="pic">
            <div className="pic-background"></div>
          </div>
        </div>
      </div>
      <section className="about" id="abt">
        <div className="main">
          <img src={sec} alt="Personalimage"></img>
          <div className="about-text">
            <h2 className="abt">About Me</h2>
            <h5>
              Developer <span className="log">and Designer</span>
            </h5>
            <p>
              I am a very active and thoughtful listener and worker, I am also
              fast learner technology enthusiast. I work smartly and I quickly
              adopt to any environment.
            </p><div className="button">
            <a  type="button" href="#max">Let's Talk</a>
         </div> </div>
        </div>
      </section>

      <div className="Edu" id="Educa">
        <div className="title">
          <h2>Education</h2>
        </div>
        <div className="box">
          <div className="card">
          <i className="fa-solid fa-graduation-cap"></i>
            <h5>Graduaction</h5>
            <div className="para">
              <p>
                Aug'2019-Jun'2023
                <br /> I am Completing my Graduation from Babu Banarasi Das
                Northern India Institute Of Technology with specialization in
                Computer Science Branch.
              </p>
            </div>
          </div>

          <div className="card">
            <i className="fa-solid fa-school"></i>
            <h5>Intermediate</h5>
            <div className="para">
              <p>
                May'2018-April'2019 <br />I am Completed my Intermediate studies
                from Rani Laxmi Bai Memorial School in Lucknow with Physics,
                Chemistry, Mathematics, Computer Science and English.
              </p>
            </div>
          </div>

          <div className="card">
            <i className="fa-solid fa-school"></i>
            <h5>High School</h5>
            <div className="para">
              <p>
                May'2016-April'2017 <br />I am Completed my High School studies
                from Rani Laxmi Bai Memorial School in Lucknow with Physics,
                Chemistry, Biology, Mathematics, Computer Science, English and
                Hindi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="max-con">
          <h2 className="max" id="max">Contact Me</h2>
          <div className="centent-contat">
            <div className="left">
              <div className="text">Get In Touch</div>
              <p>
                Hello, This is Vibhor Mishra A enthusiast learner and worker.
              </p>
              <div className="icons">
                <div className="row">
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Vibhor Mishra</div>
                  </div>
                </div>
                <div className="row">
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Uttar Pradesh, India</div>
                  </div>
                </div>
                <div className="row">
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">vibhormishra2002@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message Me</div>
              <form action="#">
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Name" required></input>
                  </div>
                  <div className="field email">
                    <input type="email" placeholder="Email" required></input>
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Subject" required></input>
                </div>
                <div className="field textarea">
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="Describe Project"
                  ></textarea>
                </div>
                <div className="button">
                <button type="Submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <a href="https://github.com/Vibhor02">
          <i className="fa fa-github-square"></i>
        </a>{" "}
        <a href="https://www.linkedin.com/in/vibhor-mishra-866a191a6/">
          <i className="fa fa-linkedin"></i>
        </a>
        <p className="end">Copyright By Vibhor Mishra</p>
      </footer>
    </div>
  );
}
