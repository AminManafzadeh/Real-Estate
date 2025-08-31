export default function englishToPersianNumber(num) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishFormatted = num.toLocaleString(); // adds commas
  return englishFormatted.replace(/\d/g, (d) => persianDigits[d]);
}
