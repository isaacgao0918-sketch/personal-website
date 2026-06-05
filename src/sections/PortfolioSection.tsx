import { useRef } from "react";

const row1 = [
  "/portfolio/11.png",
  "/portfolio/12.png",
  "/portfolio/13.png",
  "/portfolio/14.png",
  "/portfolio/15.png",
  "/portfolio/16.png",
];

const row2 = [
  "/portfolio/01.png",
  "/portfolio/02.png",
  "/portfolio/03.png",
  "/portfolio/04.png",
  "/portfolio/05.png",
  "/portfolio/06.png",
  "/portfolio/07.png",
  "/portfolio/08.png",
  "/portfolio/09.png",
  "/portfolio/10.png",
];

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-0 pt-20 sm:pt-24 md:pt-32 pb-10 overflow-hidden"
    >
      <style>{`
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>

      {/* Section heading */}
      <h2
        className="text-[#0C0C0C] font-black uppercase leading-none text-center mb-4 sm:mb-6"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Portfolio
      </h2>

      {/* Row 1 - scrolls right */}
      <div className="flex gap-3 mb-3 overflow-hidden">
        <div className="flex gap-3 animate-scroll-right">
          {doubled1.map((img, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 w-[320px] sm:w-[380px] md:w-[420px] h-[200px] sm:h-[240px] md:h-[270px] rounded-2xl overflow-hidden"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls left */}
      <div className="flex gap-3 overflow-hidden">
        <div className="flex gap-3 animate-scroll-left">
          {doubled2.map((img, i) => (
            <div
              key={`r2-${i}`}
              className="flex-shrink-0 w-[320px] sm:w-[380px] md:w-[420px] h-[200px] sm:h-[240px] md:h-[270px] rounded-2xl overflow-hidden"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
