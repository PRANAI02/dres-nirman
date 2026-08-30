import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import CtaBand from "@/components/cta-band";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "People",
  description:
    "The people behind DRES NIRMAN — leadership shaped by a construction legacy dating back to 1991 and modern engineering education.",
};

function Monogram({ initials }: { initials: string }) {
  return (
    <div className="relative grid aspect-[4/5] w-full place-items-center overflow-hidden border border-[var(--line)] bg-[linear-gradient(160deg,var(--panel-2),var(--ink))]">
      <div className="blueprint absolute inset-0 opacity-60" />
      <div className="absolute inset-6 border border-[var(--line)]" />
      <span className="display relative text-[clamp(3.5rem,8vw,6rem)] text-white/90">
        {initials}
      </span>
      <span className="label absolute bottom-6 text-muted-2">Portrait — placeholder</span>
    </div>
  );
}

export default function PeoplePage() {
  return (
    <>
      <PageHero
        label="People"
        title="The People Behind DRES NIRMAN"
        lede="A legacy of civil construction and execution, combined with modern engineering education and industry experience."
        image="/images/safety.jpg"
        alt="Structural steel connection against the sky"
      />

      {/* Founder */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <Monogram initials="DK" />
              <div className="mt-6">
                <p className="display text-xl text-white">Dhanushh Kumar Reddy Kadiri</p>
                <p className="label mt-3 text-accent-bright">Founder &amp; Managing Director</p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <p className="display text-[clamp(1.4rem,2.6vw,2rem)] leading-tight text-white">
                A foundation shaped by a family legacy in civil construction and
                execution, dating back to 1991.
              </p>
            </Reveal>
            {[
              "Dhanushh Kumar Reddy Kadiri founded DRES NIRMAN Pvt. Ltd. with a foundation shaped by his family's legacy in civil construction and execution dating back to 1991. Growing up around the construction industry and learning closely from his father, a civil engineer, he developed an early interest in understanding how engineering, construction and practical execution come together to create lasting structures.",
              "He holds a Bachelor's degree in Civil Engineering from Manipal Institute of Technology, Manipal, and a Master's degree in Sustainable Civil and Structural Engineering from the University of Liverpool, a Russell Group university in the United Kingdom. His academic background has given him a strong foundation in structural engineering, sustainable construction and modern engineering practices.",
              "His professional experience includes exposure to leading construction, engineering and consultancy organisations, including Larsen & Toubro (L&T), Vijay Nirman Company Pvt. Ltd., K. Sanjeeva Reddy Civil Engineers and Contractors, and RREN Consultants and Contractors Pvt. Ltd. These experiences have provided exposure to different aspects of engineering, construction, site execution and professional practice.",
              "His approach is driven by a strong interest in continuous learning, technology and real-world implementation. He particularly values collaboration, meaningful industry interactions and practical execution, with a belief that engineering is most effective when technical knowledge is translated into solutions that work in the real world.",
              "Through DRES NIRMAN, he brings together a legacy of civil construction and execution, modern engineering education and industry experience — with a vision of developing a multidisciplinary engineering firm that continuously learns, embraces new technologies and delivers solutions defined by strength, innovation and sustainability.",
            ].map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="lede">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Director */}
      <section className="border-y border-[var(--line)] bg-[var(--ink-2)]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.64fr_0.36fr] lg:gap-20">
            <div className="order-2 space-y-6 lg:order-1">
              <Reveal>
                <p className="label text-accent-bright">The Experience Behind the Legacy</p>
              </Reveal>
              <Reveal delay={70}>
                <p className="display text-[clamp(1.4rem,2.6vw,2rem)] leading-tight text-white">
                  More than three decades across civil construction,
                  infrastructure, real estate and entrepreneurship.
                </p>
              </Reveal>
              {[
                "K. Sanjeeva Reddy is a Civil Engineer, entrepreneur and Director of DRES NIRMAN Pvt. Ltd., with a professional journey spanning more than three decades. Holding a Diploma in Civil Engineering, he began his professional journey in 1990 and established K. Sanjeeva Reddy Civil Engineers & Contractors in 1991.",
                "Since then, he has built extensive practical experience in civil construction and project execution, working across projects associated with leading organisations including Bharat Petroleum Corporation Limited (BPCL), Hindustan Petroleum Corporation Limited (HPCL) and GAIL.",
                "His entrepreneurial journey extends beyond civil construction — into granite quarrying and the natural stone industry, mining and material-related businesses and real estate. He is also a Partner at Yashodha Builders & Developers, and a Director of Sri Neelakanteshwara Swamy Creations LLP.",
                "Known for his practical approach, strong work ethic, commercial understanding and hands-on knowledge, he believes in learning through experience, understanding the ground realities of a project and finding practical ways to move things forward. As a Director of DRES NIRMAN, he contributes decades of practical construction knowledge, industry perspective and entrepreneurial insight to the organisation.",
              ].map((p, i) => (
                <Reveal key={i} delay={i * 60}>
                  <p className="lede">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={90} className="order-1 lg:order-2">
              <div className="lg:sticky lg:top-28">
                <Monogram initials="SR" />
                <div className="mt-6">
                  <p className="display text-xl text-white">K. Sanjeeva Reddy</p>
                  <p className="label mt-3 text-accent-bright">Director</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          label="Team"
          title="The people who carry the work to site."
        />
        <div className="mt-14 border-t border-[var(--line)]">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 55}>
              <div className="group flex flex-wrap items-baseline justify-between gap-4 border-b border-[var(--line)] py-7 transition-colors hover:bg-[var(--panel)]">
                <div className="flex items-baseline gap-6">
                  <span className="label text-muted-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="display text-[clamp(1.15rem,2.2vw,1.6rem)] text-white">
                    {m.name}
                  </p>
                </div>
                <p className="label text-muted transition-colors group-hover:text-accent-bright">
                  {m.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </section>

      <CtaBand />
    </>
  );
}
