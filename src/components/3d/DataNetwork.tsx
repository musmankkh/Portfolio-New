import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, Float32BufferAttribute, Group } from "three";
import { generateNetwork } from "../../lib/networkGeometry";
import { DataNodes } from "./DataNodes";
import { DataParticles } from "./DataParticles";

interface DataNetworkProps {
  nodeCount: number;
  particleCount: number;
  accentColor: string;
  neutralColor: string;
  lineColor: string;
}

/** Orchestrates the node network: slow autorotation plus a gentle mouse-parallax tilt. */
export function DataNetwork({
  nodeCount,
  particleCount,
  accentColor,
  neutralColor,
  lineColor,
}: DataNetworkProps) {
  const groupRef = useRef<Group>(null);
  const { nodes, edges } = useMemo(() => generateNetwork(nodeCount), [nodeCount]);

  const lineGeometry = useMemo(() => {
    const geometry = new BufferGeometry();
    const positions: number[] = [];
    edges.forEach(([i, j]) => {
      positions.push(...nodes[i].position, ...nodes[j].position);
    });
    geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
    return geometry;
  }, [nodes, edges]);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    group.rotation.y += delta * 0.035;

    const targetTiltX = state.pointer.y * 0.12;
    const targetTiltZ = state.pointer.x * 0.12;
    group.rotation.x += (targetTiltX - group.rotation.x) * 0.02;
    group.rotation.z += (targetTiltZ - group.rotation.z) * 0.02;
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color={lineColor} transparent opacity={0.3} />
      </lineSegments>
      <DataNodes nodes={nodes} accentColor={accentColor} neutralColor={neutralColor} />
      <DataParticles nodes={nodes} edges={edges} count={particleCount} color={accentColor} />
    </group>
  );
}
