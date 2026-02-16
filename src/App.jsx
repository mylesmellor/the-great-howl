import { useState, useCallback } from 'react'
import { EditProvider } from './components/EditContext'
import { CartProvider } from './components/CartContext'
import EditToggle from './components/EditToggle'
import GrainOverlay from './components/GrainOverlay'
import Nav from './components/Nav'
import Cart from './components/Cart'
import Hero from './components/Hero'
import Story from './components/Story'
import Music from './components/Music'
import Shop from './components/Shop'
import Manifesto from './components/Manifesto'
import Connect from './components/Connect'
import Footer from './components/Footer'
import AnecdoteFragment from './components/AnecdoteFragment'
import StoryOverlay from './components/StoryOverlay'

export default function App() {
  const [activeStory, setActiveStory] = useState(null)
  const openStory = useCallback((storyId) => setActiveStory(storyId), [])
  const closeStory = useCallback(() => setActiveStory(null), [])

  return (
    <EditProvider>
      <CartProvider>
        <GrainOverlay />
        <Nav />
        <Cart />
        <main>
          <Hero />
          <Story />

          {/* Marginal fragment — drawer */}
          <div className="px-6 sm:px-12 py-12 sm:py-16 max-w-[1200px] mx-auto">
            <AnecdoteFragment id="drawer_4" onOpenStory={openStory} />
          </div>

          <Music onOpenStory={openStory} />
          <Shop />

          {/* Marginal fragment — kitchen */}
          <div className="px-6 sm:px-12 py-12 sm:py-16 max-w-[1200px] mx-auto flex justify-end">
            <AnecdoteFragment id="kitchen_1" onOpenStory={openStory} />
          </div>

          <Manifesto />
          <Connect />
        </main>
        <Footer onOpenStory={openStory} />
        <EditToggle />

        {activeStory && (
          <StoryOverlay storyId={activeStory} onClose={closeStory} />
        )}
      </CartProvider>
    </EditProvider>
  )
}
