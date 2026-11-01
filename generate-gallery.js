const fs = require("fs");
const path = require("path");

const galleryPath = path.join(__dirname, "images", "Gallery");

const images = fs.readdirSync(galleryPath)
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));

fs.writeFileSync(
    path.join(__dirname, "gallery-images.json"),
    JSON.stringify(images, null, 2)
);

console.log(`Generated gallery with ${images.length} images.`);