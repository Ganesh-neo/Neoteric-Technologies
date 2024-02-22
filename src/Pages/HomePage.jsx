import React from "react";
import "../Styles/HomePage.css";

const HomePage = () => {
  const ourCoreServices = [
    {
      cardHeading: "Innovation",
      cardDesc: `Innovation is at the core of our identity. We're constantly
          pushing the boundaries of what's possible, exploring new
          ideas, technologies, and approaches to deliver solutions
          that are ahead of the curve. With Neoteric Technologies, you
          can trust that you'll always have access to cutting-edge
          solutions that drive your business forward.`,
      cardImgSrc: "/group-8.svg",
    },
    {
      cardHeading: "Innovation",
      cardDesc: `Innovation is at the core of our identity. We're constantly
          pushing the boundaries of what's possible, exploring new
          ideas, technologies, and approaches to deliver solutions
          that are ahead of the curve. With Neoteric Technologies, you
          can trust that you'll always have access to cutting-edge
          solutions that drive your business forward.`,
      cardImgSrc: "/group-8.svg",
    },
    {
      cardHeading: "Innovation",
      cardDesc: `Innovation is at the core of our identity. We're constantly
          pushing the boundaries of what's possible, exploring new
          ideas, technologies, and approaches to deliver solutions
          that are ahead of the curve. With Neoteric Technologies, you
          can trust that you'll always have access to cutting-edge
          solutions that drive your business forward.`,
      cardImgSrc: "/group-8.svg",
    },
    {
      cardHeading: "Innovation",
      cardDesc: `Innovation is at the core of our identity. We're constantly
          pushing the boundaries of what's possible, exploring new
          ideas, technologies, and approaches to deliver solutions
          that are ahead of the curve. With Neoteric Technologies, you
          can trust that you'll always have access to cutting-edge
          solutions that drive your business forward.`,
      cardImgSrc: "/group-8.svg",
    },
    {
      cardHeading: "Innovation",
      cardDesc: `Innovation is at the core of our identity. We're constantly
          pushing the boundaries of what's possible, exploring new
          ideas, technologies, and approaches to deliver solutions
          that are ahead of the curve. With Neoteric Technologies, you
          can trust that you'll always have access to cutting-edge
          solutions that drive your business forward.`,
      cardImgSrc: "/group-8.svg",
    },
    {
      cardHeading: "Innovation",
      cardDesc: `Innovation is at the core of our identity. We're constantly
          pushing the boundaries of what's possible, exploring new
          ideas, technologies, and approaches to deliver solutions
          that are ahead of the curve. With Neoteric Technologies, you
          can trust that you'll always have access to cutting-edge
          solutions that drive your business forward.`,
      cardImgSrc: "/group-8.svg",
    },
  ];

  return (
    <div className="home">
      <div className="headers-v12-parent">
        {/* <div className="component-13">
          <img className="component-13-child" alt="" src="/line-1@2x.png" />
          <img className="vector-icon" alt="" src="/vector.svg" />
          <div className="unlocking-potential-unleashin-parent">
            <div className="unlocking-potential-unleashin-container">
              <span className="unlocking-potential-unleashin">{`Unlocking Potential, Unleashing `}</span>
              <b className="innovation">Innovation</b>
            </div>
            <div className="frame-parent">
              <div className="arrow-circle-left-parent">
                <img
                  className="arrow-circle-left-icon"
                  alt=""
                  src="/arrowcircleleft.svg"
                />
                <img
                  className="arrow-circle-left-icon"
                  alt=""
                  src="/arrowcircleright.svg"
                />
              </div>
              <div className="div">
                <b>01</b>
                <span> / 03</span>
              </div>
            </div>
          </div>
        </div> */}
        
        {/* <div className="who-we-are-screen-1-light">
          <img className="group-icon" alt="" src="/group.svg" />
          <div className="about-neoteric-technologies-parent">
            <b className="about-neoteric-technologies">
              About Neoteric Technologies
            </b>
            <div className="at-neoteric-technologies">
              At Neoteric Technologies, we're more than just a technology
              company—we're pioneers on a mission to redefine the future through
              innovative solutions. Established with a bold vision to empower
              businesses and individuals alike with cutting-edge digital tools,
              we blend expertise with creativity to shape the technological
              landscape.
            </div>
            <div className="what-sets-us-apart-parent">
              <b className="what-sets-us">What sets us apart?</b>
              <div className="at-neoteric-technologies">
                At Neoteric Technologies, innovation is in our DNA. We don't
                just follow trends; we set them. Our team of skilled
                professionals is dedicated to pushing the boundaries of what's
                possible, constantly exploring new ideas, technologies, and
                methodologies to stay ahead of the curve.
              </div>
            </div>
            <div className="what-sets-us-apart-parent">
              <b className="what-sets-us">Our approach</b>
              <div className="at-neoteric-technologies">
                We believe that collaboration is key to success. That's why we
                work closely with our clients, understanding their unique needs
                and objectives to deliver tailor-made solutions that exceed
                expectations. From initial concept to final implementation,
                we're with you every step of the way, ensuring transparency,
                communication, and exceptional results.
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="frame-group">
          <div className="your-challenges-our-commitmen-wrapper">
            <div className="your-challenges-our">
              Your challenges, our commitment to finding solutions
            </div>
          </div>
          <img className="frame-child" alt="" src="/vector-9.svg" />
          <img className="frame-item" alt="" src="/vector-10.svg" />
        </div> */}
        
        <div className="who-we-are-screen-1-light1">
          {/* <div className="why-choose-us-parent">
            <b className="why-choose-us">Why Choose Us?</b>
            <div className="stay-informed-and">
              At Neoteric Technologies, we're more than just a technology
              company—we're pioneers on a mission to redefine the future through
              innovative solutions. Established with a bold vision to empower
              businesses and individuals alike with cutting-edge digital tools,
              we blend expertise with creativity to shape the technological
              landscape.
            </div>
          </div> */}

          <div className="group-parent">
            <div className="frame-wrapper">
              {ourCoreServices.map((item, index) => {
                return (
                  <div key={index} className="frame-container">
                    <div className="innovation-parent">
                      <b className="customer-centric">{item.cardHeading}</b>
                      <div className="innovation-is-at">{item.cardDesc}</div>
                    </div>
                    <img className="frame-inner" alt="" src={item.cardImgSrc} />
                  </div>
                );
              })}
            </div>

            {/*------------------------- {/* <div className="group-div">
              <div className="frame-container">
                <div className="innovation-parent">
                  <b className="customer-centric">Customer-Centric</b>
                  <div className="innovation-is-at">
                    Your success is our top priority. We're dedicated to
                    understanding your unique needs and objectives, and we
                    tailor our solutions accordingly. From the initial
                    consultation to ongoing support, we're committed to
                    delivering outcomes that not only meet but exceed your
                    expectations. At Neoteric Technologies, your satisfaction
                    drives everything we do.
                  </div>
                </div>
                <img className="frame-inner" alt="" src="/group-9.svg" />
              </div>
            </div>
            <div className="frame-wrapper1">
              <div className="frame-container">
                <div className="innovation-parent">
                  <b className="customer-centric">Timely Delivery</b>
                  <div className="innovation-is-at">
                    Our commitment to punctuality is unwavering, as we
                    prioritize meeting project deadlines with precision and
                    efficiency. With our streamlined processes and dedicated
                    team, you can trust that your projects will be completed on
                    time, every time.
                  </div>
                </div>
                <img className="frame-inner" alt="" src="/group-11.svg" />
              </div>
            </div>
          </div>
          <div className="group-container">
            <div className="frame-wrapper">
              <div className="frame-container">
                <div className="innovation-parent">
                  <b className="customer-centric">Passion</b>
                  <div className="innovation-is-at">
                    We're passionate about what we do. We're driven by a desire
                    to make a positive impact and help our clients succeed. Our
                    team is comprised of dedicated professionals who are
                    genuinely enthusiastic about technology and its potential to
                    transform businesses and industries.
                  </div>
                </div>
                <img className="frame-inner" alt="" src="/group-12.svg" />
              </div>
            </div>
            <div className="group-div">
              <div className="frame-container">
                <div className="innovation-parent">
                  <b className="customer-centric">Collaboration</b>
                  <div className="innovation-is-at">
                    We believe in the power of collaboration. We work closely
                    with our clients, fostering open communication and
                    transparency throughout the entire process. By truly
                    understanding your business and working together as a team,
                    we're able to deliver solutions that are perfectly aligned
                    with your goals.
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper1">
              <div className="frame-container">
                <div className="innovation-parent">
                  <b className="customer-centric">Flexibility</b>
                  <div className="innovation-is-at">
                    We understand that every business is different, which is why
                    we offer flexible solutions that can be customized to suit
                    your specific requirements. Whether you need a fully
                    tailored solution or prefer to start with a standardized
                    offering and scale up as your needs evolve, we've got you
                    covered.
                  </div>
                </div>
                <img className="frame-inner" alt="" src="/group-10.svg" />
              </div>
            </div> */}
          </div>
          {/* <img
            className="who-we-are-screen-1-light-child"
            alt=""
            src="/group-7.svg"
          /> ---------------*/}          
        </div>
        
        {/* <div className="component-16">
          <div className="our-core-services-wrapper">
            <div className="our-core-services">Our Core Services</div>
          </div>
          <div className="container">
            <div className="content">
              <div className="feature-text">
                <img className="strategies-icon" alt="" src="/strategies.svg" />
                <div className="text-and-supporting-text">
                  <div className="text">Strategy</div>
                  <div className="supporting-text">
                    Crafting strategies tailored to your unique goals and
                    challenges, we pave the path for your success through
                    insightful planning and execution.
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <img
                  className="strategies-icon"
                  alt=""
                  src="/engineering.svg"
                />
                <div className="text-and-supporting-text">
                  <div className="text">Engineering</div>
                  <div className="supporting-text">
                    Utilizing cutting-edge technology and innovative solutions,
                    our engineering team transforms ideas into reality with
                    precision and expertise.
                  </div>
                </div>
              </div>
              <div className="feature-text2">
                <img className="strategies-icon" alt="" src="/server.svg" />
                <div className="text-and-supporting-text">
                  <div className="text">Cloud</div>
                  <div className="supporting-text">
                    Harness the power of the cloud to streamline operations,
                    enhance scalability, and drive innovation for your business
                    with our comprehensive cloud solutions.
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="feature-text">
                <img className="strategies-icon" alt="" src="/dashboard.svg" />
                <div className="text-and-supporting-text">
                  <div className="text">{`Data & Analytics`}</div>
                  <div className="supporting-text">
                    Leverage data and analytics to gain valuable insights, make
                    informed decisions, and drive your business forward with our
                    advanced tools and expertise.
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <img className="strategies-icon" alt="" src="/microchip.svg" />
                <div className="text-and-supporting-text">
                  <div className="text">Artificial Intelligence (AI)</div>
                  <div className="supporting-text">
                    Unlock the potential of artificial intelligence to
                    revolutionize your business processes, enhance efficiency,
                    and propel innovation with our cutting-edge AI solutions and
                    expertise.
                  </div>
                </div>
              </div>
              <div className="feature-text">
                <img
                  className="strategies-icon"
                  alt=""
                  src="/cybersecurity.svg"
                />
                <div className="text-and-supporting-text">
                  <div className="text">Cyber Security</div>
                  <div className="supporting-text">
                    Ensure the safety of your digital assets and information
                    with our robust cybersecurity solutions, protecting your
                    business from evolving threats with advanced technology and
                    vigilant monitoring.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="frame-wrapper6">
          <div className="frame-parent4">
            <div className="lets-talk-parent">
              <div className="lets-talk">Let’s Talk</div>
              <div className="were-committed-to">
                We're committed to providing exceptional service and support to
                our clients. Whether you have a specific inquiry or just want to
                say hello, we'd love to hear from you!
              </div>
              <div className="ask-us-anything-wrapper">
                <div className="ask-us-anything">Ask us anything</div>
              </div>
            </div>
            <div className="frame-parent5">
              <div className="group-parent1">
                <img className="frame-child5" alt="" src="/group-1.svg" />
                <div className="drop-us-a">
                  Drop us a mail at: neoterictechnologiesinc.com
                </div>
              </div>
              <div className="group-parent1">
                <img className="frame-child5" alt="" src="/group-2.svg" />
                <div className="drop-us-a">{`Call us at: `}</div>
              </div>
              <div className="marker-pin-01-parent">
                <img className="frame-child5" alt="" src="/group-3.svg" />
                <div className="reach-out-to-us-at-parent">
                  <div className="reach-out-to">Reach out to us at:</div>
                  <div className="mig-55">
                    MIG - 55 ,15 ,Kukatpally Housing Board road, Green Hills Rd,
                    near Kaithalapur ground, Hyderabad, Telangana 500072
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="testimonials-v5">
          <div className="wrapper">
            <div className="frame-parent6">
              <div className="heading-parent">
                <div className="heading">What our clients say</div>
                <div className="testimonial-paragraph">
                  “Working with Neoteric Technologies has been a game-changer
                  for our business. Their team's expertise, dedication, and
                  innovative solutions have helped us achieve our goals and
                  exceed our expectations”
                </div>
              </div>
              <div className="frame-parent7">
                <div className="divider-parent">
                  <div className="divider" />
                  <img className="active-icon" alt="" src="/active.svg" />
                </div>
                <div className="testimonial-parent">
                  <div className="testimonial">
                    <div className="testimonial-role">Head of Marketing</div>
                    <b className="testimonal-name">Lorem ipsum</b>
                    <img
                      className="image-placeholder-icon"
                      alt=""
                      src="/image-placeholder.svg"
                    />
                  </div>
                  <div className="testimonial">
                    <div className="testimonial-role">Web Designer</div>
                    <b className="testimonal-name">Lorem ipsum</b>
                    <img
                      className="image-placeholder-icon"
                      alt=""
                      src="/image-placeholder.svg"
                    />
                  </div>
                  <div className="testimonial">
                    <div className="testimonial-role">Web Designer</div>
                    <b className="testimonal-name">Lorem ipsum</b>
                    <img
                      className="image-placeholder-icon"
                      alt=""
                      src="/image-placeholder.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="testimonials-v51">
          <div className="news-blog-parent">
            <b className="news-blog1">{`News & Blog`}</b>
            <div className="stay-informed-and">
              Stay informed and inspired with our latest news updates and
              insightful blog posts. Explore a wealth of valuable resources
              covering industry trends, tips, best practices, and more. Whether
              you're looking to expand your knowledge or stay ahead of the
              curve, our blog has something for everyone.
            </div>
          </div>
          <div className="cards-wrapper">
            <div className="cards">
              <div className="news-3">
                <img
                  className="news-items-pic-icon"
                  alt=""
                  src="/newsitemspic@2x.png"
                />
                <div className="news-parent">
                  <div className="news">NEWS</div>
                  <div className="unlocking-the-potential">
                    Unlocking the Potential of AI in Business: A Comprehensive
                    Guide
                  </div>
                </div>
                <div className="learn-more-wrapper">
                  <div className="learn-more">Learn More</div>
                </div>
              </div>
              <div className="news-3">
                <img
                  className="news-items-pic-icon"
                  alt=""
                  src="/newsitemspic@2x.png"
                />
                <div className="news-parent">
                  <div className="news">BLOG</div>
                  <div className="unlocking-the-potential">
                    Navigating Cybersecurity Challenges in a Digital Age
                  </div>
                </div>
                <div className="learn-more-wrapper">
                  <div className="learn-more">Learn More</div>
                </div>
              </div>
              <div className="news-3">
                <img
                  className="news-items-pic-icon"
                  alt=""
                  src="/newsitemspic@2x.png"
                />
                <div className="news-parent">
                  <div className="news">NEWS</div>
                  <div className="unlocking-the-potential">
                    The Future of Artificial Intelligence: Trends to Watch
                  </div>
                </div>
                <div className="learn-more-wrapper">
                  <div className="learn-more">Learn More</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        
      </div>
    </div>
  );
};

export default HomePage;
