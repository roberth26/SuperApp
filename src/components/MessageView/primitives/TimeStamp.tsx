import styled from 'styled-components';

export default styled.div`
    clear: both;
    float: ${props => props.isAuthor ? 'right' : 'left'};
    font-size: .8rem;
    margin-bottom: 5px;
    color: ${props => props.theme.color.font};
`;