import FadeIn from "../components/FadeIn";

const contacts = [
  {
    num: "01",
    name: "Phone",
    desc: "+86 15524835520",
    href: "tel:15524835520",
  },
  {
    num: "02",
    name: "Email",
    desc: "Isaacgao@foxmail.com",
    href: "mailto:Isaacgao@foxmail.com",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-0 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase leading-none text-center mb-4 sm:mb-6"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Contact
      </h2>

      <div className="max-w-5xl mx-auto">
        {contacts.map((contact, i) => (
          <FadeIn key={i} delay={i * 0.15} y={30}>
            <div className="flex gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)]">
              <span
                className="text-[#0C0C0C] font-black leading-none flex-shrink-0"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {contact.num}
              </span>
              <div className="flex flex-col justify-center">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {contact.name}
                </h3>
                <a
                  href={contact.href}
                  className="font-light leading-relaxed max-w-2xl opacity-60 text-[#0C0C0C] hover:opacity-100 transition-opacity mt-1"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {contact.desc}
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
