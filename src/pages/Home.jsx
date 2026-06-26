import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import data from '../data/products.json';
import './Home.css';

const Home = () => {
  const { collections } = data;

  return (
    <div className="page-enter">
      <HeroBanner />
      
      <section className="section about-section">
        <div className="container">
          <div className="about-content text-center">
            <h2 className="title">About Our Boutique</h2>
            <p className="about-text">
              VESatikaa Collections represents the pinnacle of modern ethnic fashion. 
              We curate exquisite ensembles that seamlessly blend traditional craftsmanship 
              with contemporary aesthetics. Each piece tells a story of heritage, luxury, and artistry.
            </p>
          </div>
        </div>
      </section>

      <section className="section featured-collections">
        <div className="container">
          <h2 className="title text-center">Our Collections</h2>
          <div className="collections-grid">
            {collections.map(collection => (
              <div className="collection-card" key={collection.id}>
                <img src={collection.image} alt={collection.name} className="collection-image" loading="lazy" />
                <div className="collection-info">
                  <h3 className="collection-name">{collection.name}</h3>
                  <Link to={`/collections#${collection.id}`} className="btn btn-primary">
                    View Collection
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
