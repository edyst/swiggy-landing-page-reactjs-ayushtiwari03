import React from "react";
import ButtonName from "./ButtonName";
import "./Footer.css";
import List from './List';
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="flex">
          <div>
            <p>COMPANY</p>
            <a href="https://www.swiggy.com/about">About us</a>
            <a href="https://www.swiggy.com/team">Team</a>
            <a href="https://www.swiggy.com/careers">Careers</a>
            <a href="https://blog.swiggy.com/">Swiggy Blog</a>
            <a href="https://www.swiggy.com/bug-bounty">Bug Bounty</a>
            <a href="https://www.swiggy.com/swiggy-super">Swiggy Super</a>
            <a href="https://corporate.swiggy.com/">Swiggy Corporate</a>
            <a href="https://www.swiggy.com/swiggy-instamart">Swiggy Instamart</a>
          </div>
          <div>
            <p>CONTACT</p>
            <a href="https://www.swiggy.com/support">Help & Support</a>
            <a href="https://partner-with-us.swiggy.com/onboard#/swiggy">Partner with us</a>
            <a href="https://ride.swiggy.com/">Ride with us</a>
          </div>
          <div>
            <p>LEGAL</p>
            <a href="https://www.swiggy.com/terms-and-conditions">Terms & Conditions</a>
            <a href="https://www.swiggy.com/refund-policy">Refund & Cancellation</a>
            <a href="https://www.swiggy.com/privacy-policy">Privacy Policy</a>
            <a href="https://www.swiggy.com/cookie-policy">Cookie Policy</a>
            <a href="https://www.swiggy.com/offer-terms">Offer Terms</a>
            <a href="https://www.swiggy.com/beware-of-phishing-and-fraud">Phishing & Fraud</a>
          </div>
          <div>
            <ButtonName />
          </div>
        </div>
      </footer>
      <List />
      <footer className="footer">
        <div className="flex">
          <div>
            
              <img
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
                }
                width="142px" alt="no ava"></img>
            
          </div>
          <div>
            
              <p>© 2021 Swiggy</p>
            
          </div>
          <div>
              <img
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
                }
                width="24px"
                height="24px" alt="no ava"></img>
              &nbsp; &nbsp;{" "}
              <img
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
                }
                width="24px"
                height="24px" alt="no ava"></img>
              &nbsp; &nbsp;
              <img
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
                }
                width="24px"
                height="24px" alt="no ava"></img>
              &nbsp; &nbsp;
              <img
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
                }
                width="24px"
                height="24px" alt="no ava"></img>
      
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
