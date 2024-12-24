// app/contact/page.js
const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
