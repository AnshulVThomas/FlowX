export default function Sidebar() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const nodeTypes = [
    { type: 'bash', label: '🐚 Bash Script' },
    { type: 'python', label: '🐍 Python Runner' },
    { type: 'cron', label: '⏰ Cron Trigger' }
  ];

  return (
    <aside className="w-64 border-r border-flowx-border bg-flowx-glass backdrop-blur-xl p-6 z-10">
      <h2 className="text-flowx-accent font-black tracking-tighter text-2xl mb-8">flowX</h2>
      <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-4 font-bold">Automation Nodes</p>
      
      <div className="space-y-3">
        {nodeTypes.map((node) => (
          <div
            key={node.type}
            draggable
            onDragStart={(e) => onDragStart(e, node.type)}
            className="p-4 rounded-lg bg-white/5 border border-flowx-border cursor-grab 
                       hover:border-flowx-accent/50 hover:bg-white/10 transition-all active:cursor-grabbing"
          >
            <span className="text-sm font-medium text-gray-200">{node.label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}