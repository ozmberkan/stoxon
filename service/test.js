import speakeasy from "speakeasy";

const secret = "JA5FIR2CFQSWWKRRIEYEE5KNMMWCKNDPLBBEIJD3NA2EUS2QIBSA"; // ← senin veritabanındaki secret
const token = "339734"; // ← Google Authenticator’dan aldığın kod

const now = new Date();
console.log("Şu anki sunucu saati:", now.toISOString());

const isValid = speakeasy.totp.verify({
  secret,
  encoding: "base32",
  token,
  window: 2,
});

console.log("Kod geçerli mi?", isValid);
