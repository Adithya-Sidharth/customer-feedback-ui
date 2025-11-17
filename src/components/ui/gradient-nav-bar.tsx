import Link from "next/link"
import { CustomButton } from "@/components/ui/custom-button"

export function GradientNavBar() {
  return (
    <nav className="gradient-nav">
      <div className="container flex items-center justify-between">
        <Link href="/" className="nav-brand">
          AnalyzePoint
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="nav-link">
            Features
          </Link>
          <Link href="#about" className="nav-link">
            About
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/login">
            <CustomButton variant="outline" className="bg-white text-red-600 border-white hover:bg-gray-100">
              Log In
            </CustomButton>
          </Link>
          <Link href="/register">
            <CustomButton variant="outline" className="bg-white text-red-600 border-white hover:bg-gray-100">
              Sign In
            </CustomButton>
          </Link>
          <Link href="/dashboard">
            <CustomButton variant="primary" className="bg-black text-white hover:bg-gray-800">
              Get Started
            </CustomButton>
          </Link>
        </div>
      </div>
    </nav>
  )
}
