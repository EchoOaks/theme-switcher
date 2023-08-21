import { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';
import { dark } from './styles/themes/dark';
import { light } from './styles/themes/light';

export function App() {
	const [theme, setTheme] = useState(light);

	const toggleTheme = useCallback(() => {
		setTheme(theme => theme.title === 'light' ? dark : light);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header toggleTheme={toggleTheme} />
		</ThemeProvider>
	);
}
