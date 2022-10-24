import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>mrcoder098@gmail.com</h5>
            <a
              href="mailto:mrcoder098@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineInstagram className="contact__option-icon"/>
            <h4>Instagram</h4>
            <h5>thisisshadab</h5>
            <a
              href="https://www.instagram.com/thisisshadab/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+91 7320036988</h5>
            <a
              href="https://wa.me/+917320036988?text=send+a+message"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Type Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
