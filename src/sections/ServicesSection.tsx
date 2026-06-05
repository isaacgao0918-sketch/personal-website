import FadeIn from "../components/FadeIn";

const skills = [
  {
    num: "01",
    name: "语言能力",
    desc: "英语雅思7分（阅读8.5），流利的英语日常交流与书面写作能力。普通话母语，广东话接触水平。大学英语六级已通过。",
  },
  {
    num: "02",
    name: "办公与数据工具",
    desc: "全国计算机二级，熟练运用 Office、WPS 等办公软件。熟练使用 MySQL、Python、R 进行数据处理与分析。",
  },
  {
    num: "03",
    name: "AI 工具应用",
    desc: "熟练掌握 AI 平台与 AI 工具，熟练运用 TRAE 等 coding vibe 工具进行内容创作与效率提升。",
  },
  {
    num: "04",
    name: "文字与内容能力",
    desc: "中文系专业出身，文字功底扎实，擅长各类材料及文案撰写，包括新闻稿、研究报告、社交媒体内容等。",
  },
  {
    num: "05",
    name: "市场与品牌能力",
    desc: "市场洞察力敏锐，具备营销、公关、品牌管理能力。深厚扎实的市场学基础，擅长品牌叙事与整合营销传播。",
  },
];

export default function ServicesSection() {
  return (
    <section id="skills" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2
        className="text-[#0C0C0C] font-black uppercase leading-none text-center mb-4 sm:mb-6"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Skills
      </h2>

      <div className="max-w-5xl mx-auto">
        {skills.map((s, i) => (
          <FadeIn key={i} delay={i * 0.1} y={30}>
            <div className="flex gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)]">
              <span
                className="text-[#0C0C0C] font-black leading-none flex-shrink-0"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {s.num}
              </span>
              <div className="flex flex-col justify-center">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl opacity-60 text-[#0C0C0C] mt-1"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
