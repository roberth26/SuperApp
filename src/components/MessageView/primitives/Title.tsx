import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../Themes/Theme';

const Title = styled.h2`
    font-size: 28px;
    margin-bottom: 15px;
`;

interface TitleProps {
    children?: React.ReactChildren;
    theme?: Theme;
}

export default ( props: TitleProps ) => <Title {...props} />;