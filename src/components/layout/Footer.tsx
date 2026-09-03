import { PERSONAL } from "@/data/personal";
import { Container } from "@/design-system/components";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-8 pt-2 md:pb-10 md:pt-4">
      <Container className="flex flex-col gap-2 text-[13px] text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>{PERSONAL.name}</p>
        <p>© {currentYear}</p>
      </Container>
    </footer>
  );
}
