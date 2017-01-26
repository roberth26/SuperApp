import * as React from 'react';
import { Provider } from 'mobx-react';
import Layer from './primitives/Layer';
import KeyValuePair from '../../data-types/KeyValuePair';

interface LightboxProps {
    children?: any;
}

export default class Lightbox extends React.Component<LightboxProps, any> {
    state = {
        items: new Array<KeyValuePair<string, React.ReactElement<any>>>()
    };

    lightboxAdd = ( id: string, el: React.ReactElement<any> ) => {
        const items = this.state.items;
        items.push( new KeyValuePair( id, el ) );
        this.setState({ items });
    }

    lightboxRemove = ( id: string ) => {
        const items = this.state.items;
        const index = items.findIndex( ( item: KeyValuePair<string, React.ReactElement<any>> ) => (
            item.key === id
        ));
        items.splice( index, 1 );
        this.setState({ items });
    }

    removeAllItems = () => {
        this.setState({
            items: new Array<KeyValuePair<string, React.ReactElement<any>>>()
        });
    }

    renderItems = () => (
        React.Children.map(
            this.state.items.map( item => item.value ),
            ( child: React.ReactElement<any>, index ) => (
                <Layer onClick={this.removeAllItems}>
                    {React.cloneElement( child, { key: index } )}
                </Layer>
            )
        )
    )

    render() {
        return (
            <div>
                <Provider
                    lightboxAdd={this.lightboxAdd}
                    lightboxRemove={this.lightboxRemove}
                >
                    <div>
                        {this.props.children}
                    </div>
                </Provider>
                {this.renderItems()}
            </div>
        );
    }
}