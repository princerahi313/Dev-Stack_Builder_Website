import bannerStack from '../assets/banner-stack.png'

function Hero() {
  return (
    <section className="mx-auto grid min-h-[465px] w-[calc(100%-48px)] max-w-[1248px] grid-cols-[minmax(0,1.15fr)_minmax(340px,.85fr)] items-center py-[76px] pb-[69px] max-[980px]:min-h-[405px] max-[980px]:grid-cols-[minmax(0,1fr)_minmax(275px,.72fr)] max-[980px]:py-[58px] max-[520px]:flex max-[520px]:min-h-0 max-[520px]:w-[calc(100%-32px)] max-[520px]:flex-col-reverse max-[520px]:items-start max-[520px]:py-[38px] max-[520px]:pb-14" id="home" aria-labelledby="hero-heading">
      <div className="pb-0.5">
        <h1 className="m-0 text-[clamp(42px,4.25vw,58px)] font-extrabold leading-[1.03] tracking-[-.052em] text-[#121a2d] max-[980px]:text-[clamp(38px,5.6vw,52px)] max-[520px]:text-[clamp(36px,11.2vw,48px)] max-[520px]:leading-[1.04]" id="hero-heading">Build Your Ideal<br /><span className="inline-block bg-gradient-to-r from-[#ff4c20] via-[#ee278e] to-[#803bed] bg-clip-text text-transparent">Development Stack</span></h1>
        <p className="mt-[22px] max-w-[620px] text-[17px] font-medium leading-[1.55] tracking-[-.02em] text-[#64748b] max-[520px]:mt-[17px] max-[520px]:text-[15px]">Explore frontend, backend, database, and tooling options,<br className="max-[520px]:hidden" />compare them side by side, and put together the stack that fits your<br className="max-[520px]:hidden" />next project.</p>
        <div className="mt-[47px] flex flex-wrap gap-[14px] max-[520px]:mt-[29px] max-[520px]:w-full max-[520px]:gap-2.5">
          <a className="inline-flex h-11 min-w-[168px] items-center justify-center rounded-lg bg-gradient-to-r from-[#ff6919] to-[#ef2d8e] px-[19px] text-[14px] font-bold text-white no-underline shadow-[0_5px_10px_rgb(233_49_126_/_17%)] transition hover:-translate-y-0.5 hover:shadow-[0_7px_14px_rgb(15_23_42_/_12%)] max-[520px]:h-[43px] max-[520px]:min-w-0 max-[520px]:flex-1 max-[520px]:basis-[145px] max-[520px]:px-3 max-[520px]:text-[13px]" href="#technologies">Explore Technologies</a>
          <a className="inline-flex h-11 min-w-[168px] items-center justify-center rounded-lg border border-[#e5e9f0] bg-white px-[19px] text-[14px] font-bold text-[#64748b] no-underline transition hover:-translate-y-0.5 hover:border-[#cbd5e1] hover:shadow-[0_7px_14px_rgb(15_23_42_/_12%)] max-[520px]:h-[43px] max-[520px]:min-w-0 max-[520px]:flex-1 max-[520px]:basis-[145px] max-[520px]:px-3 max-[520px]:text-[13px]" href="#about">Learn More</a>
        </div>
      </div>
      <div className="flex justify-center pt-1.5 max-[520px]:w-full max-[520px]:pb-[22px] max-[520px]:pt-0"><img className="block h-auto w-[min(100%,405px)] max-[980px]:w-[min(100%,330px)] max-[520px]:w-[min(82vw,320px)]" src={bannerStack} alt="A colorful layered developer technology stack" /></div>
    </section>
  )
}

export default Hero
