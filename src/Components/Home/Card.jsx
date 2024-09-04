import React from "react";
import styles from "./Card.module.css";
import { FaHeart } from "react-icons/fa6";
import { FaCommentDots } from "react-icons/fa";

const Card = ({ title, description, imageUrl, userImageUrl }) => {
  return (
    <div className={styles.Card}>
      <img src={imageUrl} alt={title} className={styles.cardImage} />
      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardFooter}>
          <div className={styles.userSection}>
            <img src={userImageUrl} alt="User" className={styles.userImage} />
          </div>
          <div className={styles.interactionSection}>
            <FaHeart />
            <span>20</span>
            <FaCommentDots />
            <span>2.k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
