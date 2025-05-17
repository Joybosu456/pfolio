import { AosWrapper, HightlightButton, SectionHeading } from "../Common/Wrapper";
import "./contact.scss"

const Contact = () => {
  return (
    <section id='contact' className="section">
      <AosWrapper animation={"fade-up"} anchor={"top top"}>
        <SectionHeading>What’s Next?</SectionHeading>
        <div className="section-container">
          <h3 className="contact-headline bright-text">
            Get In Touch
          </h3>
          <p className="contact-info">
            I’m currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I’ll do my best to get back to you!
          </p>
          <HightlightButton>
            {/* 
            <a href="mailto:joybosu456@gmail.com" target="_blank" className="mail-text" >Say Hello
            </a> */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=joybosu456@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mail-text">Say Hello
            </a>
          </HightlightButton>
        </div>
      </AosWrapper>
    </section>
  )
}

export default Contact