import { useCallback } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { useLocalStorage } from './hooks/useLocalStorage';

import { GlobalStyle } from './styles/global';
import { dark } from './styles/themes/dark';
import { light } from './styles/themes/light';

export function App() {
	const [theme, setTheme] = useLocalStorage<DefaultTheme>('theme', light);

	const toggleTheme = useCallback(() => {
		setTheme(theme => theme.title === 'light' ? dark : light);
	}, [setTheme]);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header toggleTheme={toggleTheme} />
		</ThemeProvider>
	);
}
