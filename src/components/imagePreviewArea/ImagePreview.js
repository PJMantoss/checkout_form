import React from 'react';
import {Information, Meta} from './WorkspaceComponents';

function ImagePreview(props) {
    return (
        <div className="ImagePreview" style={{'backgroundImage': 'url('+ props.image +')'}}>
            <div className="WorkspaceOverview">
            <Information name="Coworking Space, Holland" price={props.price} duration="1" />
            <Meta people={props.people} />
           </div>
        </div>
    )
}

export default ImagePreview;