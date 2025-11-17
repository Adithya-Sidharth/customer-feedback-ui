"use client"

import type React from "react"
import { useState } from "react"
import { Link } from 'react-router-dom'
import "./forgot-password.css"

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        if (errors.email) {
            setErrors({})
        }
    }

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email"
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
        <div className="forgot-password-page">
            <div className="forgot-password-container">
                {!isSubmitted ? (
                    <>
                        {/* Header Section */}
                        <div className="forgot-password-header">
                            <h1 className="forgot-password-title">Reset Your Password</h1>
                            <p className="forgot-password-subtitle">
                                Enter your email address and we'll send you instructions to reset your password
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="forgot-password-form">
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={handleInputChange}
                                    className={`form-input ${errors.email ? "error" : ""}`}
                                />
                                {errors.email && <span className="form-error">{errors.email}</span>}
                            </div>

                            {errors.submit && <div className="form-error form-error-submit">{errors.submit}</div>}

                            <button type="submit" className="submit-btn" disabled={isLoading}>
                                {isLoading ? "Sending..." : "Send Reset Instructions"}
                            </button>
                        </form>

                        {/* Back to Login Link */}
                        <p className="back-to-login-text">
                            Remember your password?{" "}
                            <Link to="/login" className="back-to-login-link">
                                Back to login
                            </Link>
                        </p>

                        {/* Back Link */}
                        <div className="back-link-container">
                            <Link to="/" className="back-link">
                                ← Back to home
                            </Link>
                        </div>
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
                            <h2 className="success-title">Check Your Email</h2>
                            <p className="success-message">
                                We've sent password reset instructions to <strong>{email}</strong>
                            </p>
                            <p className="success-subtitle">
                                Click the link in the email to reset your password. The link will expire in 24 hours.
                            </p>

                            <div className="success-actions">
                                <Link to="/reset-password" className="success-btn primary-btn">
                                    Reset Password
                                </Link>
                                <button
                                    onClick={() => {
                                        setIsSubmitted(false)
                                        setEmail("")
                                    }}
                                    className="success-btn secondary-btn"
                                >
                                    Try Another Email
                                </button>
                            </div>
                        </div>
                    </>
                )}

                {/* Footer */}
                <footer className="forgot-password-footer">
                    <p>© 2025 AnalyzePoint Inc. All rights reserved.</p>
                </footer>
            </div>
        </div>
    )
}
