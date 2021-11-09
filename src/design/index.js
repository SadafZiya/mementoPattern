import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../design/theme";

// styled
export const styledTheme = {
    ...theme
};

export default ({ children }) => (
    <ThemeProvider theme={styledTheme}>{children}</ThemeProvider>
);
