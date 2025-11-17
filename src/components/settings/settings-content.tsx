import type React from "react"

import { useState } from "react"
import { useTheme } from "../../lib/use-theme"

export default function SettingsContent() {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john@example.com",
  })
  const [savedMessage, setSavedMessage] = useState("")
  const [revealSecret, setRevealSecret] = useState(false)
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    weeklyReports: true,
    productUpdates: false,
  })

  const { theme, updateTheme } = useTheme()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSaveProfile = () => {
    setSavedMessage("Profile changes saved successfully!")
    setTimeout(() => setSavedMessage(""), 3000)
  }

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleCopyKey = async (key: string) => {
    await navigator.clipboard.writeText(key)
    alert("API key copied to clipboard!")
  }

  return (
    <div className="settings-content dark:bg-gradient-to-b dark:from-[#0f1724] dark:to-[#1a2332]">
      {/* Page Header */}
      <div className="settings-header dark:border-[#1f2937]">
        <div>
          <h1 className="settings-title dark:text-white">Settings</h1>
          <p className="settings-subtitle dark:text-[#a0aec0]">Manage your account and system preferences.</p>
        </div>
      </div>

      <div className="settings-card dark:bg-[#1a2332] dark:border-[#1f2937]">
        <h2 className="settings-section-title dark:text-white">Appearance</h2>
        <div className="profile-form">
          <div className="form-group">
            <label className="form-label dark:text-[#cbd5e1]">Theme</label>
            <select
              value={theme}
              onChange={(e) => updateTheme(e.target.value as "light" | "dark" | "system")}
              className="form-input dark:bg-[#0f1724] dark:text-white dark:border-[#1f2937]"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>
        </div>
      </div>

      {/* Profile Settings Section */}
      <div className="settings-card dark:bg-[#1a2332] dark:border-[#1f2937]">
        <h2 className="settings-section-title dark:text-white">Profile Settings</h2>
        <div className="profile-form">
          <div className="form-group">
            <label className="form-label dark:text-[#cbd5e1]">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="form-input dark:bg-[#0f1724] dark:text-white dark:border-[#1f2937] dark:focus:border-[#ff8a2a]"
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label className="form-label dark:text-[#cbd5e1]">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input dark:bg-[#0f1724] dark:text-white dark:border-[#1f2937] dark:focus:border-[#ff8a2a]"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label className="form-label dark:text-[#cbd5e1]">Password</label>
            <div className="password-input-group">
              <input
                type="password"
                value="••••••••"
                disabled
                className="form-input dark:bg-[#0f1724] dark:text-[#6b7280] dark:border-[#1f2937]"
              />
              <button className="password-change-btn dark:border-[#ff8a2a] dark:text-[#ff8a2a] dark:hover:bg-[#ff6a00]">
                Change Password
              </button>
            </div>
          </div>
          {savedMessage && <p className="save-success dark:text-[#4ade80]">{savedMessage}</p>}
          <button className="save-button dark:bg-[#ff8a2a] dark:hover:bg-[#ff6a00]" onClick={handleSaveProfile}>
            Save Changes
          </button>
        </div>
      </div>

      {/* API / Integration Keys Section */}
      <div className="settings-card dark:bg-[#1a2332] dark:border-[#1f2937]">
        <h2 className="settings-section-title dark:text-white">API & Integration Keys</h2>
        <p className="api-section-description dark:text-[#a0aec0]">
          Use these keys to connect your product to the AnalyzePoint API. Keep your secret key private.
        </p>
        <div className="api-keys-group">
          <div className="api-key-item">
            <div className="api-key-label dark:text-[#cbd5e1]">Public API Key</div>
            <div className="api-key-field">
              <input
                type="text"
                value="pk_live_abc123def456..."
                disabled
                className="form-input api-key-input dark:bg-[#0f1724] dark:text-[#6b7280] dark:border-[#1f2937]"
              />
              <button
                className="api-action-btn dark:bg-[#1a2332] dark:border-[#1f2937] dark:text-[#a0aec0] dark:hover:text-[#ff8a2a] dark:hover:border-[#ff8a2a]"
                onClick={() => handleCopyKey("pk_live_abc123def456...")}
              >
                📋 Copy
              </button>
            </div>
          </div>
          <div className="api-key-item">
            <div className="api-key-label dark:text-[#cbd5e1]">Secret Key</div>
            <div className="api-key-field">
              <input
                type={revealSecret ? "text" : "password"}
                value={revealSecret ? "sk_live_xyz789uvw012..." : "••••••••••••••••"}
                disabled
                className="form-input api-key-input dark:bg-[#0f1724] dark:text-[#6b7280] dark:border-[#1f2937]"
              />
              <button
                className="api-action-btn dark:bg-[#1a2332] dark:border-[#1f2937] dark:text-[#a0aec0] dark:hover:text-[#ff8a2a] dark:hover:border-[#ff8a2a]"
                onClick={() => setRevealSecret(!revealSecret)}
              >
                {revealSecret ? "🔒 Hide" : "👁️ Reveal"}
              </button>
              <button className="api-action-btn regenerate-btn dark:bg-[#1a2332] dark:border-[#991b1b] dark:text-[#fca5a5] dark:hover:bg-[#7f1d1d]">
                🔄 Regenerate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Preferences Section */}
      <div className="settings-card dark:bg-[#1a2332] dark:border-[#1f2937]">
        <h2 className="settings-section-title dark:text-white">Notification Preferences</h2>
        <div className="notification-list">
          <div className="notification-item dark:bg-[#0f1724] dark:border-[#1f2937] dark:hover:border-[#ff8a2a]">
            <label className="notification-label">
              <input
                type="checkbox"
                checked={notifications.emailAlerts}
                onChange={() => handleNotificationChange("emailAlerts")}
                className="notification-toggle"
              />
              <span className="notification-text dark:text-white">Email Alerts</span>
            </label>
          </div>
          <div className="notification-item dark:bg-[#0f1724] dark:border-[#1f2937] dark:hover:border-[#ff8a2a]">
            <label className="notification-label">
              <input
                type="checkbox"
                checked={notifications.weeklyReports}
                onChange={() => handleNotificationChange("weeklyReports")}
                className="notification-toggle"
              />
              <span className="notification-text dark:text-white">Weekly Reports</span>
            </label>
          </div>
          <div className="notification-item dark:bg-[#0f1724] dark:border-[#1f2937] dark:hover:border-[#ff8a2a]">
            <label className="notification-label">
              <input
                type="checkbox"
                checked={notifications.productUpdates}
                onChange={() => handleNotificationChange("productUpdates")}
                className="notification-toggle"
              />
              <span className="notification-text dark:text-white">Product Updates</span>
            </label>
          </div>
        </div>
      </div>

      {/* Delete Account Section */}
      <div className="settings-card danger-card dark:bg-[#1a0f0f] dark:border-[#5f1f1f]">
        <div className="danger-header">
          <span className="danger-icon">⚠️</span>
          <h2 className="settings-section-title dark:text-[#fca5a5]">Delete Account</h2>
        </div>
        <p className="danger-description dark:text-[#f87171]">
          Permanently delete your account and all associated data. This action cannot be undone.
        </p>
        <button className="delete-button dark:bg-[#991b1b] dark:hover:bg-[#7f1d1d]">Delete Account</button>
      </div>
    </div>
  )
}
