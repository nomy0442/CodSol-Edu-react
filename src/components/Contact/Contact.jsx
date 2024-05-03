import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  // Free Contact form

  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '94809f44-7397-4bee-9d73-0ec0f93e7f11');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };
  // ENd Contact form

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedbacks, question and suggestion are import
          to us as we strive to provide exceptional service to our university
          community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            nomyraja37@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +92-314-445-1062
          </li>
          <li>
            <img src={location_icon} alt="" />
            Zulfiqarabad Price Colony Gilgit, GB - Pakistan
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" required />
          <label>Phone Number</label>
          <input type="tel" name="phone" required />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
