"use server";
import fs from "fs";
import path from "path";

export async function getBackgroundImages() {
  try {
    const imagesDir = path.join(process.cwd(), "public/images");
    const files = fs.readdirSync(imagesDir);
    return files
      .filter((file) => file.match(/\.(jpg|jpeg|png)$/i))
      .map((file) => ({
        src: `/images/${file}`,
        // Simple heuristic: if it's a screenshot, maybe it's dark theme, otherwise light
        theme: (file.includes("Screenshot") || file.includes("dark")) ? "dark" : "light"
      }));
  } catch (error) {
    console.error("Error reading images directory:", error);
    return [];
  }
}
