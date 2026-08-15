import { useEffect, useMemo, useRef } from "react";
import { Color, InstancedMesh, Object3D } from "three";
import type { NetworkNode } from "../../lib/networkGeometry";

interface DataNodesProps {
  nodes: NetworkNode[];
  accentColor: string;
  neutralColor: string;
}

export function DataNodes({ nodes, accentColor, neutralColor }: DataNodesProps) {
  const meshRef = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const accent = new Color(accentColor);
    const neutral = new Color(neutralColor);

    nodes.forEach((node, i) => {
      dummy.position.set(...node.position);
      dummy.scale.setScalar(node.accent ? 1.5 : 1);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      mesh.setColorAt(i, node.accent ? accent : neutral);
    });

    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [nodes, dummy, accentColor, neutralColor]);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, nodes.length]}>
      <icosahedronGeometry args={[0.045, 1]} />
      <meshBasicMaterial toneMapped={false} transparent opacity={0.85} />
    </instancedMesh>
  );
}
