"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SKILLS, SKILL_CATEGORIES } from "@/data/skills";
import { Card, SectionHeading, SkillIcon } from "@/design-system/components";
import { staggerContainer, staggerItem } from "@/design-system/tokens/animations";
import type { SkillCategory } from "@/types";
import { cn } from "@/design-system/lib/utils";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">("all");

  const filteredSkills = SKILLS.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="section-container py-20 md:py-28">
      <div className="space-y-10">
        <SectionHeading
          align="center"
          label="Tecnologias"
          title="Stack e ferramentas"
          subtitle="Tecnologias recorrentes em projetos com integrações, APIs, dados e entrega contínua."
        />

        <div className="flex flex-wrap justify-center gap-2">
          {Object.entries(SKILL_CATEGORIES).map(([key, label]) => {
            const isActive = activeCategory === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveCategory(key as SkillCategory | "all")}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-brand-500/10 font-medium text-brand-500"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {filteredSkills.map((skill) => (
            <motion.div key={`${activeCategory}-${skill.name}`} variants={staggerItem}>
              <Card padding="sm" className="h-full">
                <div className="flex h-full items-center gap-3">
                  <SkillIcon icon={skill.icon} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-[var(--text-primary)]">{skill.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-[var(--text-tertiary)]">
                      {SKILL_CATEGORIES[skill.category]}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
