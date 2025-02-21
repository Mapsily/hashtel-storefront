import admin from "firebase-admin";
import serviceAccount from "../../firebase.json";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    storageBucket:"hashtel-ecom.appspot.com"
  });
}

export default admin;