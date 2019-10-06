import React from 'react';
import WorkspaceComponents from './WorkspaceComponents';

function ImagePreview(props) {
    return (
        <div className="ImagePreview" style={{'backgroundImage': 'url('+ props.image +')'}}>
            <div className="WorkspaceOverview">
            <WorkspaceComponents 
               name="Coworking Space, Holland" 
               price={props.price} duration="1" 
               people={props.people} />
        </div>
        </div>
    )
}

export default ImagePreview;