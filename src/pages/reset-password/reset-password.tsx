"use client"

import type React from "react"
import { useState } from "react"
import { Link } from 'react-router-dom'
import "./reset-password.css"

export default function ResetPasswordPage() {
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }))
        }
    }

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!formData.password.trim()) {
            newErrors.password = "Password is required"
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long"
        } else if (!/(?=.*[a-z])/.test(formData.password)) {
            newErrors.password = "Password must contain at least one lowercase letter"
        } else if (!/(?=.*[A-Z])/.test(formData.password)) {
            newErrors.password = "Password must contain at least one uppercase letter"
        } else if (!/(?=.*\d)/.test(formData.password)) {
            newErrors.password = "Password must contain at least one number"
        }

        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = "Please confirm your password"
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsLoading(true)
        try {
            // Simulate API call for password reset
            await new Promise((resolve) => setTimeout(resolve, 1500))
            setIsSubmitted(true)
        } catch (error) {
            setErrors({ submit: "An error occurred. Please try again." })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="reset-password-page">
            <div className="reset-password-container">
                {!isSubmitted ? (
                    <>
                        {/* Header Section */}
                        <div className="reset-password-header">
                            <h1 className="reset-password-title">Create New Password</h1>
                            <p className="reset-password-subtitle">
                                Welcome! Please create a strong password to secure your AnalyzePoint account. Your new password will replace your previous one.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="reset-password-form">
                            {/* New Password Field */}
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">
                                    New Password
                                </label>
                                <div className="password-input-wrapper">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        placeholder="Enter your new password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className={`form-input ${errors.password ? "error" : ""}`}
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle-btn"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        ) : (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.26 3.64m-5.88-2.12a3 3 0 1 1-4.24-4.24" />
                                                <line x1="1" y1="1" x2="23" y2="23" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {errors.password && <span className="form-error">{errors.password}</span>}
                            </div>

                            {/* Confirm Password Field */}
                            <div className="form-group">
                                <label htmlFor="confirmPassword" className="form-label">
                                    Confirm Password
                                </label>
                                <div className="password-input-wrapper">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Confirm your password"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className={`form-input ${errors.confirmPassword ? "error" : ""}`}
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle-btn"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                    >
                                        {showConfirmPassword ? (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        ) : (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.26 3.64m-5.88-2.12a3 3 0 1 1-4.24-4.24" />
                                                <line x1="1" y1="1" x2="23" y2="23" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
                            </div>

                            {/* Password Requirements Info */}
                            <div className="password-requirements">
                                <p className="requirements-title">Password Requirements:</p>
                                <ul className="requirements-list">
                                    <li className={formData.password.length >= 8 ? "met" : ""}>
                                        At least 8 characters
                                    </li>
                                    <li className={/(?=.*[a-z])/.test(formData.password) ? "met" : ""}>
                                        One lowercase letter
                                    </li>
                                    <li className={/(?=.*[A-Z])/.test(formData.password) ? "met" : ""}>
                                        One uppercase letter
                                    </li>
                                    <li className={/(?=.*\d)/.test(formData.password) ? "met" : ""}>
                                        One number
                                    </li>
                                </ul>
                            </div>

                            {errors.submit && <div className="form-error form-error-submit">{errors.submit}</div>}

                            <button type="submit" className="submit-btn" disabled={isLoading}>
                                {isLoading ? "Resetting Password..." : "Reset Password"}
                            </button>
                        </form>

                        {/* Back to Login Link */}
                        <p className="back-to-login-text">
                            <Link to="/login" className="back-to-login-link">
                                Back to login
                            </Link>
                        </p>
                    </>
                ) : (
                    <>
                        {/* Success State */}
                        <div className="success-container">
                            <div className="success-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <h2 className="success-title">Password Reset Successfully</h2>
                            <p className="success-message">
                                Your password has been updated. You can now log in with your new password.
                            </p>

                            <Link to="/login" className="success-btn primary-btn">
                                Go to Login
                            </Link>
                        </div>
                    </>
                )}

                {/* Footer */}
                <footer className="reset-password-footer">
                    <p>© 2025 AnalyzePoint Inc. All rights reserved.</p>
                </footer>
            </div>
        </div>
    )
}
