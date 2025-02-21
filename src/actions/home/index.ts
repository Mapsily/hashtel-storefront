"use server";

import admin from "@/lib/firebase-admin";

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".ogg"];

export const getBanners = async () => {
  try {
    const storage = admin.storage().bucket();
    const [files] = await storage.getFiles({ prefix: "banners/" });

    const fileList = await Promise.all(
      files.map(async (file) => {
        const url = await file.getSignedUrl({
          action: "read",
          expires: Date.now() + 1000 * 60 * 60 * 24, // 24-hour expiry
        });

        const ext = file.name.split(".").pop()?.toLowerCase() || "";
        const type = VIDEO_EXTENSIONS.includes(`.${ext}`) ? "video" : "image";

        return { url: url[0], type };
      })
    );

    return fileList;
  } catch (error) {
    console.error("Error fetching banner files:", error);
    return [];
  }
};
