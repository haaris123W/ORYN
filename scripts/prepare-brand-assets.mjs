import sharp from "sharp";

const source = process.argv[2];

if (!source) {
  throw new Error("Usage: node scripts/prepare-brand-assets.mjs <logo-source.png>");
}

const { data, info } = await sharp(source)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const rgba = Buffer.alloc(info.width * info.height * 4);
let solidRed = 0;
let solidGreen = 0;
let solidBlue = 0;
let solidPixels = 0;
let left = info.width;
let top = info.height;
let right = 0;
let bottom = 0;

for (let index = 0; index < data.length; index += 3) {
  const red = data[index];
  const green = data[index + 1];
  const blue = data[index + 2];

  if (Math.max(red, green, blue) > 150) {
    solidRed += red;
    solidGreen += green;
    solidBlue += blue;
    solidPixels += 1;
  }
}

const logoColor = [solidRed, solidGreen, solidBlue].map((channel) =>
  Math.round(channel / solidPixels),
);
const logoStrength = Math.max(...logoColor);

for (let y = 0; y < info.height; y += 1) {
  for (let x = 0; x < info.width; x += 1) {
    const sourceIndex = (y * info.width + x) * 3;
    const targetIndex = (y * info.width + x) * 4;
    const red = data[sourceIndex];
    const green = data[sourceIndex + 1];
    const blue = data[sourceIndex + 2];
    const strength = Math.max(red, green, blue);
    const alpha = strength < 8
      ? 0
      : Math.max(0, Math.min(255, Math.round((strength / logoStrength) * 255)));

    rgba[targetIndex] = logoColor[0];
    rgba[targetIndex + 1] = logoColor[1];
    rgba[targetIndex + 2] = logoColor[2];
    rgba[targetIndex + 3] = alpha;

    if (alpha > 10) {
      left = Math.min(left, x);
      top = Math.min(top, y);
      right = Math.max(right, x);
      bottom = Math.max(bottom, y);
    }
  }
}

const base = sharp(rgba, {
  raw: { width: info.width, height: info.height, channels: 4 },
});
const padding = 5;
const logo = await base
  .clone()
  .extract({
    left: left - padding,
    top: top - padding,
    width: right - left + 1 + padding * 2,
    height: bottom - top + 1 + padding * 2,
  })
  .png({ compressionLevel: 9, palette: true })
  .toBuffer();

await sharp(logo).toFile("public/oryn-systems-logo.png");

const iconWidth = 232;
const icon = await base
  .clone()
  .extract({
    left: left - padding,
    top: top - padding,
    width: iconWidth,
    height: bottom - top + 1 + padding * 2,
  })
  .png({ compressionLevel: 9, palette: true })
  .toBuffer();

await sharp(icon).resize(32, 32, { fit: "contain" }).png().toFile("public/favicon-32x32.png");
await sharp(icon).resize(180, 180, { fit: "contain" }).png().toFile("public/apple-touch-icon.png");
await sharp(icon).resize(192, 192, { fit: "contain" }).png().toFile("public/icon-192.png");
await sharp(icon).resize(512, 512, { fit: "contain" }).png().toFile("public/icon-512.png");

const ogLogo = await sharp(logo).resize({ width: 760, withoutEnlargement: true }).png().toBuffer();
await sharp({
  create: { width: 1200, height: 630, channels: 4, background: "#09090b" },
})
  .composite([{ input: ogLogo, gravity: "centre" }])
  .jpeg({ quality: 88, chromaSubsampling: "4:4:4" })
  .toFile("public/oryn-systems-og.jpg");
