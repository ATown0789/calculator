import React from 'react';

class Buttons extends React.Component{
	
	
	render(){
		return(
			<div>
				<button 
				id = 'equals'
				onClick = {this.props.equals}>
					=
				</button>
				<button 
					id = 'zero' 
					value = {0}
					onClick = {this.props.number}>
						0
				</button>
				<button 
					id = 'one'
					value = {1}
					onClick = {this.props.number}>
						1
				</button>
				<button 
					id = 'two' 
					value = {2}
					onClick = {this.props.number}>
						2
				</button>
				<button 
					id = 'three' 
					value = {3}
					onClick = {this.props.number}>
						3
				</button>
				<button 
					id = 'four'
					 value = {4}
					 onClick = {this.props.number}>
						4
				</button>
				<button 
					id = 'five'
					 value = {5}
					 onClick = {this.props.number}>
						5
				</button>
				<button 
					id = 'six'
					 value = {6}
					 onClick = {this.props.number}>
						6
				</button>
				<button 
					id = 'seven'
					 value = {7}
					 onClick = {this.props.number}>
						7
				</button>
				<button 
					id = 'eight'
					value = {8}
					onClick = {this.props.number}>
						8
				</button>
				<button 
					id = 'nine'
					 value = {9}
					 onClick = {this.props.number}>
						9
				</button>
				<button 
					id = 'add'
					onClick = {this.props.opperator}
					value = '+'>
						+
				</button>
				<button id = 'subtract'
					onClick = {this.props.opperator}
					value = '-'>
						-
				</button>
				<button id = 'multiply'
					onClick = {this.props.opperator}
					value = '*'>
						x
				</button>
				<button id = 'divide'
					onClick = {this.props.opperator}
					value = '/'>
						/
				</button>
				<button id = 'decimal'
					onClick = {this.props.decimal}>
						.
				</button>
				<button 
					id = 'clear'
					onClick = {this.props.clear}>
						clr
				</button>
			</div>
		
		)
	}
}

export default Buttons;