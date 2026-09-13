import logo from '../assets/logo-text.png'

const footerGroups = [
  { title: 'Product', links: [{ label: 'Home', href: '#home' }, { label: 'Technologies', href: '#technologies' }, { label: 'Projects', href: '#projects' }] },
  { title: 'Company', links: [{ label: 'About', href: '#about' }, { label: 'Contact', href: '#contact' }, { label: 'Careers', href: '#careers' }] },
  { title: 'Legal', links: [{ label: 'Privacy Policy', href: '#privacy' }, { label: 'Terms of Service', href: '#terms' }] },
]

function Footer() {
  return (
    <footer className="border-t border-[#eef1f5] bg-white">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1248px] pt-14 max-[520px]:w-[calc(100%-32px)] max-[520px]:pt-11">
        <div className="grid grid-cols-[minmax(260px,1.8fr)_repeat(3,minmax(120px,1fr))] gap-10 pb-12 max-[760px]:grid-cols-2 max-[520px]:grid-cols-1 max-[520px]:gap-8">
          <div>
            <a className="inline-flex" href="#home" aria-label="Dev Stack home"><img className="h-9 w-[139px] object-contain" src={logo} alt="Dev Stack" /></a>
            <p className="mb-0 mt-4 max-w-[310px] text-[13px] font-medium leading-[1.55] text-[#94a3b8]">Curated tools, technologies, and resources for developers building modern software.</p>
            <div className="mt-5 flex flex-wrap gap-5 text-[12px] font-bold text-[#64748b]">
              <a className="no-underline transition hover:text-[#ed2d91]" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
              <a className="no-underline transition hover:text-[#ed2d91]" href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
              <a className="no-underline transition hover:text-[#ed2d91]" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-4 mt-1 text-[12px] font-extrabold uppercase tracking-[-.02em] text-[#263247]">{group.title}</h2>
              <ul className="m-0 list-none space-y-3 p-0">
                {group.links.map((link) => <li key={link.label}><a className="text-[13px] font-medium text-[#94a3b8] no-underline transition hover:text-[#ed2d91]" href={link.href}>{link.label}</a></li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-[#eef1f5] py-7 text-[12px] font-medium text-[#b0bdcf] max-[520px]:flex-col max-[520px]:gap-3 max-[520px]:py-6">
          <p className="m-0">© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-7"><a className="text-inherit no-underline transition hover:text-[#ed2d91]" href="#privacy">Privacy</a><a className="text-inherit no-underline transition hover:text-[#ed2d91]" href="#terms">Terms</a></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
