// Firebase sozlamalari (README: Firebase konsolidan oling)
const firebaseConfig = {
  apiKey: "SIZNING_API_KEY",
  authDomain: "SIZNING-LOYIHA.firebaseapp.com",
  databaseURL: "https://SIZNING-LOYIHA-default-rtdb.firebaseio.com",
  projectId: "SIZNING-LOYIHA",
  appId: "SIZNING_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Mahalliy sana YYYY-MM-DD (UTC emas)
function localDate(d = new Date()) {
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
// Firebase kalitida taqiqlangan belgilarni almashtirish
function safeKey(s) { return s.replace(/[.$#\[\]\/]/g, '_'); }
