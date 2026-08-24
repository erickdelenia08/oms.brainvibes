import { Search, Filter, MapPin, CheckCircle, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AdminAttendancePage() {
  return (
    <div className="flex flex-col gap-section-gap">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="font-h2 text-h2 text-on-surface">Attendance Log</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Review tutor check-ins, GPS locations, and Learning Logs.</p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-sm">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={18} />
          <input 
            className="w-full pl-9 pr-4 py-2 bg-surface-container border border-outline-variant rounded-lg font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
            placeholder="Search by tutor or student..." 
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
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">Session Info</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">Check-In</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">Check-Out</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">GPS Status</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 text-right whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="font-body-sm text-body-sm text-on-surface">
              <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors">
                <td className="py-3 px-4">
                  <div className="font-medium">Tutor Andi ➔ Jonas Doe</div>
                  <div className="text-[12px] text-on-surface-variant">Today, 16:00 - 17:30</div>
                </td>
                <td className="py-3 px-4">15:58 PM</td>
                <td className="py-3 px-4">17:32 PM</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-1 text-primary">
                    <MapPin size={14} />
                    <span className="text-[12px] font-medium">Valid (12m)</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-right">
                  <button className="text-primary font-label-sm text-label-sm hover:underline">View Log</button>
                </td>
              </tr>
              <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors">
                <td className="py-3 px-4">
                  <div className="font-medium">Tutor Budi ➔ Sarah Smith</div>
                  <div className="text-[12px] text-on-surface-variant">Today, 15:00 - 16:30</div>
                </td>
                <td className="py-3 px-4">15:10 PM <span className="text-error font-bold text-[10px] ml-1">LATE</span></td>
                <td className="py-3 px-4">16:35 PM</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-1 text-error">
                    <MapPin size={14} />
                    <span className="text-[12px] font-medium">Invalid (2km)</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-right">
                  <button className="text-primary font-label-sm text-label-sm hover:underline">Review</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-3 border-t border-outline-variant/30 bg-surface flex justify-between items-center text-xs text-on-surface-variant">
          <span>Showing latest attendance records</span>
        </div>
      </div>
    </div>
  );
}
