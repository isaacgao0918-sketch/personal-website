import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";
import ContactButton from "../components/ContactButton";

const aboutText =
  "高盛达，香港中文大学市场学硕士，中南大学汉语言文学本科。擅长品牌叙事、公关传播、内容策划与市场研究。具备较强的文字表达、项目执行和数据分析能力，拥有流利的英语交流与写作能力。曾在万博宣伟公关、语言产业论坛等机构实习，积累了丰富的市场营销与品牌传播经验。";

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          About me
        </h2>
      </FadeIn>

      {/* Info grid */}
      <div className="flex flex-col items-center gap-8 sm:gap-10 mt-10 sm:mt-14 max-w-2xl">
        <AnimatedText
          text={aboutText}
          className="text-white/75 font-semibold text-center leading-relaxed"
          style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)" }}
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-20 w-full text-center">
          {[
            { label: "语言", value: "普通话 · 英语 · 广东话" },
            { label: "英语", value: "雅思7分（阅读8.5）" },
            { label: "院校", value: "香港中文大学" },
            { label: "专业", value: "市场学硕士" },
          ].map((item, i) => (
            <FadeIn key={i} delay={0.4 + i * 0.1} y={20}>
              <div className="text-white/50 text-base sm:text-lg uppercase tracking-wider mb-1 whitespace-nowrap">
                {item.label}
              </div>
              <div className="text-white/90 font-medium text-lg sm:text-xl whitespace-nowrap">
                {item.value}
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-2">
          <FadeIn delay={0.8} y={20}>
            <a
              href="tel:15524835520"
              className="block text-white/80 hover:text-white transition-colors text-base sm:text-lg"
            >
              +86 15524835520
            </a>
          </FadeIn>
          <FadeIn delay={0.9} y={20}>
            <a
              href="mailto:Isaacgao@foxmail.com"
              className="block text-white/80 hover:text-white transition-colors text-base sm:text-lg"
            >
              Isaacgao@foxmail.com
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={1.0} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
