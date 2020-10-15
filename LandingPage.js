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
          <h4>And I am a Frontend Web Developer</h4>
          <button className="btn" href="#Resume">
            <a href="#experience">Get to know me !</a>
          </button>
        </div>
      </header>
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
      <section id="cards">
        <div class="container">
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
                <img
                  className="card-images"
                  src="https://i.postimg.cc/dtcQYn3S/contact-keeper.png"
                  alt="contact-keeper"
                />

                <img
                  className="card-images"
                  src="https://i.postimg.cc/y8wvQJv9/github-finder.png"
                  alt=""
                />
                <img
                  className="card-images"
                  src="https://i.postimg.cc/4yLD2zLZ/it-logger.png"
                  alt=""
                />
                <img
                  className="card-images"
                  src="https://i.postimg.cc/fRRR2K8t/ecommerce-imh.png"
                  alt=""
                />
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
      <section className="section contact-sec">
        <div className="section-header" style={{ color: "#fff" }}>
          Reach US
        </div>
        <div className="contact-container">
          <form id="contact-form">
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" placeholder="Full Name" />
            <label htmlFor="name">Your Email</label>
            <input type="email" name="email" placeholder="Email Address" />
            <label htmlFor="name">Your Message</label>
            <textarea
              name="content"
              id="contact-content"
              placeholder="Your Message..."
              defaultValue={""}
            />
          </form>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
