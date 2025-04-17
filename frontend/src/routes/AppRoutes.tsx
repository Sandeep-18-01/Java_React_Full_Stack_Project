import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserListPage from "../components/pages/UserListPage";
import UserDetailsPage from "../components/pages/UserDetailsPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
