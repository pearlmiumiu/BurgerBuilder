import React from 'react';
import classes from './Button.css'

//wrap ajx use ()
const button=(props)=>(

	<button 
		className={[classes.Button, classes[props.btnType]].join(' ')} //need to be string, like classes.button
		onClick={props.clicked}>{props.children}</button>

)

export default button
