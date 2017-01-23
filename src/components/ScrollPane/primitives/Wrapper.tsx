import styled from 'styled-components';

export default styled.div`
    flex-grow: 1;
    overflow-y: auto;
    padding: ${props => props.theme.sizing.gutter / 2}px;
    position: relative;
    box-shadow: inset ${props => props.theme.shading.boxShadow};
`;