import React from 'react';

import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls =[
  { label: 'Salad' , type: 'salad' },
  { label: 'Bacon' , type: 'bacon' },
  { label: 'Cheese' , type: 'cheese' },
  { label: 'Meat' , type: 'meat' }
]

const buildControls = (props) => (
  <div className="BuildControls">
    {controls.map(ctrl => (
      <BuildControl 
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        deducted={() => props.ingredientRemoved(ctrl.type)} 
        disabled={props.disabled[ctrl.type]}
         />
    ))}
    <button 
      className="OrderButton"
      disabled={!props.purchasabled}>PLACE ORDER</button>
  </div>
);

export default buildControls;