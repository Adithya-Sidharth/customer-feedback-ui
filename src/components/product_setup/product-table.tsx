
import { useState } from "react"
import type { Product } from "@/types/product"

interface ProductTableProps {
  products: Product[]
  filterStatus: string
  onFilterChange: (status: string) => void
  onDelete: (id: string) => void
}

export default function ProductTable({ products, filterStatus, onFilterChange, onDelete }: ProductTableProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredBySearch = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.url.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getStatusBadgeClass = (status: string): string => {
    switch (status) {
      case "Connected":
        return "status-badge status-connected"
      case "Pending Setup":
        return "status-badge status-pending"
      case "Disconnected":
        return "status-badge status-disconnected"
      default:
        return "status-badge"
    }
  }

  const getStatusDot = (status: string): string => {
    switch (status) {
      case "Connected":
        return "🟢"
      case "Pending Setup":
        return "🟡"
      case "Disconnected":
        return "🔴"
      default:
        return "⚪"
    }
  }

  return (
    <div className="product-table-container">
      <div className="product-table-card">
        <div className="table-header">
          <div className="table-header-left">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="table-header-right">
            <button className="btn-primary btn-sm">+ Add New Product</button>
            <select value={filterStatus} onChange={(e) => onFilterChange(e.target.value)} className="filter-select">
              <option value="All">All</option>
              <option value="Connected">Connected</option>
              <option value="Pending Setup">Pending Setup</option>
              <option value="Disconnected">Disconnected</option>
            </select>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="products-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>URL</th>
                <th>Business Type</th>
                <th>Status</th>
                <th>Added On</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBySearch.length > 0 ? (
                filteredBySearch.map((product) => (
                  <tr key={product.id}>
                    <td className="cell-name">
                      <div className="name-with-avatar">
                        <div className="avatar">{product.name.charAt(0).toUpperCase()}</div>
                        <span>{product.name}</span>
                      </div>
                    </td>
                    <td className="cell-url">
                      <a href={product.url} target="_blank" rel="noopener noreferrer" className="url-link">
                        {product.url.replace("https://", "").replace("http://", "")}
                      </a>
                    </td>
                    <td className="cell-type">{product.businessType}</td>
                    <td className="cell-status">
                      <span className={getStatusBadgeClass(product.status)}>
                        {getStatusDot(product.status)} {product.status}
                      </span>
                    </td>
                    <td className="cell-date">{product.addedOn}</td>
                    <td className="cell-actions">
                      <div className="action-buttons">
                        <button className="action-btn" title="View">
                          👁️
                        </button>
                        <button className="action-btn" title="Edit">
                          ✏️
                        </button>
                        <button
                          className="action-btn action-delete"
                          title="Delete"
                          onClick={() => onDelete(product.id)}
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="cell-empty">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
