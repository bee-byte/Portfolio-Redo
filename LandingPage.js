import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div>
      <header className="header">
        <div className="header-info">
          <img
            className="header-img"
            src="https://i.postimg.cc/cJDnfs34/BB-logo.jpg"
            alt="Ipenywis"
          />
          <h3>I am Brittney Bowers</h3>
          <h4> I am a Frontend Web Developer</h4>
          <button className="btn" href="#cards">
            <a href="#cards">Get to know me !</a>
          </button>
        </div>
      </header>

      <section id="cards">
        <div class="container">
          <h3></h3>
          <div class="cards">
            <div class="card">
              <div class="front">
                <h2>About Me</h2>
              </div>
              <div class="back">
                <h3>Brittney Bowers</h3>
                <p>
                  I am a very open-minded and hardworking indiviual. I am a
                  family person and extremely goal driven. I love Web
                  Development and find my passion in web designing. The thought
                  of attracting clients through technology gives me a sense of
                  warmth and excitement. I believe that dedication and more than
                  your best is key.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="front">
                <h2>My Projects</h2>
              </div>
              <div class="back">
                <a href="https://github.com/bee-byte/Contact-Keeper">
                  <img
                    className="card-images"
                    src="https://i.postimg.cc/dtcQYn3S/contact-keeper.png"
                    alt="contact-keeper"
                  />
                </a>
                <a href="https://github.com/bee-byte/Github-Finder">
                  <img
                    className="card-images"
                    src="https://i.postimg.cc/y8wvQJv9/github-finder.png"
                    alt="github-finder"
                  />
                </a>
                <a href="https://github.com/bee-byte/IT-Logger">
                  <img
                    className="card-images"
                    src="https://i.postimg.cc/4yLD2zLZ/it-logger.png"
                    alt="It-Logger"
                  />
                </a>
                <a href="https://sport-inc.herokuapp.com/">
                  <img
                    className="card-images"
                    src="https://i.postimg.cc/fRRR2K8t/ecommerce-imh.png"
                    alt="SportInc"
                  />
                </a>
              </div>
            </div>
            <div class="card">
              <div class="front">
                <h2>Work Experience</h2>
              </div>
              <div class="back">
                <h3>Work Experience</h3>
                <p>
                  I have worked in customer services for 3years in 3 call
                  centres before I studied Web development and Programming . I
                  have gained communication and consumer friendly skills for the
                  duration of time at these work places.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Resume" className="section resume-sec">
        <div className="section-header">Languages &amp; Frameworks</div>
        <div className="resume-container">
          <div className="resume-item">
            <span className="item-logo">
              <img src="https://i.postimg.cc/dtFFFG7r/react.png" />
            </span>
            <span className="item-name">React</span>
          </div>
          <div className="resume-item">
            <span className="item-logo">
              <img src="https://i.postimg.cc/fy2f8xpp/js.png" />
            </span>
            <span className="item-name">JavaScript</span>
          </div>
          <div className="resume-item">
            <span className="item-logo">
              <img src="https://i.postimg.cc/ZRymbcFF/Python.png" />
            </span>
            <span className="item-name">Python</span>
          </div>
          <div className="resume-item">
            <span className="item-logo">
              <img src="https://i.postimg.cc/HxJYJHHM/mysql.png" />
            </span>
            <span className="item-name">MySQL</span>
          </div>
        </div>
      </section>
      <h1 className="profile-header">Testimonials</h1>
      <div class="profile-container">
        <div class="profile-card">
          <img
            src="https://i.postimg.cc/P52W6W25/thapelo.jpg"
            alt="image1"
            class="profile-icon"
          />
          <div class="profile-name">Thapelo Tsotetsi</div>
          <div class="profile-text">
            Brittney Bowers is a Life Choices Academy student for 2020. One
            thing you should know about Brittney is her ability to learn new
            programming languages and great communication skills.
          </div>
        </div>
        <div class="profile-card">
          <img
            src="https://i.postimg.cc/C5TkZmLm/ryan.jpg"
            alt="image2"
            class="profile-icon"
          />
          <div class="profile-name">Ryan Barron</div>
          <div class="profile-text">
            Brittney is a strong willed and she never backs down from a
            challenge.When it comes to her skill as a developer she truly is
            unique with her design style therefore she would only be an asset to
            any company.
          </div>
        </div>
        <div class="profile-card">
          <img
            src="https://i.postimg.cc/7LjTcm7w/sergio.jpg"
            alt="image3"
            class="profile-icon"
          />
          <div class="profile-name">Sergio Pillay</div>
          <div class="profile-text">
            Brittney is a dedicated and creative developer who strives to
            produce the best quality in all she does.This makes Brittney an
            asset to any team.
          </div>
        </div>
        <div class="profile-card">
          <img
            src="https://i.postimg.cc/KcWpv225/oslin.jpg"
            alt="image3"
            class="profile-icon"
          />
          <div class="profile-name">Oslin Johnson</div>
          <div class="profile-text">
            Brittney is a great person with a passionate spirit that drives her
            to a point of understanding. These qualities has made her a person
            that goes through the utmost length to get something done and
            improve her skillset.
          </div>
        </div>
      </div>
      <div>
        <section id="contact" className="add-padding border-top-color2">
          <div className="container text-center">
            <h1 className="big-text">Contact Me</h1>

            {/*=== Contact Form ===*/}
            <form
              id="contact-form"
              className="col-sm-6 col-md-offset-1 scrollimation fade-left d3"
              className="myForm"
              action="https://formspree.io/xnqggpkk"
              method="POST"
            >
              <div className="form-group">
                <label className="control-label" htmlFor="contact-name">
                  Name
                </label>
                <div className="controls">
                  <input
                    id="contact-name"
                    name="contactName"
                    className="form-control requiredField"
                    type="text"
                  />
                </div>
              </div>
              {/* End name input */}
              <div className="form-group">
                <label className="control-label" htmlFor="contact-mail">
                  Email
                </label>
                <div className=" controls">
                  <input
                    id="contact-mail"
                    name="email"
                    className="form-control requiredField"
                    type="email"
                  />
                </div>
              </div>
              {/* End email input */}
              <div className="form-group">
                <label className="control-label" htmlFor="contact-message">
                  Message
                </label>
                <div className="controls">
                  <textarea
                    id="contact-message"
                    name="comments"
                    className="form-control requiredField"
                    data-new-placeholder="Your message"
                    rows={6}
                    data-error-empty="Please enter your message"
                    defaultValue={""}
                  />
                </div>
              </div>
              {/* End textarea */}
              <p>
                <button
                  name="submit"
                  type="submit"
                  className="btn btn-color2 btn-block"
                  data-error-message="Error!"
                  data-sending-message="Sending..."
                  data-ok-message="Message Sent"
                >
                  Send Message
                </button>
              </p>
              <input
                type="hidden"
                name="submitted"
                id="submitted"
                defaultValue="true"
              />
            </form>
            {/* End contact-form */}
          </div>
        </section>
        {/* FOOTER */}
        <footer id="main-footer" className="add-padding border-top-color2">
          <div className="container">
            <h3 className="footer-header">VISIT MY BLOG</h3>
            <br />
            <ul className="social-links text-center">
              <li>
                <a href="https://github.com/bee-byte" target="_blank">
                  <i class="fab fa-github" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/brittney-bowers-8517151a6/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
            <p className="text-center">© 2020 - Brittney Bowers</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
