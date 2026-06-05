import FadeIn from "../components/FadeIn";

const papers = [
  {
    num: "01",
    name: "互联网软广文案研究",
    subtitle: "以小红书为例",
    meta: "2022.03 — 2022.07 · 独立作者",
    desc: "搜集小红书 KOL 与素人博主的软广文案，分析语料特征，总结小红书平台软广营销语言模式。论文入选第八届语言产业论坛分论坛。",
  },
  {
    num: "02",
    name: "美妆颜色命名与传播效益",
    subtitle: "互联网电商语境下美妆产品的颜色命名机制及其经济效益研究",
    meta: "2023.03 — 2023.07 · 独立作者",
    desc: "在电商平台搜集美妆唇部产品的新兴颜色，分析其命名机制并与传统颜色词进行对比，探索其特殊的传播和营销效益。论文入选第九届语言产业论坛分论坛。",
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-0 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10">
      <h2
        className="hero-heading font-black uppercase leading-none text-center mb-4 sm:mb-6"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Research
      </h2>

      <div className="max-w-5xl mx-auto">
        {papers.map((paper, i) => (
          <FadeIn key={i} delay={i * 0.15} y={30}>
            <div className="flex gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12 border-b border-[#D7E2EA]/[0.12]">
              <span
                className="text-[#D7E2EA] font-black leading-none flex-shrink-0"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {paper.num}
              </span>
              <div className="flex flex-col justify-center">
                <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/40 mb-1">
                  {paper.meta}
                </span>
                <h3
                  className="font-medium uppercase text-[#D7E2EA]"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {paper.name}
                </h3>
                <p className="text-[#D7E2EA]/40 font-light text-sm sm:text-base mt-1">
                  {paper.subtitle}
                </p>
                <p
                  className="font-light leading-relaxed max-w-2xl opacity-60 text-[#D7E2EA] mt-2"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {paper.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
