import FadeIn from "../components/FadeIn";

const internships = [
  {
    num: "01",
    company: "万博宣伟公关",
    subtitle: "2025.02 — 2025.05 · 实习公关",
    org: "埃培智市场咨询",
    desc: "处理日常公关媒介工作，撰写社交平台文案，监测媒体动态，维护媒体关系。收集行业资料，撰写行业研究报告与新闻稿。制作月度市场报告，草拟营销规划日历。参与品牌活动执行，策划线上社交内容传播。",
  },
  {
    num: "02",
    company: "语言产业论坛",
    subtitle: "2023.05 — 2023.07 · 会务助理",
    desc: "负责志愿者征集招募与团队组建。参与会议手册编排审核，确定议程与出席名单。协调会场工作，确保发言环节顺利，准备会议茶歇。撰写会议新闻稿并发布在学院官网。",
  },
  {
    num: "03",
    company: "《安全人文》专著",
    subtitle: "2022.09 — 2022.10 · 实习编委",
    desc: "参与资料搜集整理、加工修改及文字排版校对。核验引用资料真实度与可信度，校对语言内容修改错别字及语法错误。搜集相关历史文献资料并预审分类，替换不合适的资料。",
  },
  {
    num: "04",
    company: "大连汉纳西点",
    subtitle: "2022.06 — 2022.08 · 店务助理",
    desc: "负责线上线下宣传文案、活动文案、地面推广等文案撰写及媒介运营策划。帮助门店达成抖音团购每日破万单，当月营业额相应提高。参与新品命名策划、七夕节推广活动策划。协助 KOL 对接与拍摄协调。",
  },
];

const campus = [
  {
    num: "05",
    company: "中南大学中文 2104 班",
    subtitle: "2021.09 — 2022.06 · 班长",
    desc: "管理班级事务，成为师生沟通桥梁。策划组织班级活动，带领班级获特色团日称号、问渠晨读最佳班级。运用办公软件处理工作材料，完成信息汇总统计。负责学院活动会议记录并发布新闻通讯。",
  },
  {
    num: "06",
    company: "中南大学教师教学发展中心",
    subtitle: "2022.03 — 2023.03 · 学生助理",
    desc: "协助办公室老师推进日常办公事务，接待来访师生，管理功能教室。协办中南大学校内教学竞赛及湖南省教学竞赛。负责公众号宣传，编辑发布推文，查看留言并回复。",
  },
  {
    num: "07",
    company: "人文思辨 / 黔路同行支教团",
    subtitle: "2022.09 — 2023.06 · 社长",
    desc: "定期开展社团活动，积极开拓新领域与其他社团联谊。作为主办方与承办方协助其他组织开展特色活动。在各类节日举办特色活动，增强社团凝聚力。",
  },
  {
    num: "08",
    company: "中南大学中文 2302 班",
    subtitle: "2023.06 — 2025.06 · 班导师助理（副班主任）",
    desc: "协助辅导员和班导师组建新班级，召开新生见面会和班会。组建新生班委团队，民主选举产生班委。帮助新生完成教材领取、军训组织。解答新生日常疑问，提供大学学习指导。",
  },
];

function JourneyItem({
  item,
}: {
  item: { num: string; company: string; subtitle: string; desc: string; org?: string };
}) {
  return (
    <FadeIn delay={0.1} y={30}>
      <div className="flex gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12 border-b border-[#D7E2EA]/[0.12]">
        <span
          className="text-[#D7E2EA] font-black leading-none flex-shrink-0"
          style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
        >
          {item.num}
        </span>
        <div className="flex flex-col justify-center">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/40 mb-1">
            {item.subtitle}
          </span>
          <h3
            className="font-medium uppercase text-[#D7E2EA]"
            style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
          >
            {item.company}
          </h3>
          <p
            className="font-light leading-relaxed max-w-2xl opacity-60 text-[#D7E2EA] mt-2"
            style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
          >
            {item.desc}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export default function JourneySection() {
  return (
    <section
      id="journey"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10"
    >
      <h2
        className="hero-heading font-black uppercase leading-none text-center mb-4 sm:mb-6"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Journey
      </h2>

      <div className="max-w-5xl mx-auto">
        <div className="mb-4">
          <span className="text-[#D7E2EA]/50 text-sm sm:text-base uppercase tracking-[0.3em]">Internship</span>
        </div>
        {internships.map((item) => (
          <JourneyItem key={item.num} item={item} />
        ))}

        <div className="mt-16 mb-4">
          <span className="text-[#D7E2EA]/50 text-sm sm:text-base uppercase tracking-[0.3em]">Campus</span>
        </div>
        {campus.map((item) => (
          <JourneyItem key={item.num} item={item} />
        ))}
      </div>
    </section>
  );
}
