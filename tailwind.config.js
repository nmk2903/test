/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: ({ colors }) => ({
                blueBtn: "#2f5acf",
                blueText: "#0939b2",
                yellowText: "#f9f86c",
                grayText: "#d9d9d9",
                blackText: "#242424",
                pinkBg: "#FAEEDC",
            }),
            backgroundImage: {
                star: "url('../../assets/images/icons/star.svg')",
            },
            minWidth: {
                0: "0px",
                xs: "160px",
            },

            maxWidth: ({ theme, breakpoints }) => ({
                xxxxxs: "1.75rem",
                xs: "8.75rem",
                s: "10rem",
                ss: "15rem",
                x: "16.25rem",
            }),
            width: ({ theme }) => ({
                bigSize: "30000px",
                big: "3723px",
            }),
            screens: {
                ml: "960px",
            },
        },
    },
    plugins: [],
};
