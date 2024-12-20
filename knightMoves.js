function knightMoves(start, target) {
	const knightMoves = [
		[1, 2],
		[1, -2],
		[-1, 2],
		[-1, -2],
		[2, 1],
		[2, -1],
		[-2, 1],
		[-2, -1],
	];

	let visited = new Map();
	let queue = [[start, 0]];

	while (queue.length) {
		let [current, steps] = queue.shift();

		if (current[0] === target[0] && current[1] === target[1]) {
			let path = [current];

			while (current !== start) {
				current = visited.get(current.toString());
				path.unshift(current);
			}

			console.log(`You made it in ${steps} moves! Here's your path:`);
			for (const move of path) {
				console.log(move);
			}
			return;
		}

		for (const move of knightMoves) {
			const nextX = current[0] + move[0];
			const nextY = current[1] + move[1];

			if (nextX >= 0 && nextX < 8 && nextY >= 0 && nextY < 8) {
				const nextPosition = [nextX, nextY];
				const nextPositionString = nextPosition.toString();

				if (!visited.has(nextPositionString)) {
					visited.set(nextPositionString, current);
					queue.push([nextPosition, steps + 1]);
				}
			}
		}
	}

	console.log("No path found.");
}
