import React from 'react';
import { Component } from 'react';
import logo from './IBMTrailingBehind.svg';
import './App.css';

import UserInput from './components/userInput';

import { words } from './words.js';

class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			paraNum: 0,
		};

		this.updateParaNum = this.updateParaNum.bind(this);
		this.isNumValid = this.isNumValid.bind(this);
		this.generate = this.generate.bind(this);
	}

	updateParaNum(e){
		this.setState({ paraNum: e.target.value });
	}

	isNumValid(checkNum){
		if (checkNum <= 0 || checkNum > 10){
			return false;
		}
		return true;
	}

	generate(){
		this.setState({
			text: this.ipsum(this.state.paraNum, words)
		});
	}

	ipsum(numParagraphs, phrases){
		var text='';
		var sentences = 5;

		for (var i=0; i<numParagraphs; i++){
			var paragraph ='';

			for (var y=0; y<sentences; y++){
				var sentence = '';
				//random number of words in sentence
				//10-15 words per second
				var numWords= Math.floor(Math.random()*6 + 5);

				for (var k=0; k<numWords;k++){
					var word='';

					var wordId = Math.floor(Math.random() * phrases.length);
					word = phrases[wordId];

					sentence += word;
					//add space after words, unless the last word
					if (k !== numWords-1 ){
						sentence += ' ';
					}
				}

				//add period
				sentence += '. ';
				//capitalize
				sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

				paragraph += sentence;
			}

			paragraph = '<p>' + paragraph + '</p>';
			text += paragraph;
		}
		return text;
	}

	render() {
		return (
			<div className="App">
			<div className="flexy">
				<div className='core'>
					<h1>COVID-19 Ipsum</h1>
					<UserInput
						updateParaNum={this.updateParaNum}
						paraNum={this.state.paraNum}
					/>
					<button
						disabled={!this.isNumValid(this.state.paraNum)}
						onClick={this.generate}
					>
						Generate
					</button>
					{/* <div >{this.state.text}</div> */}
				</div>
				<img src={logo} className="logo" alt="logo" />
			</div>
			<div className="content"
				dangerouslySetInnerHTML={{ __html: this.state.text }}
			></div>
		</div>
		);
	}
}

export default App;
