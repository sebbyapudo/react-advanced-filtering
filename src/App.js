import Navigation from '../src/Navigation/Nav.js';
import Products from '../src/Products/Products.js';
import Recommended from '../src/Recommended/Recommended.js'
import Sidebar from './Sidebar/Sidebar.js';

function App() {
  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended /> 
      <Products />
      
    </>
    
  );
}

export default App;
