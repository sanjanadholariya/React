import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{ backgroundColor: '#a1887f', padding: '15px', borderRadius: '0 0 15px 15px' }}>
      <div className="container d-flex justify-content-center gap-4 flex-wrap">
        
        <Link 
          to="/" 
          style={{ 
            color: '#fff', 
            textDecoration: 'none', 
            fontWeight: 'bold', 
            padding: '10px 20px', 
            borderRadius: '8px', 
            backgroundColor: '#8d6e63', 
            transition: '0.3s' 
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#6d4c41'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#8d6e63'}
        >
          Home
        </Link>

        <Link 
          to="/cart" 
          style={{ 
            color: '#fff', 
            textDecoration: 'none', 
            fontWeight: 'bold', 
            padding: '10px 20px', 
            borderRadius: '8px', 
            backgroundColor: '#8d6e63', 
            transition: '0.3s' 
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#6d4c41'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#8d6e63'}
        >
          Cart
        </Link>

        <Link 
          to="/recipes" 
          style={{ 
            color: '#fff', 
            textDecoration: 'none', 
            fontWeight: 'bold', 
            padding: '10px 20px', 
            borderRadius: '8px', 
            backgroundColor: '#8d6e63', 
            transition: '0.3s' 
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#6d4c41'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#8d6e63'}
        >
          Recipes
        </Link>

      </div>
    </nav>
  );
};

export default Header;
