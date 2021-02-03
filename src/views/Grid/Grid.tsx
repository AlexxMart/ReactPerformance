import React, { useState } from "react";

const INITIAL_STATE = {
	tiles: Array.from(new Array(25)).map((v, i) => ({
		name: i,
		active: false,
	})),
};

const Tile: React.FC<any> = ({ onClick, index, active, children }) => {
	function handleClick() {
		onClick(index);
	}

	// console.log(`Square ${index} rendered`)
	return (
		<div
			className={active ? "square selected" : "square"}
			onClick={handleClick}
		>
			{children}
		</div>
	);
};

export const Grid = () => {
	const [state, setState] = useState(INITIAL_STATE);

	let handleClick = (index: number) => {
		setState((state) => {
			let tiles = [...state.tiles];
			tiles[index].active = true;
			return {
				...state,
				tiles,
			};
		});
	};

	return (
		<div id="grid-wrapper">
			{state.tiles.map((tile, index) => (
				<Tile
					key={tile.name}
					index={index}
					onClick={handleClick}
					active={tile.active}
				>
					<span>{tile.name}</span>
				</Tile>
			))}
		</div>
	);
};
