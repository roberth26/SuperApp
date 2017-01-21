import * as React from 'react';
import styled from 'styled-components';

export default styled.div`
    background-color: ${props => props.theme.color.background.toCss()};
    height: 360px;
    position: relative;
    display: flex;
    flex-direction: column;
`;