import Nav from './components/nav'
import Hero from './components/hero'
import Technology from './components/technology'

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Technology />
      </main>
    </div>
  )
}

export default App
