const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

// --- CONFIGURATION ---
const PUBLIC_DIR = path.join(__dirname, 'public');
// Add the folders where your code lives (e.g., 'src', 'app', 'components')
const CODE_DIRS = ['src', 'app', 'components'].map(dir => path.join(__dirname, dir));
// File types to search and replace text in
const CODE_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.html'];
// ---------------------

// Helper function to recursively find all files in a directory
async function getFiles(dir) {
  let files = [];
  try {
    const items = await fs.readdir(dir, { withFileTypes: true });
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      if (item.isDirectory()) {
        files = files.concat(await getFiles(fullPath));
      } else {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Ignore if a configured directory doesn't exist
  }
  return files;
}

async function run() {
  console.log('🚀 Starting conversion process...\n');
  const convertedImages = [];

  // 1. Find all PNGs in the public folder
  const publicFiles = await getFiles(PUBLIC_DIR);
  const pngFiles = publicFiles.filter(file => file.toLowerCase().endsWith('.png'));

  if (pngFiles.length === 0) {
    console.log('No PNG files found in the public directory.');
    return;
  }

  // 2. Convert PNGs to WebP
  console.log(`📸 Found ${pngFiles.length} PNG(s). Converting to WebP...`);
  for (const pngPath of pngFiles) {
    const webpPath = pngPath.replace(/\.png$/i, '.webp');
    const fileName = path.basename(pngPath);
    const webpName = path.basename(webpPath);

    try {
      await sharp(pngPath).webp({ quality: 80 }).toFile(webpPath);
      
      // Store the names to update our code later
      convertedImages.push({ original: fileName, new: webpName });
      
      // Delete the original PNG (Comment out the next line if you want to keep backups)
      await fs.unlink(pngPath); 
      
      console.log(`   ✅ Converted: ${fileName} -> ${webpName}`);
    } catch (err) {
      console.error(`   ❌ Failed to convert ${fileName}:`, err.message);
    }
  }

  // 3. Update the codebase
  console.log('\n🔍 Scanning codebase to update image references...');
  let updatedFilesCount = 0;

  for (const dir of CODE_DIRS) {
    const codeFiles = await getFiles(dir);
    const validCodeFiles = codeFiles.filter(file => CODE_EXTENSIONS.includes(path.extname(file)));

    for (const filePath of validCodeFiles) {
      let content = await fs.readFile(filePath, 'utf8');
      let hasChanges = false;

      // Check for every converted image and replace it
      for (const img of convertedImages) {
        // A global regex to replace the exact filename safely
        const regex = new RegExp(img.original, 'g');
        if (regex.test(content)) {
          content = content.replace(regex, img.new);
          hasChanges = true;
        }
      }

      // If we made changes, save the file back
      if (hasChanges) {
        await fs.writeFile(filePath, content, 'utf8');
        console.log(`   📝 Updated references in: ${path.relative(__dirname, filePath)}`);
        updatedFilesCount++;
      }
    }
  }

  console.log(`\n🎉 Done! Converted ${convertedImages.length} images and updated ${updatedFilesCount} files.`);
}

run();