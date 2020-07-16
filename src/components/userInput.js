import React from "react";
import { Component } from 'react';

// import "../styles/searchbar.css";

class UserInput extends Component {

	render() {
		return (
			<div>
				<p>Number of paragraphs:</p>
				<input
					type="number"
					className="input"
					value={this.props.paraNum}
					onChange={this.props.updateParaNum}
				/>
			</div>
		);
	}
};

export default UserInput;
