import React from "react";
// icons
import logo from "../../assets/icons/NinjaMart.svg";
import AppleStore from "../IconComponents/AppleStore";
import Facebook from "../IconComponents/Facebook";
import Google from "../IconComponents/Google";
import GooglePlay from "../IconComponents/GooglePlay";
import Instagram from "../IconComponents/Instagram";
import Twitter from "../IconComponents/Twitter";
import Youtube from "../IconComponents/Youtube";
import "./_footer.scss";
export default function Footer() {
  return (
    <footer>
      <section className="footer-container">
        <div className="footer container">
          <div className="footer--box">
            <article className="footer--box--elements">
              <div className="footer--box--elements--one">
                <a className="footer--box--elements--one--logo">
                  <img src={logo} alt="" />
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor libero id et, in gravida. Sit diam duis mauris nulla
                  cursus. Erat et lectus vel ut sollicitudin elit at amet.
                </p>
                <div className="footer--box--elements--one--appstore">
                  <a href="">
                    <div className="footer--box--elements--one--appstore--holder">
                      <div className="footer--box--elements--one--appstore--holder--logo">
                        <GooglePlay />
                      </div>
                      <div className="footer--box--elements--one--appstore--holder--texts">
                        <p>Get it on</p>
                        <h4>Google Play</h4>
                      </div>
                    </div>
                  </a>
                  <a href="">
                    <div className="footer--box--elements--one--appstore--holder">
                      <div className="footer--box--elements--one--appstore--holder--logo">
                        <AppleStore />
                      </div>
                      <div className="footer--box--elements--one--appstore--holder--texts">
                        <p>Get it on</p>
                        <h4>Apple Store</h4>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </article>
            <article className="footer--box--elements">
              <div className="footer--box--elements--two">
                <div>
                  <h1>About Us</h1>
                </div>
                <ul>
                  <li>
                    <a>Careers</a>
                  </li>
                  <li>
                    <a>Our Stores</a>
                  </li>
                  <li>
                    <a>Our Cares</a>
                  </li>
                  <li>
                    <a>Terms &amp; Conditions</a>
                  </li>
                  <li>
                    {" "}
                    <a>Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="footer--box--elements">
              <div className="footer--box--elements--three">
                <div>
                  <h1>Customer Care</h1>
                </div>
                <ul>
                  <li>
                    <a> Help Center</a>
                  </li>
                  <li>
                    <a>How to Buy</a>
                  </li>
                  <li>
                    <a>Track Your Order</a>
                  </li>
                  <li>
                    <a>Corporate Bulk Purchasing</a>
                  </li>
                  <li>
                    <a>Returns &amp; Refunds</a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="footer--box--elements">
              <div className="footer--box--elements--four">
                <div>
                  <h1>Contact Us</h1>
                </div>
                <div className="footer--box--elements--four--texts">
                  <p>
                    70 Washington Square South, New York, NY 10012, United
                    States
                  </p>
                  <p>Email: uilib.help@gmail.com</p>
                  <p>Phone: +1 1123 456 780</p>
                </div>
                <div className="footer--box--elements--four--logos">
                  <a href="">
                    <i>
                      <Facebook />
                    </i>
                  </a>
                  <a>
                    <i>
                      <Twitter />
                    </i>
                  </a>
                  <a>
                    <i>
                      <Youtube />
                    </i>
                  </a>
                  <a>
                    <i>
                      <Google />
                    </i>
                  </a>
                  <a>
                    <i>
                      <Instagram />
                    </i>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </footer>
  );
}
