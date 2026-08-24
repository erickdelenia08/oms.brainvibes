import { Filter, History } from "lucide-react";

export default function TutorHistoryPage() {
  return (
    <div className="flex flex-col gap-section-gap">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="font-h2 text-h2 text-on-surface">Teaching History</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Review your completed sessions and submitted Learning Logs.</p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-end items-start md:items-center gap-4 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-sm">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <input type="month" className="px-3 py-2 border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface" defaultValue="2023-10" />
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-variant transition-colors w-full md:w-auto justify-center">
            <Filter size={16} /> Filters
          </button>
        </div>
      </div>

      {/* History List */}
      <div className="space-y-4">
        {/* Session Item */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 p-card-padding shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center justify-between hover:border-primary-container/30 transition-colors">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center shrink-0">
              <History size={20} />
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface">Mathematics - Grade 10</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Student: Jonas Doe</p>
              <div className="flex gap-2 mt-2">
                <span className="text-[12px] text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded">12 Oct 2023</span>
                <span className="text-[12px] text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded">16:00 - 17:30</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end gap-2 w-full md:w-auto">
            <span className="px-2 py-1 bg-secondary-container/20 text-on-secondary-container rounded font-mono text-[10px] font-bold self-start md:self-auto">COMPLETED</span>
            <button className="text-primary font-label-sm text-label-sm hover:underline">View Learning Log</button>
          </div>
        </div>
        
        {/* Session Item */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 p-card-padding shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center justify-between hover:border-primary-container/30 transition-colors">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center shrink-0">
              <History size={20} />
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface">Physics - Grade 11</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Student: Sarah Smith</p>
              <div className="flex gap-2 mt-2">
                <span className="text-[12px] text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded">10 Oct 2023</span>
                <span className="text-[12px] text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded">15:00 - 16:30</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end gap-2 w-full md:w-auto">
            <span className="px-2 py-1 bg-secondary-container/20 text-on-secondary-container rounded font-mono text-[10px] font-bold self-start md:self-auto">COMPLETED</span>
            <button className="text-primary font-label-sm text-label-sm hover:underline">View Learning Log</button>
          </div>
        </div>

      </div>
    </div>
  );
}
