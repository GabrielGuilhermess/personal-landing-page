import {
  Database,
  FileText,
  GitBranch,
  LayoutGrid,
  Server,
  Waypoints,
  Wrench,
} from "lucide-react";

interface SkillIconProps {
  icon: string;
  size?: number;
}

const icons = {
  backend: Server,
  database: Database,
  delivery: GitBranch,
  frontend: LayoutGrid,
  integration: Waypoints,
  reporting: FileText,
} as const;

export default function SkillIcon({ icon, size = 20 }: SkillIconProps) {
  const Icon = icons[icon as keyof typeof icons] ?? Wrench;

  return (
    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-brand-500">
      <Icon aria-hidden="true" size={size} strokeWidth={1.8} />
    </span>
  );
}
