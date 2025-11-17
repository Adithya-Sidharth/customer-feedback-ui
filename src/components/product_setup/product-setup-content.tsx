
import { useState } from "react"
import ProductForm from "./product-form"
import ProductTable from "./product-table"
import SuccessToast from "./success-toast"
import type { Product } from "@/types/product"

export default function ProductSetupContent() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Analytics Dashboard",
      url: "https://analytics.example.com",
      businessType: "SaaS",
      status: "Connected",
      addedOn: "10 Nov 2025",
    },
    {
      id: "2",
      name: "Customer Portal",
      url: "https://portal.example.com",
      businessType: "B2B SaaS",
      status: "Pending Setup",
      addedOn: "08 Nov 2025",
    },
  ])

  const [showToast, setShowToast] = useState(false)
  const [filterStatus, setFilterStatus] = useState<string>("All")

  const handleAddProduct = (newProduct: Omit<Product, "id" | "addedOn" | "status">) => {
    const product: Product = {
      ...newProduct,
      id: Date.now().toString(),
      addedOn: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
      status: "Pending Setup",
    }
    setProducts([...products, product])
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  const filteredProducts = filterStatus === "All" ? products : products.filter((p) => p.status === filterStatus)

  return (
    <div className="dashboard-content">
      {/* Form Section */}
      <div className="dashboard-section">
        <ProductForm onSubmit={handleAddProduct} />
      </div>

      {/* Table Section */}
      <div className="dashboard-section">
        <ProductTable
          products={filteredProducts}
          filterStatus={filterStatus}
          onFilterChange={setFilterStatus}
          onDelete={handleDeleteProduct}
        />
      </div>

      {/* Success Toast */}
      {showToast && <SuccessToast message="Product Added Successfully" />}
    </div>
  )
}
