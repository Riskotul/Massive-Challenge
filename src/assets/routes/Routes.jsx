import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const LoginPage = React.lazy(() =>
  import('../components/Pages/AuthPage/LoginPage')
);
const RegisterPage = React.lazy(() =>
  import('../components/Pages/AuthPage/RegisterPage')
);
const ContactPage = React.lazy(() =>
  import('../components/Pages/ContactPage/ContactPage')
);
const DonationPage = React.lazy(() =>
  import('../components/Pages/DonationPage/DonationPage')
);
const ServicesPage = React.lazy(() =>
  import('../components/Pages/ServicesPage/ServicesPage')
);

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
