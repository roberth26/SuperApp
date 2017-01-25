import styled from 'styled-components';

export default styled.div`
    background-color: ${props => props.isAuthor
        ? props.theme.color.secondary
        : props.theme.color.primary
    };
    color: ${props => props.isAuthor
        ? props.theme.color.font
        : props.theme.color.secondaryFont
    };
    float: ${props => props.isAuthor ? 'right' : 'left'};
    clear: both;
    margin-bottom: ${props => props.theme.sizing.gutter / 2}px;
    padding: ${props => props.theme.sizing.gutter / 2}px;
    border-radius: ${props => props.isAuthor
        ? '5px 0 5px 5px'
        : '0 5px 5px 5px'
    };
    box-shadow: ${props => props.theme.shading.boxShadow};
`;