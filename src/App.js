import React from 'react';
import './App.css';
import Buttons from './components/Buttons';

let isNum = /[0-9]$/;
let hasDecimal = /\./;

class App extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			previousVal: '0',
			currentVal: '0',
			allDisplay: '0',
			evaluated: false
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
		let expression = this.state.allDisplay;
		let regex = /x/g;
		let answer = eval(expression.replace(regex,'*'));
		this.setState({
			currentVal: answer,
			allDisplay: this.state.allDisplay + " = " + answer,
			evaluated: true
		})
      
    }
	
	
	number(e){
		let {evaluated, currentVal: current, allDisplay: all} = this.state;
		let val = e.target.value;
		if(evaluated){
			this.clear();
		}
		
		else if(current.length === 1 && current === '0'){
			if(val !== '0' && val !== '-'){
				this.setState({
					currentVal: val,
					allDisplay: all === '0' ? val : all + val
				})
			}
		}
		else if(current.length === 1 && !isNum.test(current)){
				if(current === '-'){
					this.setState({
						currentVal: current + val,
						allDisplay: all + val
					})
				}
				else{
					this.setState({
						currentVal: val,
						allDisplay: all === '0' ? val : val === '-' ? val : all + val
					});
				}
		}
		else{
			this.setState({
				currentVal: current + val,
				allDisplay: all + val
				
			})
		}
		
		console.log(this.state);
		
	};
	
	opperator(e){
		let {currentVal: current, allDisplay: all} = this.state;
		let opp = e.target.value
		if(current.length === 1 && !isNum.test(current)){
			if(opp === '-'){
				this.setState({
					currentVal: current + opp,
					allDisplay: all.length === 1 ? current + opp : all.slice(0, -1) + current + opp
				})
			}
			else{
				this.setState({
					currentVal: opp,
					allDisplay: all.length === 1 ? opp : all.slice(0, -1) + opp
				})
			}
		}
		else{
			this.setState({
					currentVal: opp,
					allDisplay: all.length === 1 ? opp : all + opp
				})
		}
	}	
	
	
	clear(){
		this.setState({
			allDisplay: '0',
			currentVal: '0',
			previousVal: '0',
			evaluated: false
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