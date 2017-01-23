import * as React from 'react';
import Wrapper from './primitives/Wrapper';

interface ScrollPaneProps {
    children?: any;
}

export default class ScrollPane extends React.Component<ScrollPaneProps, any> {
    scrollPane: Element;

    setScrollPane = ( scrollPane ) => {
        this.scrollPane = scrollPane;
    }

    componentDidMount() {
        this.scrollPane.scrollTop = this.scrollPane.scrollHeight;
    }

    componentDidUpdate() {
        this.scrollPane.scrollTop = this.scrollPane.scrollHeight;
    }

    render() {
        const { children } = this.props;
        return (
            <Wrapper innerRef={this.setScrollPane}>
                {children}
            </Wrapper>
        );
    }
}