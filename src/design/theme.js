const defaultTheme = {
    direction: "rtl",
    radius: "5px",
    label: {
        fontFamily: "IRANSans ",
        fontFamilyEn: "Roboto,sans-serif",
        textAlign: "right"
    },
    spacing: {
        contentHeight: window.innerHeight-120,
        contentTop: "60px",
        headerHeight: "50px",
        breadCrumbHeight: "55px",
        footerHeight: "30px",
    },
    colors: {
        primary: "#00c",
        aqua: "#00ffff",
        BlueColor: "#00368c",
        BlueColorHover: "#154fad",
        secondary: "#FECB00",
        success: "#36ab59",
        successHover: "#54bb6d",
        warning: "#FECB00",
        warningHover: "#fecd23",
        warning2: "#ff9d1c",
        warning2Hover: "#ffbc2e",
        alert:  "#fe2834",
        alertHover:  "#ff4a48",
        lightRed:  "#ff7070",
        info:  "#afedfe",
        white:  "#fff",
        pink:  "#e6919196",
        eradCancel:"#ffffc8",
        eradFinal:"#e4ffe2",
        eradEmdad:"#ffe7eb",
        gray: {
            100: "#111",
            200: "#222",
            300: "#333",
            500:"#555",
            800: "#888",
            1000: "#aaa",
            1200: "#e2e1e1",
            1400: "#eee",
        },
        kendo :{
            blue:"#daecf4",
        }
    },
    breakpoints: {
        xs: "0px",
        sm: "600px",
        md: "960px",
        lg: "1280px",
        xl: "1920px"
    },
    totalHeight : window.innerHeight-70

};

export default defaultTheme;
