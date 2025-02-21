"use server";

import admin from "@/lib/firebase-admin";

export const addInquiry = async (inquiry: any) => {
  try {
    const db = admin.firestore();
    const docRef = db.collection("inquiries").doc();
    const serverTimestamp = admin.firestore.FieldValue.serverTimestamp();
    await docRef.set({ ...inquiry, createdAt: serverTimestamp });
    return { status: 200, message: "Inquiry Added" };
  } catch (error) {
    return { status: 500, message: "Server Error" };
  }
};

export const addOEM = async (oem: any) => {
  try {
    const db = admin.firestore();
    const docRef = db.collection("oems").doc();
    const serverTimestamp = admin.firestore.FieldValue.serverTimestamp();
    await docRef.set({ ...oem, createdAt: serverTimestamp });
    return { status: 200, message: "OEM Added" };
  } catch (error) {
    return { status: 500, message: "Server Error" };
  }
};
