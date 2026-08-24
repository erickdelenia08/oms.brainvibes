import { Search, Plus, Filter, MoreVertical } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AdminStudentsPage() {
  return (
    <div className="flex flex-col gap-section-gap">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="font-h2 text-h2 text-on-surface">Students</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Manage student profiles, active packages, and assignments.</p>
        </div>
        <button className="px-4 py-2 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-secondary/90 transition-colors shadow-sm">
          <Plus size={18} /> New Student
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-sm">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={18} />
          <input 
            className="w-full pl-9 pr-4 py-2 bg-surface-container border border-outline-variant rounded-lg font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
            placeholder="Search by name, ID, or parent..." 
            type="text" 
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
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
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">Student Details</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">Parent</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">Active Package</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">Quota Rem.</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">Status</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 text-right whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="font-body-sm text-body-sm text-on-surface">
              <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors">
                <td className="py-3 px-4">
                  <div className="font-medium">Jonas Doe</div>
                  <div className="text-[12px] text-on-surface-variant">ID: ST-8492</div>
                </td>
                <td className="py-3 px-4 text-on-surface-variant">Ibu Ratna</td>
                <td className="py-3 px-4">Intensive Math (8)</td>
                <td className="py-3 px-4 font-mono font-bold text-error">2</td>
                <td className="py-3 px-4">
                  <Badge variant="success">Active</Badge>
                </td>
                <td className="py-3 px-4 text-right">
                  <button className="p-1 rounded hover:bg-outline-variant/30 text-outline hover:text-primary transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors">
                <td className="py-3 px-4">
                  <div className="font-medium">Sarah Smith</div>
                  <div className="text-[12px] text-on-surface-variant">ID: ST-8493</div>
                </td>
                <td className="py-3 px-4 text-on-surface-variant">Bapak John</td>
                <td className="py-3 px-4 text-on-surface-variant italic">None Active</td>
                <td className="py-3 px-4 font-mono font-bold text-on-surface-variant">-</td>
                <td className="py-3 px-4">
                  <Badge variant="warning">Inactive</Badge>
                </td>
                <td className="py-3 px-4 text-right">
                  <button className="p-1 rounded hover:bg-outline-variant/30 text-outline hover:text-primary transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-3 border-t border-outline-variant/30 bg-surface flex justify-between items-center text-xs text-on-surface-variant">
          <span>Showing 1-2 of 45 students</span>
        </div>
      </div>
    </div>
  );
}
