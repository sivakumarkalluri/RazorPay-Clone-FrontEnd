/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      backgroundImage: {
        business_banking: "url('images/feature-section-2BG.svg')",
      auto_pay_bg: "url('images/upi-autopay-hoverbg.svg')",
      corporate_cards: "url('images/instant-settlement-bghover.svg')",
      features_section_bg: "url('images/core-features-sectionBg.svg')"},
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        darkBlue: "#181c2e",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },},
  },
  plugins: [],
}
