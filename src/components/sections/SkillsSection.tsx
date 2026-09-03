import { COMPETENCIES } from "@/data/skills";
import { Container, DisclosureItem } from "@/design-system/components";

export default function SkillsSection() {
  return (
    <section
      id="competencias"
      aria-labelledby="competencias-title"
      className="border-t border-[var(--divider)] py-[72px] md:py-[88px]"
    >
      <Container>
        <header className="mb-8 md:mb-10">
          <h2
            id="competencias-title"
            className="text-[30px] font-semibold leading-[1.1] tracking-[-0.035em] text-[var(--text)] md:text-[34px]"
          >
            Competências
          </h2>
        </header>

        <div>
          {COMPETENCIES.map((group, index) => (
            <DisclosureItem
              key={group.title}
              index={String(index + 1).padStart(2, "0")}
              title={group.title}
              summary={group.terms.join(" · ")}
              className={
                index === COMPETENCIES.length - 1
                  ? "border-b-0"
                  : "border-b border-[var(--divider-item)]"
              }
              summaryClassName="py-[18px] transition-colors duration-[var(--motion-fast)] hover:bg-[var(--surface)] md:py-5"
              summaryContentClassName="grid grid-cols-[34px_minmax(0,1fr)] items-baseline gap-x-3 gap-y-2 sm:grid-cols-[42px_190px_minmax(0,1fr)] sm:gap-x-5 min-[1100px]:grid-cols-[52px_230px_minmax(0,1fr)] min-[1100px]:gap-x-6"
              summaryValueClassName="col-start-2 leading-[1.6] sm:col-start-3"
              contentClassName="pb-5 pl-[46px] pr-2 sm:pl-[272px] min-[1100px]:pl-[330px]"
            >
              <p className="max-w-[720px] text-[14px] leading-[1.7] text-[var(--muted)]">
                {group.detail}
              </p>
            </DisclosureItem>
          ))}
        </div>
      </Container>
    </section>
  );
}
