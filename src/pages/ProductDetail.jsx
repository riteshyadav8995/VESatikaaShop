import { useParams, useNavigate } from 'react-router-dom';
import { MessageCircle, ArrowLeft, ShieldCheck, Truck } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import data from '../data/products.json';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, collections } = data;
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <button className="btn btn-outline" onClick={() => navigate('/collections')}>Back to Collections</button>
      </div>
    );
  }

  const collection = collections.find(c => c.id === product.collectionId);
  const WHATSAPP_NUMBER = "919798300985"; 

  const inquiryMessage = `Hi, I am inquiring about the ${product.name} (Code: ${product.id}). Is it available?`;

  const generateWhatsAppMessage = () => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(inquiryMessage)}`;
  };

  return (
    <div className="page-enter product-detail-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} /> Back
        </button>
        
        <div className="product-detail-grid">
          <div className="product-detail-image-wrapper">
            <img src={product.image} alt={product.name} className="product-detail-image" />
          </div>
          
          <div className="product-detail-info">
            <div className="product-category">{collection?.name}</div>
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-price">{product.price}</p>
            
            <div className="product-badge detail-badge">{product.availability}</div>
            
            <div className="product-specs">
              <h3>Fabric & Details</h3>
              <p>{product.fabric}</p>
              <p>Meticulously handcrafted, this piece from our {collection?.name} collection ensures you stand out with elegance and grace. Designed for the modern aesthetic while respecting timeless traditions.</p>
            </div>
            
            <div className="product-actions">
              <a 
                href={generateWhatsAppMessage()} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp full-width-btn"
              >
                <MessageCircle size={20} />
                Inquire on WhatsApp
              </a>
            </div>

            <div className="product-perks">
              <div className="perk">
                <ShieldCheck size={20} className="perk-icon" />
                <span>Premium Quality Guarantee</span>
              </div>
              <div className="perk">
                <Truck size={20} className="perk-icon" />
                <span>Worldwide Shipping Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-contact-section" style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2>Send an Inquiry</h2>
            <p style={{ color: 'var(--color-text-secondary)' }}>Prefer email? Send us a direct message about this product.</p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <ContactForm initialMessage={inquiryMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
