import styled from 'styled-components';

export default styled.nav`
	color: ${props => props.theme.color.secondaryFont.toCss()};
	display: flex;
	justify-content: space-between;
`;