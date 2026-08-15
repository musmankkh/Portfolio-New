export interface NetworkNode {
  position: [number, number, number];
  accent: boolean;
}

export interface NetworkData {
  nodes: NetworkNode[];
  edges: [number, number][];
}

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/** Deterministic-per-seed scatter of nodes, each linked to its 2 nearest neighbors. */
export function generateNetwork(count: number, seed = 42): NetworkData {
  const rand = seededRandom(seed);
  const nodes: NetworkNode[] = Array.from({ length: count }, () => ({
    position: [(rand() - 0.5) * 6.6, (rand() - 0.5) * 3.8, (rand() - 0.5) * 3],
    accent: rand() > 0.82,
  }));

  const edges: [number, number][] = [];
  const seen = new Set<string>();

  nodes.forEach((node, i) => {
    const distances = nodes
      .map((other, j) => ({
        j,
        d:
          i === j
            ? Infinity
            : Math.hypot(
                node.position[0] - other.position[0],
                node.position[1] - other.position[1],
                node.position[2] - other.position[2],
              ),
      }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 2);

    for (const { j } of distances) {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!seen.has(key)) {
        seen.add(key);
        edges.push([i, j]);
      }
    }
  });

  return { nodes, edges };
}
