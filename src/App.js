import { AppWrapper } from './AppStyles';
import Footer from './components/Footer';

const App = () => {
  return (
    <AppWrapper>
      <div>Header</div>
      <div style={{ height: '1500px' }}>Content</div>
      <Footer />
    </AppWrapper>
  );
};

export default App;
