import { useState } from 'react';
import Navigation from '../src/Navigation/Nav.js';
import Products from '../src/Products/Products.js';
import Recommended from '../src/Recommended/Recommended.js'
import Sidebar from './Sidebar/Sidebar.js';

// Databae 
import products from './db/data.js'
import Card from './components/Card.js';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // Input Filter

  const handleInputChange = event => {
    setQuery(event.target.value)
  }


  const filterItems = products.filter(product => product.title.
  toLocaleLowerCase().indexOf(query.toLowerCase() !== -1));

  // Radio Filter 

  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  // Buttons Filter 
  const handleClick = event => {
    selectedCategory(event.target.value)
  }


  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering input items
    if(query) {
      filteredProducts = filterItems
    }

    // Selected Filter 
    if(selected) {
      filteredProducts = filteredProducts.filter(
        ({category, color, company, newPrice, title}) =>
        category === selected || 
        color === selected || 
        company === selected || 
        newPrice === selected || 
        title === selected
        );
    }

    return filteredProducts.map(({img, title, star, reviews, newPrice, prevPrice}) => {
      <Card 
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
      />
    })

  }

  const result = filteredData(products, selectedCategory, query)


  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Navigation />
      <Recommended /> 
      <Products />
      
    </>
    
  );
}

export default App;
