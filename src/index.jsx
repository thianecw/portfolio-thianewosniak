import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";
import { darkTheme } from "./styles/themes/standard.js";
import { ThemeProvider } from "styled-components";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>,
);
