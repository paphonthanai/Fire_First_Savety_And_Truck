// Firebase โหลดแบบ lazy เฉพาะตอนส่งฟอร์ม — ไม่เพิ่มขนาด bundle หน้าแรก
const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

export const firebaseReady = Boolean(config.apiKey && config.projectId)

let dbPromise
function getDb() {
  dbPromise ||= Promise.all([import('firebase/app'), import('firebase/firestore')]).then(
    ([{ initializeApp, getApps }, { getFirestore }]) => getFirestore(getApps()[0] || initializeApp(config)),
  )
  return dbPromise
}

/** บันทึกคำขอติดต่อ/ใบเสนอราคาลง Firestore collection `inquiries` */
export async function submitInquiry({ name, org, phone, message, lang }) {
  if (!firebaseReady) throw new Error('firebase-not-configured')
  const db = await getDb()
  const { collection, addDoc, serverTimestamp } = await import('firebase/firestore')
  await addDoc(collection(db, 'inquiries'), {
    name: name.trim(),
    org: org.trim(),
    phone: phone.trim(),
    message: message.trim(),
    lang,
    createdAt: serverTimestamp(),
  })
}
