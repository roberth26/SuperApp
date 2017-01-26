import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../Themes/Theme';

const TimeStamp = styled.div`
    font-size: .8rem;
    margin-bottom: 5px;
    color: ${props => props.theme.color.font};
`;

interface TimeStampProps {
    children?: React.ReactChildren;
    theme?: Theme;
}

export default ( props: TimeStampProps ) => <TimeStamp {...props} />;