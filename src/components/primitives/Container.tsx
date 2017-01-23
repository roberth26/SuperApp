import styled from 'styled-components';

export default styled.div`
	max-width: 100%;
	max-width: ${props => props.theme.sizing.borderBox ?
		'100%' : `calc( 100% - ${props.theme.sizing.gutter}px )`}
	width: ${props => (
		props.theme.sizing.maxWidth
		+ props.theme.sizing.gutter
	)}px;
	padding: 0 ${props => ( props.theme.sizing.gutter / 2 )}px;
	margin: 0 auto;
`;