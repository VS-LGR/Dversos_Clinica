/** Paleta pastel DVERSO — rotação por índice para cards e marcadores. */

export const PASTEL_SECTION_BG = [
  "bg-pastel-mint",
  "bg-pastel-aqua",
  "bg-pastel-peach",
] as const;

export const PASTEL_CARD_GRADIENTS = [
  "from-pastel-mint/50 to-pastel-aqua/40",
  "from-pastel-aqua/50 to-pastel-peach/40",
  "from-pastel-peach/50 to-pastel-mint/40",
] as const;

export const PASTEL_CARD_BG = [
  "bg-pastel-mint/40",
  "bg-pastel-aqua/40",
  "bg-pastel-peach/40",
] as const;

/** Superfícies suaves com borda harmonizada (timeline, cards). */
export const PASTEL_SURFACE_SOFT = [
  "bg-pastel-mint/35 border-pastel-mint/50",
  "bg-pastel-aqua/35 border-pastel-aqua/50",
  "bg-pastel-peach/35 border-pastel-peach/50",
] as const;

export const PASTEL_STEP_MARKER = [
  "bg-pastel-mint text-primary",
  "bg-pastel-aqua text-primary",
  "bg-pastel-peach text-primary",
] as const;

export const PASTEL_CTA_GRADIENT =
  "from-pastel-peach/60 via-pastel-mint/50 to-pastel-aqua/50";

export function pastelByIndex<T extends readonly string[]>(
  arr: T,
  index: number,
): T[number] {
  return arr[index % arr.length];
}
