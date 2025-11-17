import { Link } from "react-router-dom"
import { CustomButton } from "../../components/ui/custom-button"
import "./homepage.css"
import "./components.css"

export default function GradientNavBar() {
  return (
    <nav className="gradient-nav">
      <div className="container flex items-center justify-between">
        <Link to="/" className="nav-brand">
          AnalyzePoint
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/login">
            <CustomButton variant="outline" className="bg-white text-black border-white hover:bg-gray-100">
              Sign In
            </CustomButton>
          </Link>
          <Link to="/dashboard">
            <CustomButton variant="primary" className="bg-black text-white hover:bg-gray-800">
              Get Started
            </CustomButton>
          </Link>
        </div>
      </div>
    </nav>
  )
}
