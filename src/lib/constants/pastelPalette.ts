/** Paleta pastel DVERSO — rotação por índice para seções e cards. */

export const PASTEL_SECTION_BG = [
  "bg-pastel-mint",
  "bg-pastel-aqua",
  "bg-pastel-peach",
  "bg-pastel-lime",
  "bg-pastel-coral",
] as const;

export const PASTEL_CARD_GRADIENTS = [
  "from-pastel-mint to-pastel-aqua",
  "from-pastel-aqua to-pastel-lime",
  "from-pastel-peach to-pastel-coral",
  "from-pastel-lime to-pastel-mint",
  "from-pastel-coral to-pastel-peach",
] as const;

export const PASTEL_CARD_BG = [
  "bg-pastel-mint",
  "bg-pastel-aqua",
  "bg-pastel-peach",
  "bg-pastel-lime",
  "bg-pastel-coral",
] as const;

export function pastelByIndex<T extends readonly string[]>(arr: T, index: number): T[number] {
  return arr[index % arr.length];
}
