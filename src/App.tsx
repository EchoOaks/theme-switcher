import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { light } from './styles/themes/light';

export function App() {
	return (
		<ThemeProvider theme={light}>
			<GlobalStyle />
			<Header />
		</ThemeProvider>
	);
}
