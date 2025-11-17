import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import HomePage from './pages/home/HomePage'
import RegisterPage from './pages/register/register-page'
import LoginPage from './pages/login/login-page'
import DashboardPage from './pages/panel/dashboard/dashboard'
import ActionCenterPage from './pages/panel/actions/page'
import InsightsPage from './pages/panel/insights/page'
import './styles/globals.css'
import ProductSetupPage from "./pages/panel/setup/product-setup";
import SettingsPage from "./pages/panel/settings/settings";
import ForgotPasswordPage from './pages/forgot-password/forgot-password'
import ResetPasswordPage from './pages/reset-password/reset-password'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>

      {/* Dashboard routes are top-level (not nested under Layout) */}
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="dashboard/actions" element={<ActionCenterPage />} />
      <Route path="dashboard/insights" element={<InsightsPage />} />
      <Route path="dashboard/setup/product-setup" element={<ProductSetupPage />} />
      <Route path="dashboard/settings" element={<SettingsPage />} />
      <Route path="forgot-password" element={<ForgotPasswordPage />} />
      <Route path="reset-password" element={<ResetPasswordPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
