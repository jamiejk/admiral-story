import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.join(process.cwd(), 'src/assets/raw_photos');
const outputDirInfo = path.join(process.cwd(), 'public/photos');

if (!fs.existsSync(outputDirInfo)) {
    fs.mkdirSync(outputDirInfo, { recursive: true });
}

async function processImages() {
    const files = fs.readdirSync(inputDir);

    for (const file of files) {
        if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.png')) {
            const inputPath = path.join(inputDir, file);
            // Create output filename: replace extension with .webp, and maybe sanitize name
            const ext = path.extname(file);
            const baseName = path.basename(file, ext).replace(/[^a-zA-Z0-9_\-]/g, '_');
            const outputPath = path.join(outputDirInfo, `${baseName}.webp`);

            console.log(`Processing ${file} -> ${baseName}.webp`);

            try {
                await sharp(inputPath)
                    .resize(1600, null, {
                        withoutEnlargement: true,
                        fit: 'inside'
                    })
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                console.log(`  Done: ${baseName}.webp`);
            } catch (err) {
                console.error(`  Error processing ${file}:`, err);
            }
        }
    }
}

processImages()
    .then(() => console.log('All images processed successfully.'))
    .catch(err => console.error('Script failed:', err));
