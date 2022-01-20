
import './App.css';
import ThemeContextProvider from './components/contexts/ThemeContext'
import { Routes } from './components/Routes/routes'

function App() {
  return (
<ThemeContextProvider>
<Routes/>
</ThemeContextProvider>
  );
}

export default App;
