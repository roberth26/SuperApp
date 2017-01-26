import * as React from 'react';

export default class Lightboxable {
    lightboxAdd?: ( id: string, el: React.ReactElement<any> ) => void;
    lightboxRemove?: ( id: string ) => void;
}