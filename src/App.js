import { useState, useEffect } from 'react';
import { AppWrapper } from './AppStyles';
import ScrollUp from './components/Common/ScrollUp/ScrollUp';
import Footer from './components/Footer';

const App = () => {
  const [isScrolled, setScrolled] = useState(false);

  const scrollHandler = () =>
    window.screen.height / 2 < window.scrollY
      ? setScrolled(true)
      : setScrolled(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <AppWrapper>
      <div>Header</div>
      <div style={{ height: '1800px' }}>Content</div>
      <Footer />
      <ScrollUp isScrolled={isScrolled} />
    </AppWrapper>
  );
};

export default App;
