import Nav from './components/nav'
import Hero from './components/hero'
import Technology from './components/technology'
import Footer from './components/footer'

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Technology />
      </main>
      <Footer />
    </div>
  )
}

export default App
