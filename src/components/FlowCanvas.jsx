import React, { useCallback } from 'react';
import { ReactFlow, Background, Controls, useReactFlow } from '@xyflow/react';
import { useFlowStore } from '../store/useFlowStore';

export default function FlowCanvas() {
  const { screenToFlowPosition } = useReactFlow();
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, addNode } = useFlowStore();

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback((event) => {
    event.preventDefault();

    const type = event.dataTransfer.getData('application/reactflow');
    if (!type) return;

    // Convert client pixels to flow coordinates
    const position = screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });

    const newNode = {
      id: `${type}-${Date.now()}`,
      type,
      position,
      data: { label: `${type.toUpperCase()} Node`, status: 'idle' },
    };

    addNode(newNode);
  }, [screenToFlowPosition, addNode]);

  return (
    <div className="flex-grow h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        colorMode="dark"
        fitView
      >
        <Background color="#00ff88" gap={20} size={1} style={{ opacity: 0.05 }} />
        <Controls className="bg-flowx-black border-flowx-border fill-flowx-accent" />
      </ReactFlow>
    </div>
  );
}