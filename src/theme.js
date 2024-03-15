export const theme = {
    color: {
        white: "#FFFFFF",
        slateGray: "#6E7E91",
        black: "#000000",
        iron: "rgba(209, 213, 218, 0.3",
        scienceBlue: "#0366D6",
        mineshaft: "#252525",
        whiteLilac: "#FBFBFE",
        blumine: "#1F5189",
        dodgerBlue: "#2188FF",
        shipCove: "#6D93BE",
        anakiwa: "#8CC2FF",
        tropicalBlue: "#CDE0F7",
        porcelain: "#F2F3F4",
        mercury: "#e5e5e5",
        doveGray: "#6D6D6D",
        tundora: "#414141",
        mineShaft: "#252525",
        mineShaftLighter: "#313131",
    },
};

export const common = {
    breakpoints: {
        mobileMax: 767,
        tabletVerticalMax: 991,
        tabletHorizontalMax: 1199,
    },
    boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
    borderRadiusSmall: "4px",
};


export const themeLight = {
    ...common,
    colors: {
        themeSwitch: {
            background: theme.color.mercury,
            icon: theme.color.white,
        },
    },
};