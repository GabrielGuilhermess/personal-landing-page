"use client";

import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { PERSONAL, SOCIAL_LINKS } from "@/data/personal";
import GitHubMark from "@/design-system/components/GitHubMark";
import { SectionHeading } from "@/design-system/components";

const socialIcons = {
  github: GitHubMark,
  linkedin: Linkedin,
  mail: Mail,
} as const;

export default function ContactSection() {
  const githubLink = SOCIAL_LINKS.find((link) => link.platform === "GitHub");
  const linkedInLink = SOCIAL_LINKS.find((link) => link.platform === "LinkedIn");
  const emailHref = `mailto:${PERSONAL.email}`;

  const directContacts = [
    {
      title: "E-mail",
      value: PERSONAL.email,
      href: emailHref,
      icon: "mail",
      description: "Canal direto para contato profissional.",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/gabrielguilhermess",
      href: linkedInLink?.url ?? "#",
      icon: "linkedin",
      description: "Perfil profissional e histórico de atuação.",
    },
    {
      title: "GitHub",
      value: "github.com/GabrielGuilhermess",
      href: githubLink?.url ?? "#",
      icon: "github",
      description: "Código e projetos publicados.",
    },
  ] as const;

  return (
    <section id="contato" className="section-container py-20 md:py-28">
      <div className="space-y-10">
        <SectionHeading
          align="center"
          label="Contato"
          title="Contato direto"
          subtitle="E-mail, LinkedIn e GitHub para contato profissional."
        />

        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          {directContacts.map((contact) => {
            const Icon = socialIcons[contact.icon as keyof typeof socialIcons];

            return (
              <a
                key={contact.title}
                href={contact.href}
                target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={contact.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 transition-colors hover:border-brand-500"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[var(--text-tertiary)] transition-colors group-hover:text-brand-500" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display text-lg font-semibold text-[var(--text-primary)]">{contact.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{contact.description}</p>
                    <p className="break-all text-sm font-medium text-[var(--text-primary)]">{contact.value}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
