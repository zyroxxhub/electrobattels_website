import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Copy user uploaded images from brain to public folder
const brainDir = 'C:/Users/GRACE/.gemini/antigravity/brain/73816a34-a8fd-4774-94e0-8b2f0547ee53';
const publicDir = './public';

try {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const images = {
    'media__1779203650597.png': 'logo-wall.png',
    'media__1779203863873.jpg': 'studio-kids.jpg',
    'media__1779204312673.jpg': 'stage-crew.jpg',
    'media__1779204345559.jpg': 'camp-kids.jpg'
  };
  for (const [srcName, destName] of Object.entries(images)) {
    const srcPath = path.join(brainDir, srcName);
    const destPath = path.join(publicDir, destName);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
} catch (err) {
  // Silent fallback
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
