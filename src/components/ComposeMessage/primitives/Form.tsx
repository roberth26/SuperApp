import styled from 'styled-components';

export default styled.form`
    display: flex;
    flex-shrink: 0;
    flex-basis: 50px;
    flex-basis: ${props => (
        props.theme.sizing.borderBox
        ? 70
        : 70 - ( props.theme.sizing.gutter / 2 )
    )}px;
    border-top: ${props => `
        ${props.theme.sizing.gutter / 2}px
        solid
        ${props.theme.color.secondary}
    `};
`;