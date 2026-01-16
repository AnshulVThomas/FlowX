import { ReactFlowProvider } from '@xyflow/react';
import Sidebar from './components/Sidebar';
import FlowCanvas from './components/FlowCanvas';
import './index.css';

export default function App() {
  return (
    <div className="flex h-screen w-screen bg-flowx-black overflow-hidden font-sans">
      <ReactFlowProvider>
        <Sidebar />
        <FlowCanvas />
      </ReactFlowProvider>
    </div>
  );
}