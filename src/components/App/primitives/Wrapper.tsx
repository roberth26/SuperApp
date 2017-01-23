import styled from 'styled-components';

export default styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: ${props => props.theme.color.background};
`;