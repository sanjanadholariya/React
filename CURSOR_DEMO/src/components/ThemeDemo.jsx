import withTheme from '../hoc/withTheme';

const ThemeDemo = ({ isDarkTheme, toggleTheme }) => {
  const containerStyle = {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem'
  };

  const buttonStyle = {
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: isDarkTheme ? '#4a4a4a' : '#e0e0e0',
    color: isDarkTheme ? '#ffffff' : '#1a1a1a',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '1.1rem',
    fontWeight: '500',
    boxShadow: isDarkTheme ? '0 4px 6px rgba(0, 0, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const cardStyle = {
    width: '100%',
    padding: '2rem',
    borderRadius: '16px',
    backgroundColor: isDarkTheme ? '#2a2a2a' : '#f0f0f0',
    boxShadow: isDarkTheme 
      ? '0 8px 16px rgba(0, 0, 0, 0.3)' 
      : '0 8px 16px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '1.5rem'
  };

  return (
    <div style={containerStyle}>
      <button 
        style={buttonStyle} 
        onClick={toggleTheme}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = isDarkTheme 
            ? '0 6px 8px rgba(0, 0, 0, 0.3)' 
            : '0 6px 8px rgba(0, 0, 0, 0.2)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = isDarkTheme 
            ? '0 4px 6px rgba(0, 0, 0, 0.2)' 
            : '0 4px 6px rgba(0, 0, 0, 0.1)';
        }}
      >
        Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
      </button>
      
      <div style={cardStyle}>
        <div style={headerStyle}>
          <h1>Theme Demo with HOC</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
            This is a demonstration of theme switching using a Higher Order Component.
          </p>
        </div>
        <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>
          Current theme: <strong>{isDarkTheme ? 'Dark' : 'Light'}</strong>
        </p>
      </div>
    </div>
  );
};

export default withTheme(ThemeDemo); 