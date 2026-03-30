import { MapPin } from "lucide-react";
import { PERSONAL } from "@/data/personal";
import { SectionHeading } from "@/design-system/components";

export default function AboutSection() {
  const paragraphs = PERSONAL.bio.split("\n\n");

  return (
    <section id="sobre" className="section-container py-20 md:py-28">
      <div className="space-y-10">
        <SectionHeading align="center" label="Sobre" title="Integrações, APIs e manutenção evolutiva" />
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="mx-auto max-w-3xl space-y-4 text-left text-base leading-8 text-[var(--text-secondary)]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-3 text-sm text-[var(--text-secondary)]">
              <MapPin className="h-4 w-4 text-brand-500" />
              <span>{PERSONAL.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
