import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <ScrollToTop />
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;