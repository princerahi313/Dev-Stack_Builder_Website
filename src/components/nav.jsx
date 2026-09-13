import { useState } from 'react'
import logo from '../assets/logo-text.png'
import hamburger from '../assets/hamburger.png'
import '../App.css'

const links = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Dev Stack home">
          <img src={logo} alt="Dev Stack" />
        </a>

        <div className="desktop-navigation">
          <div className="nav-links">
            {links.map((link) => (
              <a className={link === 'Home' ? 'active' : ''} href={`#${link.toLowerCase()}`} key={link}>
                {link}
              </a>
            ))}
          </div>
          <div className="account-actions">
            <a className="sign-in" href="#sign-in">Sign In</a>
            <a className="sign-up" href="#sign-up">Sign Up</a>
          </div>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <span className="close-icon" aria-hidden="true">×</span> : <img src={hamburger} alt="" />}
        </button>

        <div className="mobile-header-actions">
          <a className="sign-in" href="#sign-in">Sign In</a>
          <a className="sign-up" href="#sign-up">Sign Up</a>
        </div>

        <div className={`mobile-navigation ${menuOpen ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a className={link === 'Home' ? 'active' : ''} href={`#${link.toLowerCase()}`} key={link} onClick={closeMenu}>
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Nav
