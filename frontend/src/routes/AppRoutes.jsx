import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Career from '@/pages/Career/Career';
import Layout from '@/layouts/Layout';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/career" element={<Career />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;