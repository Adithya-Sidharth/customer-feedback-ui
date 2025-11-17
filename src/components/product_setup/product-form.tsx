
import type React from "react"

import { useState } from "react"
import type { Product } from "@/types/product"

interface ProductFormProps {
  onSubmit: (product: Omit<Product, "id" | "addedOn" | "status">) => void
}

export default function ProductForm({ onSubmit }: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    ownerName: "",
    url: "",
    description: "",
    businessType: "SaaS",
    email: "",
    connectMethod: "API Key",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      name: formData.name,
      url: formData.url,
      businessType: formData.businessType,
    })
    setFormData({
      name: "",
      companyName: "",
      ownerName: "",
      url: "",
      description: "",
      businessType: "SaaS",
      email: "",
      connectMethod: "API Key",
    })
  }

  return (
    <div className="product-form-container">
      <div className="product-form-card">
        <h2 className="product-form-title">Add New Product</h2>

        <form onSubmit={handleSubmit} className="product-form">
          <div className="product-form-grid">
            {/* Column 1 */}
            <div className="product-form-column">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g., My Product"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="companyName" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g., Acme Inc."
                />
              </div>

              <div className="form-group">
                <label htmlFor="ownerName" className="form-label">
                  Owner Name
                </label>
                <input
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g., John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description" className="form-label">
                  Product Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Describe your product..."
                  rows={3}
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="product-form-column">
              <div className="form-group">
                <label htmlFor="url" className="form-label">
                  Product URL
                </label>
                <input
                  type="url"
                  id="url"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="https://yourproduct.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="businessType" className="form-label">
                  Business Type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="SaaS">SaaS</option>
                  <option value="B2B SaaS">B2B SaaS</option>
                  <option value="API Tool">API Tool</option>
                  <option value="eCommerce">eCommerce</option>
                  <option value="Mobile App">Mobile App</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Contact Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="contact@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Connect Method</label>
                <div className="radio-group">
                  {["API Key", "Script Tag", "Manual Upload"].map((method) => (
                    <label key={method} className="radio-label">
                      <input
                        type="radio"
                        name="connectMethod"
                        value={method}
                        checked={formData.connectMethod === method}
                        onChange={handleChange}
                        className="radio-input"
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn-primary">
              Save & Continue
            </button>
            <button type="button" className="btn-secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
