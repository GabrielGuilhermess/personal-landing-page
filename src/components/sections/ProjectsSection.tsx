import { PROJECTS, type ProjectShowcase } from "@/data/projects";
import { Container, ExternalLink, MediaPreview } from "@/design-system/components";

function ProjectLinks({ project }: { project: ProjectShowcase }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px]">
      <ExternalLink href={project.deployUrl}>Abrir projeto</ExternalLink>
      <ExternalLink href={project.githubUrl}>GitHub</ExternalLink>
    </div>
  );
}

export default function ProjectsSection() {
  const [devToolbox, economiaBrasil] = PROJECTS;

  return (
    <section
      id="projetos"
      aria-labelledby="projetos-title"
      className="border-t border-[var(--divider)] py-[72px] md:py-[88px]"
    >
      <Container>
        <header className="mb-8 md:mb-10">
          <h2
            id="projetos-title"
            className="text-[30px] font-semibold leading-[1.1] tracking-[-0.035em] text-[var(--text)] md:text-[34px]"
          >
            Projetos
          </h2>
        </header>

        <div>
          <article aria-labelledby={`${devToolbox.id}-title`}>
            <MediaPreview
              src={devToolbox.imageUrl}
              alt={devToolbox.imageAlt}
              aspectRatio="8 / 5"
              objectPosition="center top"
              sizes="(min-width: 1280px) 1180px, calc(100vw - 40px)"
              className="bg-[var(--surface)]"
            />

            <div className="mt-5 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-8">
              <div>
                <h3
                  id={`${devToolbox.id}-title`}
                  className="text-[25px] font-semibold tracking-[-0.03em] text-[var(--text)] md:text-[28px]"
                >
                  {devToolbox.title}
                </h3>
                <p className="mt-2 max-w-[620px] text-[15px] leading-[1.65] text-[var(--muted)]">
                  {devToolbox.description}
                </p>
              </div>
              <ProjectLinks project={devToolbox} />
            </div>
          </article>

          <article
            aria-labelledby={`${economiaBrasil.id}-title`}
            className="mt-10 grid gap-7 border-t border-[var(--divider)] pt-10 md:mt-12 md:gap-9 md:pt-12 min-[1100px]:grid-cols-[0.7fr_1.3fr] min-[1100px]:items-end min-[1100px]:gap-12"
          >
            <div className="min-[1100px]:pb-4">
              <h3
                id={`${economiaBrasil.id}-title`}
                className="text-[25px] font-semibold tracking-[-0.03em] text-[var(--text)] md:text-[28px]"
              >
                {economiaBrasil.title}
              </h3>
              <p className="mt-3 max-w-[440px] text-[15px] leading-[1.65] text-[var(--muted)]">
                {economiaBrasil.description}
              </p>
              <div className="mt-5">
                <ProjectLinks project={economiaBrasil} />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(180px,0.46fr)] sm:items-end md:gap-4">
              <MediaPreview
                src={economiaBrasil.imageUrl}
                alt={economiaBrasil.imageAlt}
                aspectRatio="8 / 5"
                objectPosition="center top"
                sizes="(min-width: 1100px) 620px, (min-width: 640px) 66vw, calc(100vw - 40px)"
                className="bg-[var(--surface)]"
              />
              <MediaPreview
                src={economiaBrasil.imageUrl}
                alt=""
                aspectRatio="4 / 5"
                objectPosition="82% top"
                sizes="(min-width: 1100px) 260px, 30vw"
                className="hidden bg-[var(--surface)] sm:block"
              />
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
