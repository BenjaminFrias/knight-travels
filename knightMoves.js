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

		// Target found
		if (current[0] === target[0] && current[1] === target[1]) {
			// Reconstruct path
			let path = [current];

			while (current !== start) {
				current = visited.get(current.toString());
				path.unshift(current);
			}

			// Output result
			console.log(`You made it in ${steps} moves! Here's your path:`);
			for (const move of path) {
				console.log(move);
			}
			return;
		}

		// Visit all possible next positions from current position
		for (const move of knightMoves) {
			const nextX = current[0] + move[0];
			const nextY = current[1] + move[1];

			// Check chessboard constraints
			if (nextX >= 0 && nextX < 8 && nextY >= 0 && nextY < 8) {
				const nextPosition = [nextX, nextY];
				const nextPositionString = nextPosition.toString();

				// Add unvisited positions to the queue and the map with its predecesor
				if (!visited.has(nextPositionString)) {
					visited.set(nextPositionString, current);
					queue.push([nextPosition, steps + 1]);
				}
			}
		}
	}

	console.log("No path found.");
}
