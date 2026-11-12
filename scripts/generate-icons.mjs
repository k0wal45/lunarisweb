// Generuje ikony strony z tarczy księżyca (ta sama co w public/svg/logo.svg):
//   app/icon.svg         — ikona karty w przeglądarkach (wektor)
//   app/favicon.ico      — 16/32/48 px dla starszych przeglądarek i czytników RSS
//   app/apple-icon.png   — 180 px, ekran początkowy iOS (pełne tło, iOS sam zaokrągla rogi)
//   public/icons/*.png   — 192/512 px i 512 px „maskable” dla manifestu (Android, instalacja PWA)
// Uruchom po zmianie logo: `node scripts/generate-icons.mjs` (sharp przychodzi z Next.js).

import { mkdir, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require(require.resolve("sharp", { paths: [require.resolve("next")] }));

const NIGHT = "#0E1320";
const MARE = "#1B2232";
const MOON = "#CED2DC";
const CRATER = "#7A8396";

// tarcza w polu 28×28 (jak w logo), przesunięta i przeskalowana do pola `box`
const disc = (box, pad) => {
  const s = (box - 2 * pad) / 28;
  return `<g transform="translate(${pad} ${pad}) scale(${s})">
    <circle cx="14" cy="14" r="14" fill="${MOON}"/>
    <circle cx="14" cy="14" r="13" fill="${MARE}"/>
    <path d="M14 1A13 13 0 0 1 14 27A10 13 0 0 1 14 1Z" fill="${MOON}"/>
    <g fill="${CRATER}"><circle cx="17" cy="7" r="3"/><circle cx="22" cy="14" r="2"/><circle cx="16" cy="20" r="1.25"/></g>
  </g>`;
};

const svg = (box, pad, bg) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${box} ${box}" width="${box}" height="${box}">${
    bg ? `<rect width="${box}" height="${box}" fill="${bg}"/>` : ""
  }${disc(box, pad)}</svg>`;

const png = (box, pad, bg) => sharp(Buffer.from(svg(box, pad, bg))).png().toBuffer();

// ICO z osadzonymi PNG (obsługiwane od Windows Vista i we wszystkich przeglądarkach)
function ico(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = 6 + 16 * images.length;
  const entries = images.map(({ size, data }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size % 256, 0);
    e.writeUInt8(size % 256, 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

await mkdir("public/icons", { recursive: true });

await writeFile("app/icon.svg", svg(28, 0) + "\n");
await writeFile(
  "app/favicon.ico",
  ico(await Promise.all([16, 32, 48].map(async (size) => ({ size, data: await png(size, 0) })))),
);
await writeFile("app/apple-icon.png", await png(180, 22, NIGHT));
await writeFile("public/icons/icon-192.png", await png(192, 16, NIGHT));
await writeFile("public/icons/icon-512.png", await png(512, 40, NIGHT));
// maskable: Android przycina do koła/kształtu systemu, więc tarcza mieści się w strefie 80%
await writeFile("public/icons/icon-maskable-512.png", await png(512, 104, NIGHT));

console.log("Ikony wygenerowane.");
