import FadeIn from "../components/FadeIn";

const honors = [
  {
    num: "01",
    name: "中南大学三等奖学金",
    desc: "2021-2022、2022-2023 学年连续两年获评",
  },
  {
    num: "02",
    name: "问渠晨读优秀组织奖",
    desc: "带领班级获评校级荣誉，全院唯一获评班级",
  },
  {
    num: "03",
    name: "风华文萃杯新生辩论赛",
    desc: "季军 & 最佳辩手",
  },
];

export default function HonorsSection() {
  return (
    <section id="honors" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-0 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10">
      <h2
        className="hero-heading font-black uppercase leading-none text-center mb-4 sm:mb-6"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Honors
      </h2>

      <div className="max-w-5xl mx-auto">
        {honors.map((honor, i) => (
          <FadeIn key={i} delay={i * 0.15} y={30}>
            <div className="flex gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12 border-b border-[#D7E2EA]/[0.12]">
              <span
                className="text-[#D7E2EA] font-black leading-none flex-shrink-0"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {honor.num}
              </span>
              <div className="flex flex-col justify-center">
                <h3
                  className="font-medium uppercase text-[#D7E2EA]"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {honor.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl opacity-60 text-[#D7E2EA] mt-1"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {honor.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
