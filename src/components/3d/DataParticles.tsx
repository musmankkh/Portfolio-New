import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { InstancedMesh, Object3D, Vector3 } from "three";
import type { NetworkNode } from "../../lib/networkGeometry";

interface DataParticlesProps {
  nodes: NetworkNode[];
  edges: [number, number][];
  count: number;
  color: string;
}

interface Packet {
  edge: [number, number];
  progress: number;
  speed: number;
}

/** Small points that travel along the network's edges, like data packets in flight. */
export function DataParticles({ nodes, edges, count, color }: DataParticlesProps) {
  const meshRef = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);
  const pointA = useMemo(() => new Vector3(), []);
  const pointB = useMemo(() => new Vector3(), []);

  const packets = useMemo<Packet[]>(() => {
    if (edges.length === 0) return [];
    return Array.from({ length: count }, () => ({
      edge: edges[Math.floor(Math.random() * edges.length)],
      progress: Math.random(),
      speed: 0.15 + Math.random() * 0.18,
    }));
  }, [edges, count]);

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh || packets.length === 0) return;

    packets.forEach((packet, i) => {
      packet.progress += delta * packet.speed;
      if (packet.progress > 1) {
        packet.progress = 0;
        packet.edge = edges[Math.floor(Math.random() * edges.length)];
      }
      const [a, b] = packet.edge;
      pointA.set(...nodes[a].position);
      pointB.set(...nodes[b].position);
      dummy.position.lerpVectors(pointA, pointB, packet.progress);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  if (packets.length === 0) return null;

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, packets.length]}>
      <sphereGeometry args={[0.022, 8, 8]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </instancedMesh>
  );
}
