import { styled } from 'styled-components';

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px;
	height: 60px;
	background-color: ${({ theme }) => theme.colors.primary};
	color: #fff;
`;
