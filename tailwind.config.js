// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit",
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        // Note that we do not extend Tailwind color palette.
        // If you wish to do so, you can add `extend` parameter
        // Refer to Tailwind color configurations here: https://tailwindcss.com/docs/customizing-colors
        colors: {
            transparent: "transparent",
            black: "var(--black)",
            white: "var(--white)",
            primary: {
                0: "var(--primary-0)",
                25: "var(--primary-25)",
                50: "var(--primary-50)",
                75: "var(--primary-75)",
                100: "var(--primary-100)",
            },
            secondary: {
                0: "var(--secondary-0)",
                25: "var(--secondary-25)",
                50: "var(--secondary-50)",
                75: "var(--secondary-75)",
                100: "var(--secondary-100)",
            },
            info: {
                0: "var(--info-0)",
                25: "var(--info-25)",
                50: "var(--info-50)",
                75: "var(--info-75)",
                100: "var(--info-100)",
            },
            success: {
                0: "var(--success-0)",
                25: "var(--success-25)",
                50: "var(--success-50)",
                75: "var(--success-75)",
                100: "var(--success-100)",
            },
            warning: {
                0: "var(--warning-0)",
                25: "var(--warning-25)",
                50: "var(--warning-50)",
                75: "var(--warning-75)",
                100: "var(--warning-100)",
            },
            danger: {
                0: "var(--danger-0)",
                25: "var(--danger-25)",
                50: "var(--danger-50)",
                75: "var(--danger-75)",
                100: "var(--danger-100)",
            },
            light: {
                0: "var(--light-0)",
                25: "var(--light-25)",
                50: "var(--light-50)",
                75: "var(--light-75)",
                100: "var(--light-100)",
            },
            dark: {
                0: "var(--dark-0)",
                25: "var(--dark-25)",
                50: "var(--dark-50)",
                75: "var(--dark-75)",
                100: "var(--dark-100)",
            },
            visited: "var(--visited)",
            baseBg: "var(--body-background)",
        },
        fontFamily: {
            sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        },
        extend: {
            spacing: {
                "sidebar-expand": "var(--sidebar-width-expand)",
                "sidebar-collapse": "var(--sidebar-width-collapse)",
                header: "var(--header-height)",
            },
            minWidth: {
                mobile: "300px",
            },
            minHeight: {
                80: "20rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
