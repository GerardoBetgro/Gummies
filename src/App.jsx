import { ThemeProvider } from '@emotion/react';
import Navbar from './componentes/Navbar';
import theme from './themeConfig';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
    </ThemeProvider>
  );
}

export default App;
