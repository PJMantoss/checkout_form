import React from 'react';
import pluralize from 'pluralize'

function Information(props){
    const duration = pluralize('day',parseInt(props.duration));
    
    return (
      <div className="WorkspaceInformation">
        <div className="WorkspaceName">{props.name}</div>
        <div className="WorkspacePrice">
          <div className="Price">{props.price} EUR</div>
          <div className="Duration">/ {duration}</div>
        </div>
      </div>
    );
}

function Meta(props){
    const people = pluralize('person',props.people);
  
    return (
      <div className="WorkspaceMeta">
        <div className="Description">Entire office for a <strong>{people}</strong></div>  
        <div className="Dates"><strong>Mon, Oct 22, 2019</strong> to <strong>Fri, Oct 29, 2019</strong></div>
      </div>
    );
}


export { Information, Meta };

