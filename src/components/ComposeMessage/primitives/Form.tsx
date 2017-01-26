import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../Themes/Theme';

const Form = styled.form`
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

interface FormProps {
    children?: React.ReactChildren;
    theme?: Theme;
    onSubmit?: () => void;
}

export default ( props: FormProps ) => <Form {...props} />;