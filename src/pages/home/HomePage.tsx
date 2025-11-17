import React from 'react'
import { HeroSection } from './hero-section'
import { FeaturesSection } from './features-section'
import { AIGraphicsSection } from './ai-graphics-section'

import "./homepage.css"
import "./components.css"


export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturesSection />
      <AIGraphicsSection />
      
    </div>
  )
}
