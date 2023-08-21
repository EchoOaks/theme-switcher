import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: border-box;
	}

	body {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 14px;
		background-color: ${({ theme }) => theme.colors.background};
		color: ${({ theme }) => theme.colors.text};

		a {
			text-decoration: none;
			color: inherit;
		}

		button {
			cursor: pointer;
		}
	}
`;
