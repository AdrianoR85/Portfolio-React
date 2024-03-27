import { FaGithub, FaLinkedin, FaSquareWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import '../styles/contact.css'
export default function contact() {
  return (
    <section id="contact" className="contact-wrapper">
      <h2>Contact</h2>
      <div className="contact__links">
        <div className="link">
          <h3><FaGithub /></h3>
          <a href="https://github.com/AdrianoR85" target="_blank">AdrianoR85</a>
        </div>
        <div className="link">
          <h3><FaLinkedin /></h3>
          <a href="mhttps://www.linkedin.com/in/adriano-rosa-741979182/" target="_blank">Adriano Rosa</a>
        </div>
        <div className="link">
          <h3><FaSquareWhatsapp /></h3>
          <a href="https://wa.me/47996374501" target="_blank">+55 47 996374501</a>
        </div>
        <div className="link">
          <h3><MdEmail /></h3>
          <a href="mailto:adrianorosa085@gmail.com" target="_blank">adrianorosa085@gmail.com</a>
        </div>
      </div>
    </section>
  )
}
