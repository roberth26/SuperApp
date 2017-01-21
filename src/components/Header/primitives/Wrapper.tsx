import styled from 'styled-components';

export default styled.header`
	background: ${props => props.theme.color.primary.toCss()};
	padding: ${props => props.theme.sizing.gutter}px 0;
	margin-bottom: ${props => props.theme.sizing.gutter};
`;