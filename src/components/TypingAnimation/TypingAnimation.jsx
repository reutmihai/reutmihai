import React, { useEffect, useState } from "react";
import styles from "../TypingAnimation/TypingAnimation.module.css";
import PropTypes from "prop-types";

const TypingAnimation = ({ message }) => {
  const [text, setText] = useState(""); // Starea pentru textul tipărit
  const typingSpeed = 500; // Viteza de tipărire
  const delayAfterTyping = 3000; // Întârzierea după terminarea tipăririi
  const cursor = "|"; // Simbolul cursorului

  useEffect(() => {
    let index = 0; // Index pentru caracterele din mesaj
    let typingTimeout; // Variabilă pentru timeout

    const type = () => {
      if (index < message.length) {
        setText((prev) => prev + message[index]); 
        index++;
        typingTimeout = setTimeout(type, typingSpeed); 
      } else {
        clearTimeout(typingTimeout); 
        typingTimeout = setTimeout(() => {
          setText("");
          index = 0;
          type(); 
        }, delayAfterTyping);
      }
    };

    type();

    return () => {
      clearTimeout(typingTimeout); // Oprește timeout-ul la demontare
    };
  }, [message]); // Reacționează la schimbările mesajului

  return (
    <div className={styles.typingAnimation}>
      {text}
      <span className={styles.cursor}>
        {text.length < message.length ? cursor : ""}
      </span>
    </div>
  );
};

// Definirea tipului pentru prop
TypingAnimation.propTypes = {
  message: PropTypes.string.isRequired, // Asigurăm că message este un string
};

export default TypingAnimation;
