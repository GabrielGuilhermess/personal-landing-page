import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Badge, Card, SectionHeading } from "@/design-system/components";
import { cn } from "@/design-system/lib/utils";

const delayClasses = ["", "animate-delay-100", "animate-delay-200", "animate-delay-300", "animate-delay-400"];

const statusBadgeVariant = {
  live: "brand",
  development: "warning",
  planned: "default",
} as const;

const statusLabel = {
  live: "Ao vivo",
  development: "Em desenvolvimento",
  planned: "Planejado",
} as const;

export default function ProjectsSection() {
  return (
    <section id="projetos" className="section-container py-20 md:py-28">
      <div className="space-y-10">
        <SectionHeading
          align="center"
          label="Projetos"
          title="Projeto publicado"
          subtitle="Dev Toolbox publicado e disponível para navegação imediata."
        />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6">
          {PROJECTS.map((project, index) => (
            <a
              key={project.id}
              href={project.deployUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir projeto ${project.title}`}
              className={cn(
                "group block rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400",
                delayClasses[index] ?? "",
              )}
            >
              <Card
                padding="none"
                className="h-full overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-brand-500"
              >
                <div className="relative aspect-video overflow-hidden rounded-t-3xl">
                  <Image
                    src={project.imageUrl}
                    alt={`Preview do projeto ${project.title}`}
                    fill
                    sizes="(min-width: 1280px) 896px, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="flex h-full flex-col gap-4 p-6">
                  <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                  <p className="line-clamp-2 text-sm leading-7 text-[var(--text-secondary)]">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="default" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3">
                    <Badge variant={statusBadgeVariant[project.status]} size="sm">
                      {statusLabel[project.status]}
                    </Badge>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-500">
                      Abrir projeto
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
