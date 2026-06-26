import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-enter contact-page">
      <div className="contact-header">
        <h1 className="title">Get in Touch</h1>
        <p className="subtitle">We would love to hear from you. Book an appointment or send us an inquiry.</p>
      </div>

      <div className="container">
        <div className="contact-content">
          <div className="contact-details">
            <h2 className="contact-section-title">Visit Our Boutique</h2>
            <p className="contact-desc">
              Experience our collections in person. Our fashion consultants are ready to help you find the perfect ensemble for any occasion.
            </p>

            <div className="info-card">
              <div className="info-item">
                <MapPin className="info-icon" size={24} />
                <div>
                  <h3>Address</h3>
                  <p>123 Fashion Street, Banjara Hills<br/>Hyderabad, Telangana 500034</p>
                </div>
              </div>

              <div className="info-item">
                <Phone className="info-icon" size={24} />
                <div>
                  <h3>Phone / WhatsApp</h3>
                  <p>+91 9798300985</p>
                </div>
              </div>

              <div className="info-item">
                <Mail className="info-icon" size={24} />
                <div>
                  <h3>Email</h3>
                  <p>hello@vesatikaashop.com</p>
                </div>
              </div>

              <div className="info-item">
                <Clock className="info-icon" size={24} />
                <div>
                  <h3>Hours</h3>
                  <p>Mon - Sat: 10:00 AM - 8:00 PM<br/>Sun: By Appointment Only</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2 className="contact-section-title">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
