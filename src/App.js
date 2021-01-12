
import './App.css';
import Container from './components/Container'
import ThemeContextProvider from './components/contexts/ThemeContext'
import { Navbar } from './components/Navbar/Navbar'
import { Routes } from './components/Routes/routes'

function App() {
  return (
<ThemeContextProvider>
<Routes/>
</ThemeContextProvider>
  );
}

export default App;
