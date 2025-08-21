import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import './assets/css/animations.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
      easing: 'ease-out-cubic', // easing function
      offset: 100, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
    });
  }, []);
  return <AppRoutes />;
};

export default App
