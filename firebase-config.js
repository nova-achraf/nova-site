/* ============================================================
   AFAYNEK — إعدادات Firebase
   ------------------------------------------------------------
   1. دخل لـ https://console.firebase.google.com
   2. New project → سميه "afaynek"
   3. Build → Authentication → Get started → Email/Password → Enable
   4. Build → Firestore Database → Create database → Production mode
   5. Project settings (⚙) → Your apps → Web (</>) → سجل التطبيق
   6. كوبي القيم اللي كتبان ليك هنا تحت (بدلية هادو):

   ملاحظة: إلا خليتي "PUT_YOUR..." التطبيق غادي يقول ليك بلي مازال
   ما تربطش، وغادي يبقى يوري ليك واجهة الإعدادات.
   ============================================================ */

window.AFAYNEK_FIREBASE = {
  apiKey:            "PUT_YOUR_API_KEY",
  authDomain:        "PUT_YOUR_PROJECT.firebaseapp.com",
  projectId:         "PUT_YOUR_PROJECT_ID",
  storageBucket:     "PUT_YOUR_PROJECT.appspot.com",
  messagingSenderId: "PUT_YOUR_SENDER_ID",
  appId:             "PUT_YOUR_APP_ID"
};
