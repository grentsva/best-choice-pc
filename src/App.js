import { useState, useEffect } from 'react';
import { AppWrapper } from './AppStyles';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Footer from './components/Footer';
import ScrollUp from './components/Common/ScrollUp';

const App = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const scrollHandler = () => {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrollPercent((windowScroll / height) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <AppWrapper>
      <Header scrollPercent={scrollPercent} />
      <ItemList />
      <Footer />
      <ScrollUp scrollPercent={scrollPercent} />
    </AppWrapper>
  );
};

export default App;
