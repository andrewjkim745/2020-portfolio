
import './App.css';
import Container from './components/Container'
import ThemeContextProvider from './components/contexts/ThemeContext'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
<ThemeContextProvider>
<Container/>
</ThemeContextProvider>
  );
}

export default App;
