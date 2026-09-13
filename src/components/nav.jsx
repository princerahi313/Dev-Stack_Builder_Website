import { useState } from 'react'
import logo from '../assets/logo-text.png'
import hamburger from '../assets/hamburger.png'

const links = ['Home', 'Technologies', 'Projects', 'About', 'Contact']
const signUpClasses = 'inline-flex h-[35px] min-w-[79px] items-center justify-center rounded-full bg-[#dc1680] px-[18px] text-[13px] font-bold leading-none text-white no-underline shadow-[0_2px_4px_rgb(190_24_93_/_18%)] transition hover:-translate-y-px hover:bg-[#be126d] max-[520px]:h-[31px] max-[520px]:min-w-[62px] max-[520px]:px-[11px] max-[520px]:text-[11px]'
const signInClasses = 'text-[14px] font-semibold leading-none text-[#64748b] no-underline transition hover:text-[#f23893] max-[520px]:text-[clamp(11px,3.2vw,13px)]'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="relative z-10 h-[67px] border-b border-[#f1f3f7] bg-white max-[980px]:h-16">
      <nav className="relative mx-auto flex h-full w-[calc(100%-48px)] max-w-[1248px] items-center max-[980px]:w-[calc(100%-48px)] max-[980px]:max-w-[900px] max-[980px]:gap-3.5 max-[520px]:w-[calc(100%-24px)] max-[520px]:gap-[7px]" aria-label="Main navigation">
        <a className="inline-flex shrink-0 items-center" href="#home" onClick={closeMenu} aria-label="Dev Stack home">
          <img className="block h-9 w-[139px] object-contain max-[520px]:h-auto max-[520px]:w-[clamp(94px,29vw,124px)]" src={logo} alt="Dev Stack" />
        </a>
        <div className="ml-[250px] flex flex-1 items-center justify-between max-[980px]:hidden">
          <div className="flex items-center gap-[31px]">
            {links.map((link) => <a className={`text-[14px] font-semibold leading-none no-underline transition hover:text-[#f23893] ${link === 'Home' ? 'text-[#f23893]' : 'text-[#64748b]'}`} href={`#${link.toLowerCase()}`} key={link}>{link}</a>)}
          </div>
          <div className="flex items-center gap-5"><a className={signInClasses} href="#sign-in">Sign In</a><a className={signUpClasses} href="#sign-up">Sign Up</a></div>
        </div>
        <button className="order-first hidden h-10 w-10 place-items-center rounded-lg border-0 bg-transparent p-0 text-[#172033] hover:bg-[#f8f2f7] max-[980px]:inline-grid max-[520px]:h-9 max-[520px]:w-9" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <span className="text-[30px] font-light leading-none" aria-hidden="true">×</span> : <img className="h-4 w-5" src={hamburger} alt="" />}
        </button>
        <div className="ml-auto hidden items-center gap-4 max-[980px]:flex max-[520px]:gap-[clamp(7px,2.5vw,13px)]"><a className={signInClasses} href="#sign-in">Sign In</a><a className={signUpClasses} href="#sign-up">Sign Up</a></div>
        <div className={`absolute right-0 left-0 top-[calc(100%-1px)] hidden flex-col overflow-hidden border-b bg-white px-4 opacity-0 shadow-[0_12px_20px_rgb(15_23_42_/_0%)] transition-[max-height,opacity,visibility,box-shadow] duration-200 max-[980px]:flex ${menuOpen ? 'visible max-h-[390px] border-[#edf0f5] py-[10px] pb-[18px] opacity-100 shadow-[0_12px_20px_rgb(15_23_42_/_8%)]' : 'invisible max-h-0 border-transparent py-0'}`}>
          {links.map((link) => <a className={`flex min-h-[42px] items-center overflow-hidden px-2 text-[14px] font-semibold leading-none no-underline transition hover:text-[#f23893] ${link === 'Home' ? 'text-[#f23893]' : 'text-[#64748b]'}`} href={`#${link.toLowerCase()}`} key={link} onClick={closeMenu}>{link}</a>)}
        </div>
      </nav>
    </header>
  )
}

export default Nav
