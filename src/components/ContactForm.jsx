import { useState } from 'react';
import { Send } from 'lucide-react';
import './ContactForm.css';

const ContactForm = ({ initialMessage = "" }) => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.target;
    const data = new FormData(form);

    try {
      const formJson = Object.fromEntries(data.entries());
      const response = await fetch("https://formspree.io/f/xpqgpvzp", {
        method: "POST",
        body: JSON.stringify(formJson),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required placeholder="Jane Doe" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required placeholder="jane@example.com" />
        </div>

        <div className="form-group">
          <label htmlFor="inquiry">Inquiry Type</label>
          <select id="inquiry" name="inquiry">
            <option value="general">General Inquiry</option>
            <option value="bridal">Bridal Appointment</option>
            <option value="custom">Custom Order</option>
            <option value="support">Customer Support</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required placeholder="How can we help you?" defaultValue={initialMessage}></textarea>
        </div>

        <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : (
            <>
              Send Message <Send size={18} />
            </>
          )}
        </button>

        {status === 'success' && <p className="form-message success">Thank you! Your message has been sent successfully.</p>}
        {status === 'error' && <p className="form-message error">Oops! There was a problem submitting your form.</p>}
      </form>
    </div>
  );
};

export default ContactForm;
