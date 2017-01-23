import styled from 'styled-components';

export default styled.a`
	color: ${props => props.theme.color.secondaryFont};
	opacity: ${props => props.isActive ? 1 : .65};
	text-decoration: none;
`;