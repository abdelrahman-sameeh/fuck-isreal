const chars = {
  ا: "ا",
  ب: "ٮ",
  ت: "ٮ",
  ث: "ٮ",
  ج: "ح",
  ح: "ح",
  خ: "ح",
  د: "د",
  ذ: "د",
  ر: "ر",
  ز: "ر",
  س: "سـ,ـ",
  ش: "سـ,ـ",
  ص: "ص",
  ض: "ص",
  ط: "ط",
  ظ: "ط",
  ع: "ع",
  غ: "ع",
  ف: "ٯ",
  ق: "ٯ",
  ك: "ک",
  ل: "ل",
  م: "م",
  ن: "ں",
  ه: "ه",
  ة: "ه",
  و: "و",
  ؤ: "و",
  ي: "ـںـ",
  ى: "ى",
  ء: "ـںـ",
};

const changeText = (str) => {
  const keys = Object.keys(chars);
  return str
    .split("")
    .map((char) => (keys.includes(char) ? (char = chars[char]) : char))
    .join("");
};

const inputElm = document.getElementsByTagName("input")[0];
const resultElm = document.querySelector(".result");

inputElm.addEventListener("input", (e) => {
  const result = changeText(e.target.value);
  resultElm.innerText = result;
});
