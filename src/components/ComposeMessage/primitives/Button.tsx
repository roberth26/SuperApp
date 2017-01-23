import styled from 'styled-components';

export default styled.button`
    appearance: none;
    border: 0;
    flex-basis: 100px;
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.secondaryFont};
    outline: 0;
    cursor: pointer;
`;