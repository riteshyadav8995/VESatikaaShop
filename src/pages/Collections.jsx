import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import data from '../data/products.json';
import './Collections.css';

const Collections = () => {
  const { collections, products } = data;
  const location = useLocation();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setSelectedCategory(id);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.collectionId === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-enter collections-page">
      <div className="collections-header">
        <h1 className="title">Portfolio Collections</h1>
        <p className="subtitle">Explore our exclusive range of meticulously crafted fashion.</p>
        
        <div className="filter-container">
          <div className="search-bar">
            <Search size={20} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search products by name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="category-filters">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Categories
            </button>
            {collections.map(col => (
              <button 
                key={col.id}
                className={`filter-btn ${selectedCategory === col.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(col.id)}
              >
                {col.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {collections.map((collection) => {
          // If a category is selected and it's not this one, hide the section
          if (selectedCategory !== 'all' && selectedCategory !== collection.id) return null;
          
          const collectionProducts = filteredProducts.filter(p => p.collectionId === collection.id);
          
          // If search yields no products for this collection, hide the section
          if (collectionProducts.length === 0) return null;

          return (
            <section key={collection.id} id={collection.id} className="collection-section">
              <div className="collection-section-header">
                <h2 className="collection-section-title">{collection.name}</h2>
                <p className="collection-section-desc">{collection.description}</p>
              </div>
              
              <div className="products-grid">
                {collectionProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })}

        {filteredProducts.length === 0 && (
          <div className="no-results">
            <h3>No products found</h3>
            <p>Try adjusting your search or category filter.</p>
            <button className="btn btn-outline" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collections;
