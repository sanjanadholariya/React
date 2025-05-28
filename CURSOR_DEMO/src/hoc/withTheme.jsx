import { useTheme } from '../context/ThemeContext';

const withTheme = (WrappedComponent) => {
  return function ThemedComponent(props) {
    const { isDarkTheme, toggleTheme } = useTheme();
    
    const themeStyles = {
      backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
      color: isDarkTheme ? '#ffffff' : '#1a1a1a',
      transition: 'all 0.3s ease',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem'
    };

    return (
      <div style={themeStyles}>
        <WrappedComponent 
          {...props} 
          isDarkTheme={isDarkTheme} 
          toggleTheme={toggleTheme}
        />
      </div>
    );
  };
};

export default withTheme; 