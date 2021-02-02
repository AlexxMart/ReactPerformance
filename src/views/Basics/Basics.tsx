import React from 'react'

import './styles.scss'
import Hourglass from '../../assets/hourglass.jpg'

// Class to Function: https://262.ecma-international.org/6.0/#sec-makeclassconstructor

interface State {
	counter: number
}

export class Basics extends React.Component<any, State> {
	constructor(props: any) {
		super(props);
		this.state = { counter: 0 };
		this.updateCounter = this.updateCounter.bind(this);
	}

	updateCounter () {
		this.setState({ counter: this.state.counter + 1 })
	}

	render () {
		return (
			<div id="wrapper">
				<h1>Awesome and performant counter</h1>
				<CountDisplay currentCount={this.state.counter} />
				<button onClick={this.updateCounter}>Up one!</button>
				<img src={Hourglass} alt="a HEAVY hourglass" />
			</div>
		)
	}
}

class CountDisplay extends React.Component<any, State> {
	render () {
		return (
			<div>
				<p>Count: <span>{this.props.currentCount}</span></p>
			</div>
		)
	}
}