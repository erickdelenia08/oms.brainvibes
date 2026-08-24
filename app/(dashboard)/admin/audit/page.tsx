import { Search, Filter, History } from "lucide-react";

export default function AdminAuditPage() {
  return (
    <div className="flex flex-col gap-section-gap">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="font-h2 text-h2 text-on-surface">System Audit Log</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Review all system changes and actions.</p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-sm">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={18} />
          <input 
            className="w-full pl-9 pr-4 py-2 bg-surface-container border border-outline-variant rounded-lg font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
            placeholder="Search action or entity..." 
            type="text" 
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <input type="date" className="px-3 py-2 border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface" />
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-variant transition-colors w-full md:w-auto justify-center">
            <Filter size={16} /> Filters
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-variant/30">
              <tr>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">Timestamp</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">Actor</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">Action</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">Entity / ID</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">Details</th>
              </tr>
            </thead>
            <tbody className="font-body-sm text-body-sm text-on-surface">
              <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors">
                <td className="py-3 px-4 text-on-surface-variant">2026-08-24 15:45</td>
                <td className="py-3 px-4 font-medium">Admin Andi</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-secondary-container/20 text-on-secondary-container rounded font-mono text-[10px] font-bold">UPDATE</span>
                </td>
                <td className="py-3 px-4">Session #102</td>
                <td className="py-3 px-4">
                  <div className="text-[12px]">
                    Changed time from <span className="line-through text-on-surface-variant">16:00</span> to <span className="font-bold text-primary">17:00</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors">
                <td className="py-3 px-4 text-on-surface-variant">2026-08-24 14:20</td>
                <td className="py-3 px-4 font-medium">Admin Andi</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-tertiary-container/20 text-tertiary-container rounded font-mono text-[10px] font-bold">CREATE</span>
                </td>
                <td className="py-3 px-4">Package #405</td>
                <td className="py-3 px-4">
                  <div className="text-[12px]">
                    Activated package for Student Jonas Doe (+8 Quota)
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-3 border-t border-outline-variant/30 bg-surface flex justify-between items-center text-xs text-on-surface-variant">
          <span>Showing latest audit events</span>
        </div>
      </div>
    </div>
  );
}
