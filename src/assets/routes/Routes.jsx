import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DetailServicePageAnjing from "../components/Pages/DetailServicePage/DetailServicePageAnjing";

const LoginPage = React.lazy(() =>
  import("../components/Pages/AuthPage/LoginPage")
);
const RegisterPage = React.lazy(() =>
  import("../components/Pages/AuthPage/RegisterPage")
);
const ContactPage = React.lazy(() =>
  import("../components/Pages/ContactPage/ContactPage")
);
const DonationPage = React.lazy(() =>
  import("../components/Pages/DonationPage/DonationPage")
);
const ServicesPage = React.lazy(() =>
  import("../components/Pages/ServicesPage/ServicesPage")
);
const DetailServicePage = React.lazy(() =>
  import("../components/Pages/DetailServicePage/DetailServicePage")
);
const HomePage = React.lazy(() =>
  import("../components/Pages/HomePage/HomePage")
);
const AboutPage = React.lazy(() =>
  import("../components/Pages/AboutPage/AboutPage")
);
const AdopsiKucingPage = React.lazy(() =>
  import("../components/Pages/AdopsiKucingPage/AdopsiKucingPage")
);
const AdopsiAnjingPage = React.lazy(() =>
  import("../components/Pages/AdopsiAnjingPage/AdopsiAnjingPage")
);
const ProfilePage = React.lazy(() =>
  import("../components/Pages/ProfilePage/ProfilePage")
);
const EditProfilePage = React.lazy(() =>
  import("../components/Pages/EditProfilePage/EditProfilePage")
);
const ProfilePages = React.lazy(() =>
  import("../components/Pages/EditProfilePage/ProfilePages")
);

const FormAdopsiPage = React.lazy(() =>
  import("../components/Pages/FormAdopsiPage/FormAdopsiPage")
);

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/services-detail-kucing"
            element={<DetailServicePage />}
          />
          <Route
            path="/services-detail-anjing"
            element={<DetailServicePageAnjing />}
          />
          <Route path="/adopsi-kucing" element={<AdopsiKucingPage />} />
          <Route path="/adopsi-anjing" element={<AdopsiAnjingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/profiles" element={<ProfilePages />} />
          <Route path="/form-adopsi" element={<FormAdopsiPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
