import React from 'react'
import './styles.scss'

export const Home = () => (
	<div className="wrapper">
		<section className="slide">
			<h1>Performance on React 🚀</h1>
		</section>
		<section className="slide">
			<h1>RAIL Performance Model 🚃</h1>
			<figure>
				<img src="https://webdev.imgix.net/rail/rail.png" alt="RAILS model" />
				<figcaption>
					<a href="https://web.dev/rail/" target="_blank" rel="noreferrer noopener">RAIL Model</a>
				</figcaption>
			</figure>
		</section>
		<section className="slide">
			<h1>Time-To-Interactive ⌛</h1>
			<a href="https://web.dev/interactive/" target="_blank" rel="noreferrer noopener">TTI</a>
		</section>
		<section className="slide">
			<h1>Runtime Performance 🚅</h1>
			<a href="https://developers.google.com/web/tools/chrome-devtools/evaluate-performance" target="_blank" rel="noreferrer noopener">Evaluate performance</a>
		</section>
		<section className="slide">
			<h1>How do we measure the performance of our app? 📏</h1>
		</section>
		<section className="slide">
			<h1>Where in the devtools do we track performance? 👓</h1>
		</section>
	</div>
)