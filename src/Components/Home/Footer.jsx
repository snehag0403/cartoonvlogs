import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className={styles.lastcontainer}>
        <div className={styles.lastcontent}>
          <div className={styles.trainingBlog}>
            <h3>Cartoon Blog</h3>
            <p>
              A cartoon is a type of visual art that is typically drawn,
              frequently animated, in an unrealistic or semi-realistic style.
              The specific meaning has evolved, but the modern usage usually
              refers to either: a motion picture that relies on a sequence of
              illustrations for its animation. Someone who creates cartoons in
              the first sense is called a cartoonist.
            </p>
          </div>
          <div className={styles.category}>
            <h3>Category</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>VS Code</li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h3>Get in Touch</h3>
            <span>+91-8953XXXXX</span>
            <br></br>
            <span>demo@gmail.com</span>
          </div>
          <div className={styles.social}>
            <span>Follow Us </span>
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
