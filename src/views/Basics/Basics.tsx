import React from "react";
import anime from "animejs";
interface State {
	counter: number;
}

export class Basics extends React.Component<any, State> {
	constructor(props: any) {
		super(props);
		this.state = { counter: 0 };
		this.updateCounter = this.updateCounter.bind(this);
	}

	updateCounter() {
		const ARR = Array.from(new Array(30000000)); // 👀 
		const COUNT = ARR.reduce((acc) => acc + 1, 0);
		console.log(COUNT);
		this.setState({ counter: this.state.counter + 1 });
	}

	componentDidMount() {
		anime({
			targets: ".el",
			translateX: 400,
			direction: "alternate",
			loop: true,
			easing: "linear",
		});
	}

	render() {
		return (
			<div id="wrapper">
				<h1>Awesome and performant counter</h1>
				<CountDisplay currentCount={this.state.counter} />
				<button onClick={this.updateCounter}>Up one!</button>
				<div className="animation-wrapper">
					<div className="stagger-visualizer">
						<div className="cursor color-red"></div>
						<div className="dots-wrapper"></div>
					</div>
				</div>
				<div className="demo-content linear-easing-demo">
					<div className="line">
						<div className="square el"></div>
					</div>
				</div>
			</div>
		);
	}
}

class CountDisplay extends React.Component<any, State> {
	render() {
		return (
			<div>
				<p>
					Count: <span>{this.props.currentCount}</span>
				</p>
			</div>
		);
	}
}
