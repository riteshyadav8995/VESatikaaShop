import { Link } from 'react-router-dom';
import { MessageCircle, Mail } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const WHATSAPP_NUMBER = "919798300985"; // Updated to user's requested number

  const generateWhatsAppMessage = () => {
    const text = `Hi, I am inquiring about the ${product.name} (Code: ${product.id}). Is it available?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        <div className="product-badge">{product.availability}</div>
      </Link>
      <div className="product-info">
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <p className="product-fabric">{product.fabric}</p>
        <div className="product-footer">
          <span className="product-price">{product.price}</span>
          <div className="card-actions-row">
            <Link 
              to="/contact" 
              className="btn btn-outline inquiry-btn"
              title="Contact Us"
            >
              <Mail size={16} />
              Contact
            </Link>
            <a 
              href={generateWhatsAppMessage()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp inquiry-btn"
              title="WhatsApp Inquiry"
            >
              <MessageCircle size={16} />
              WA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
