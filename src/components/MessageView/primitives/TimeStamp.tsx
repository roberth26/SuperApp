import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../themes/Theme';

const TimeStamp = styled.div`
    clear: both;
    float: ${props => props.isAuthor ? 'right' : 'left'};
    font-size: .8rem;
    margin-bottom: 5px;
    color: ${props => props.theme.color.font};
`;

interface TimeStampProps {
    children?: any;
    isAuthor: boolean;
    theme?: Theme;
}

export default ( props: TimeStampProps ) => <TimeStamp {...props} />;