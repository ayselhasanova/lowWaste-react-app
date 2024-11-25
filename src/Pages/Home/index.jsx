import { React, useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Instagram from "../../components/Instagram";

// Icons
import { FaTrash, FaDollarSign, FaCarrot, FaSeedling } from "react-icons/fa";

// Css
import "./style.css";

// SplideJS Slider
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

const Home = () => {
  // Feedback Show more
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    document.querySelector(".feedbacks").classList.add("show-all");
    setShowMore(true); // Update state to show "Show Less"
  };

  const handleShowLess = () => {
    document.querySelector(".feedbacks").classList.remove("show-all");
    setShowMore(false); // Update state to show "Show More"
  };

  // Discount-countdown
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const targetDate = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      now.getDate()
    );
    const timeDiff = targetDate.getTime() - now.getTime();

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <>
      <Header />
      {/* Hero */}
      <section className="hero-section">
        <div className="hero">
          <div className="hero-img">
            <div className="overlay-hero d-flex align-items-center">
              <div className="hero-content">
                <div className="bank-name d-flex">
                  <p> lowWaste</p>
                </div>
                <p className="d-flex">Let's reduce food waste together!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Promotion */}
      <section className="prom">
        <pre>{`
          LowWaste is your best guide to reducing food waste and
           using resources more efficiently!
      `}</pre>
      </section>
      {/* Slider */}
      <section>
        <div className="slider-img d-flex align-content-center">
          <div className="slider">
            <Splide
              options={{
                type: "loop",
                rewind: true,
                autoplay: true,
                interval: 3000,
                pauseOnHover: false,
                arrows: true,
                pagination: true,
              }}
              aria-label="My Favorite Images"
            >
              <SplideSlide className="slide">
                <div className="slider-content">
                  <p className="red">
                    {" "}
                    “Cutting food waste is a delicious way of saving money,
                    helping to feed the world and protect the planet.”
                  </p>
                </div>
                <div className="author">
                  <img
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSpk09EXhiA52gz1LwXUpmQ83Pq7mlBK8-0KgFpT6vJmHpEcIFD"
                    alt="Tristram Stuart"
                  />
                  <div className="author-info">
                    <p className="font-cookie">Tristram Stuart</p>
                    <p>English author and environmental campaigner.</p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="slide">
                <div className="slider-content">
                  <p className="red">
                    “Throwing away food is like stealing from the table of those
                    who are poor and hungry.”
                  </p>
                </div>
                <div className="author">
                  <img
                    src="https://hips.hearstapps.com/hmg-prod/images/pope-francis-gettyimages-461608174.jpg?crop=1xw:1.0xh;center,top&resize=1200:*"
                    alt="Pope Francis"
                  />
                  <div className="author-info">
                    <p className="font-cookie">Pope Francis</p>
                    <p>
                      Head of the Catholic Church and sovereign of the Vatican
                      City State
                    </p>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide className="slide">
                <div className="slider-content">
                  <p className="red">
                    "We should all grow our own food and do our own waste
                    processing, we really should."{" "}
                  </p>
                </div>
                <div className="author">
                  <img
                    src="https://yt3.googleusercontent.com/WuPodYLA22bumFSAnf654wJ8cE7n2Zb8M2KEF5B3RiyziqLTXQpp6JXBYOSH8zifY_jihWVq=s900-c-k-c0x00ffffff-no-rj"
                    alt="Bill Gates"
                  />
                  <div className="author-info">
                    <p className="font-cookie">Bill Gates</p>
                    <p>American businessman and philanthropist</p>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </section>
      {/* Feedbacks */}
      <section className="feedbacks-section">
        <div className="feedbacks">
          <h2>Testimonials</h2>
          <ul>
            <li>
              <div className="feedback">
                <div className="fb">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRttLQ5cMFWWNnhDEkDrDUlF-x8oq5Mr1AF_Q&s"
                    alt="volunteer-girl"
                  />
                  <div>
                    <p className="name">
                      Ethan Brooks{" "}
                      <span className="volunteer">(volunteer)</span>
                    </p>
                    <p>
                      "I love being part of this project! Seeing how small
                      changes can have a big impact on food waste has been truly
                      eye-opening. Plus, the volunteer team is amazing!"
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              {" "}
              <div className="feedback">
                <div className="fb">
                  <div>
                    <p className="name">
                      Sophia Miller <span className="user">(user)</span>
                    </p>
                    <p>
                      "LowWaste makes sustainable living so effortless. I love
                      it!"
                    </p>
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLljn3BG5vTPhlCGNFtJlrygxI883URPRfw&s"
                    alt="volunteer-girl"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="feedback">
                <div className="fb">
                  <img
                    src="https://t3.ftcdn.net/jpg/08/23/31/12/360_F_823311272_ARqhWc0IDvhfpvT4av2W0cX5N9Abdi02.jpg"
                    alt="volunteer-girl"
                  />
                  <div>
                    <p className="name">
                      Olivia Carter <span className="user">(user)</span>{" "}
                    </p>
                    <p>
                      "LowWaste is not just a project; it's a lifestyle. The
                      tools and resources provided make it so easy to adopt
                      sustainable habits.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="extra-feedback">
              {" "}
              <div className="feedback">
                <div className="fb">
                  <div>
                    <p className="name">
                      Isabella Greene{" "}
                      <span className="volunteer">(volunteer)</span>
                    </p>
                    <p>
                      "Volunteering here was amazing. We truly made a
                      difference!"
                    </p>
                  </div>
                </div>{" "}
                <img
                  src="https://t3.ftcdn.net/jpg/06/46/92/68/360_F_646926810_sLEKc3E140TjFRlvIobHfK8JVedBBeIX.jpg"
                  alt="volunteer-girl"
                />
              </div>
            </li>
            <li className="extra-feedback">
              <div className="feedback">
                <div className="fb">
                  <img
                    src="https://media.istockphoto.com/id/1371301907/photo/friendly-young-man-wearing-denim-shirt.jpg?s=612x612&w=0&k=20&c=2KuVFEhKVdPstrmBo7m3pkaxiXkJMiJVUjelRxIcsoo="
                    alt="volunteer-girl"
                  />
                  <div>
                    <p className="name">
                      Liam Turner <span className="user">(user)</span>
                    </p>
                    <p>
                      "The portion calculator is a game-changer for reducing
                      waste!"
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="show-more">
            {!showMore ? (
              <button onClick={handleShowMore}>Show More</button>
            ) : (
              <button onClick={handleShowLess}>Show Less</button>
            )}
          </div>
        </div>
      </section>
      {/* Discount */}
      <section id="discount">
        <div className="discount-bg d-flex">
          <div className="discount-img col-6"></div>
          <div className="countdown col-6">
            <div className="discount-heading d-flex align-items-center">
              <div className="discount-heading-text">
                <p className="summer2019">NEW TRAINING</p>
                <p className="discount">19 december 2024</p>
              </div>
            </div>
            <div className="discount-content d-flex justify-content-center">
              <p>
                <span className="time">{timeRemaining.days}</span>
                <span className="time2">Day</span>
              </p>
              <p>
                <span className="time">{timeRemaining.hours}</span>
                <span className="time2">Hour</span>{" "}
              </p>
              <p>
                <span className="time">{timeRemaining.minutes}</span>
                <span className="time2">Min</span>
              </p>
              <p>
                <span className="time">{timeRemaining.seconds}</span>
                <span className="time2">Sec</span>
              </p>
            </div>
            <div className="shopnow">
              <a href="/">JOIN NOW</a>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics */}
      <section className="statistic-sec">
        <div className="statics-container">
          <ul className="statics-container-icons">
            <li>
              <FaTrash />
              <p>40% of all food is wasted globally</p>
            </li>
            <li>
              <FaDollarSign />
              <p>LowWaste users save an average of 30% more resources</p>
            </li>
            <li>
              <FaCarrot />
              <p>Join 5,000+ people already making a difference!</p>
            </li>
            <li>
              <FaSeedling />
              <p>Reduce up to 25kg of food waste annually per household.</p>
            </li>
          </ul>
        </div>
      </section>
      <Instagram />
      <Footer />
    </>
  );
};

export default Home;
