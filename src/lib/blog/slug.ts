/**
 * Gera slug URL a partir do título (PT-BR, sem acentos).
 */
export function slugifyTitle(title: string): string {
  return (
    title
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 120) || "post"
  );
}
