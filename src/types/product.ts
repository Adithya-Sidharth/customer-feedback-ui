export interface Product {
  id: string
  name: string
  url: string
  businessType: string
  status: "Connected" | "Pending Setup" | "Disconnected"
  addedOn: string
}
