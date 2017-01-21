import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Store from '../../stores/Store';
import Wrapper from './primitives/Wrapper';

interface ScrollPaneProps {
    store?: Store;
    children?: any;
}

@inject( 'store' )
@observer
class ScrollPane extends React.Component<ScrollPaneProps, any> {
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
        const { children, store } = this.props;
        return (
            <Wrapper
                innerRef={this.setScrollPane}
                theme={store.activeTheme}
            >
                {children}
            </Wrapper>
        );
    }
}

export default ScrollPane;