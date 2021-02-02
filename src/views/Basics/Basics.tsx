import React from 'react'

interface State {
	counter: number
}

// export const Basics: React.FC = () => <h1>Basics</h1>

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
			<div>
				<h1>Awesome and performant counter</h1>
				<p>Count: <span>{this.state.counter}</span></p>

				<button onClick={this.updateCounter}>Up one!</button>
			</div>
		)
	}
}