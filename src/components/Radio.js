import React from 'react';

export const Radio = props => {
    return (
    <div className="form-check">
       {/* <input className = "checkmark" key={props.id} onChange={props.handleCheckChildElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value} */}
       <input className="form-check-input" key={props.id} onChange={props.handleCheckChildElement}  type="radio" checked={props.isChecked} value={props.value} name="flexRadioDefault" id="flexRadioDefault2" />
       <label className="form-check-label" htmlFor="flexRadioDefault2">
           {props.value}
        </label>
     </div>
     
      
    )
}

export default Radio;