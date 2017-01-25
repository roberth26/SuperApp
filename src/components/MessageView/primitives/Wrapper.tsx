import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignRight ? 'flex-end' : 'flex-start'};
`;

interface WrapperProps {
    alignRight: boolean;
    children?: React.ReactChildren;
}

export default ( props: WrapperProps ) => <Wrapper {...props} />;