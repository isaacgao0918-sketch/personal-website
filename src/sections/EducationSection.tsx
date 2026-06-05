import FadeIn from "../components/FadeIn";

const educations = [
  {
    num: "01",
    name: "香港中文大学",
    subtitle: "市场学硕士 · 2025.08 — 2026.06",
    desc: "QS 世界大学排名32，亚洲顶尖商学院。主修营销管理、消费者行为、品牌管理、数字营销、市场分析等课程。",
  },
  {
    num: "02",
    name: "中南大学",
    subtitle: "汉语言文学学士 · 2021.09 — 2025.06",
    desc: "985 / 211 重点大学，中文系传统深厚。主修语言科学、古代文学、现当代文学、文艺理论、现代写作等课程。",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-0 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10">
      <h2
        className="text-[#0C0C0C] font-black uppercase leading-none text-center mb-4 sm:mb-6"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Education
      </h2>

      <div className="max-w-5xl mx-auto">
        {educations.map((edu, i) => (
          <FadeIn key={i} delay={i * 0.15} y={30}>
            <div className="flex gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)]">
              <span
                className="text-[#0C0C0C] font-black leading-none flex-shrink-0"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {edu.num}
              </span>
              <div className="flex flex-col justify-center">
                <span className="text-xs sm:text-sm uppercase tracking-widest text-[#0C0C0C]/40 mb-1">
                  {edu.subtitle}
                </span>
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {edu.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl opacity-60 text-[#0C0C0C] mt-2"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {edu.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
