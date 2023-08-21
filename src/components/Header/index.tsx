import { shade } from 'polished';
import ReactSwitch from 'react-switch';
import { useTheme } from 'styled-components';
import { HeaderProps } from './types';

import { Container } from './styles';

export function Header({ toggleTheme }: HeaderProps) {
	const { title, colors } = useTheme();

	return (
		<Container>
			React Theme Switcher

			<ReactSwitch
				checked={title === 'dark'}
				onChange={toggleTheme}
				checkedIcon={false}
				uncheckedIcon={false}
				height={10}
				width={40}
				handleDiameter={20}
				onColor={colors.secondary}
				offColor={shade(0.15, colors.primary)}
			/>
		</Container>
	);
}
