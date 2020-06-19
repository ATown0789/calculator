import React from 'react';
import './App.css';
import Buttons from './components/Buttons';

let isNum = /[0-9]/;
let hasDecimal = /\./;

class App extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			previousVal: '0',
			currentVal: '0',
			allDisplay: '0'
		}
		
		this.number = this.number.bind(this);
		this.clear = this.clear.bind(this);
		this.opperator = this.opperator.bind(this);
		this.equals = this.equals.bind(this);
		this.decimal = this.decimal.bind(this);
	}
	
	decimal(){
		if(hasDecimal.test(this.state.currentVal)){
			console.log('has decimal');
		}
		else{
			this.setState({
				currentVal: this.state.currentVal + '.',
				allDisplay: this.state.allDisplay + '.'
			})
		}
		
	}
	
	equals(){
		this.setState({
			currentVal: this.state.currentVal[1]+this.state.currentVal[3]
		})
	}
	
	number(e){
		let {currentVal: current, allDisplay: all} = this.state;
		let val = e.target.value;
		if(current.length === 1 && current === '0'){
			if(val !== '0'){
				this.setState({
					currentVal: val,
					allDisplay: all === '0' ? val : all + val
				})
			}	
		}
		else if(current.length === 1 && !isNum.test(current)){
			this.setState({
				currentVal: val,
				allDisplay: val === '0' ? all : all + val
			})
		}
		else{
			this.setState({
				currentVal: current + val,
				allDisplay: all + val
				
			})
		}
		
		
	};
	
	opperator(e){
		let opp = e.target.value
		this.setState({
			currentVal: opp,
			allDisplay: this.state.allDisplay + opp
		})
	}	
	
	
	clear(){
		this.setState({
			allDisplay: '0',
			currentVal: '0',
			previousVal: '0'
		})
		
	}
	
	
	render(){
  return (
    <div className="App">
      <h1>Hello World</h1>
	  <Buttons 
		number = {this.number}
		clear = {this.clear}
		opperator = {this.opperator}
		equals = {this.equals}
		decimal = {this.decimal}/>
	  <h3 id = 'display'>currentDisplay: {this.state.currentVal}</h3>
	  <h3>allDisplay: {this.state.allDisplay}</h3>
    </div>
	)};
}

export default App;