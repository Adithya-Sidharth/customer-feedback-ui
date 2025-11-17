import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './header'
import { Footer } from './footer'
import './layout.css'

export default function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="main-content">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}
