import { ThemeProvider } from './context/ThemeContext';
import ThemeDemo from './components/ThemeDemo';

function App() {
  return (
    <ThemeProvider>
      <ThemeDemo />
    </ThemeProvider>
  );
}

export default App;
