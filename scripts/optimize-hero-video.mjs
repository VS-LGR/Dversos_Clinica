#!/usr/bin/env node
/**
 * Gera hero-bg.webm (1080p, VP9, sem áudio) e hero-poster.webp a partir do vídeo fonte.
 * Requer ffmpeg no PATH.
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const SOURCE_CANDIDATES = [
  join(root, "scripts", "assets", "8556939-uhd_4096_2160_25fps.webm"),
  join(root, "8556939-uhd_4096_2160_25fps.webm"),
];

const source = SOURCE_CANDIDATES.find((p) => existsSync(p));
if (!source) {
  console.error(
    "Arquivo fonte não encontrado. Coloque o vídeo em:\n",
    SOURCE_CANDIDATES.join("\n"),
  );
  process.exit(1);
}

const outVideo = join(root, "public", "video", "hero-bg.webm");
const outPoster = join(root, "public", "images", "hero-poster.webp");

mkdirSync(dirname(outVideo), { recursive: true });
mkdirSync(dirname(outPoster), { recursive: true });

function run(cmd, args) {
  const result = spawnSync(cmd, args, { stdio: "inherit", shell: false });
  if (result.status !== 0) {
    console.error(`Falha: ${cmd}`);
    process.exit(result.status ?? 1);
  }
}

console.log("Fonte:", source);
console.log("Gerando vídeo otimizado…");

run("ffmpeg", [
  "-y",
  "-i",
  source,
  "-an",
  "-vf",
  "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2",
  "-c:v",
  "libvpx-vp9",
  "-b:v",
  "800k",
  "-maxrate",
  "1200k",
  "-bufsize",
  "2400k",
  "-row-mt",
  "1",
  "-cpu-used",
  "4",
  "-deadline",
  "good",
  "-r",
  "25",
  "-pix_fmt",
  "yuv420p",
  outVideo,
]);

console.log("Gerando poster WebP…");

run("ffmpeg", [
  "-y",
  "-i",
  source,
  "-vf",
  "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2",
  "-frames:v",
  "1",
  "-c:v",
  "libwebp",
  "-quality",
  "82",
  outPoster,
]);

const videoMb = (statSync(outVideo).size / 1024 / 1024).toFixed(2);
const posterKb = (statSync(outPoster).size / 1024).toFixed(0);

console.log(`\nConcluído:`);
console.log(`  ${outVideo} (${videoMb} MB)`);
console.log(`  ${outPoster} (${posterKb} KB)`);

if (parseFloat(videoMb) > 8) {
  console.warn("\nAviso: vídeo acima de 8 MB. Considere reduzir -b:v no script.");
}
