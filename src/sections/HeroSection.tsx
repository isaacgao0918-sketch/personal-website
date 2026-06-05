import FadeIn from "../components/FadeIn";
import ContactButton from "../components/ContactButton";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip">

      {/* Hero Heading */}
      <div className="overflow-hidden flex-1 flex items-start justify-center pt-[18vh] sm:pt-[16vh] md:pt-[14vh]">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center px-6 md:px-10 text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw]">
            HI, I&apos;m Isaac
          </h1>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug whitespace-nowrap"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            市场营销策划 · 品牌公关媒介
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <div>
            <ContactButton />
          </div>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <FadeIn delay={0.6} y={30}>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-16 sm:bottom-20 md:bottom-24 z-10 w-[360px] sm:w-[465px] md:w-[570px] lg:w-[680px]">
          <img
            src="/about-portrait.png"
            alt="高盛达"
            className="w-full h-auto pointer-events-none"
          />
        </div>
      </FadeIn>
    </section>
  );
}
