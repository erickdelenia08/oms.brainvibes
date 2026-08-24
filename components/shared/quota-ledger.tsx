import { Filter, Plus, MoreVertical, ShoppingCart, PenTool, CheckCircle, WifiSync } from "lucide-react";

export function QuotaLedger() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-gutter w-full">
      {/* Package Ledger Table */}
      <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-sm flex flex-col h-[600px] overflow-hidden">

        <div className="p-card-padding border-b border-outline-variant/30 flex justify-between items-center bg-surface-bright/50">
          <div>
            <h3 className="font-h3 text-h3 text-on-surface">Active Packages</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Manage student session quotas and payment status.</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-variant transition-colors flex items-center justify-center">
              <Filter size={20} />
            </button>
            <button className="px-4 py-2 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-secondary/90 transition-colors shadow-sm">
              <Plus size={18} /> New Package
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-variant/30 sticky top-0 z-10 backdrop-blur-sm">
              <tr>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">Student</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">Package Type</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">Quota (Total/Used/Rem)</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">Payment</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 whitespace-nowrap">Expiry</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold border-b border-outline-variant/30 text-right whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="font-body-sm text-body-sm text-on-surface">
              {/* Row 1 */}
              <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors group">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-md font-bold">JD</div>
                    <div>
                      <div className="font-medium">Jonas Doe</div>
                      <div className="text-[12px] text-on-surface-variant">ID: ST-8492</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-tertiary-container text-on-tertiary-container font-label-sm text-[11px] font-bold tracking-wide uppercase">Intensive Math (8)</span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-surface-variant rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '75%' }}></div>
                    </div>
                    <span className="font-mono text-xs">8 / 6 / <span className="font-bold text-error">2</span></span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center gap-1 text-primary"><CheckCircle size={14} /> Paid</span>
                </td>
                <td className="py-3 px-4 text-on-surface-variant">Nov 15, 2023</td>
                <td className="py-3 px-4 text-right">
                  <button className="p-1 rounded hover:bg-outline-variant/30 text-outline group-hover:text-primary transition-colors">
                    <MoreVertical size={20} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quota Audit Ledger (Right Column) */}
      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-sm flex flex-col h-[600px] overflow-hidden">

        <div className="p-card-padding border-b border-outline-variant/30 bg-surface-bright/50 flex justify-between items-center">
          <div>
            <h3 className="font-h3 text-h3 text-on-surface">Quota Audit</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Real-time ledger events.</p>
          </div>
          <button className="text-primary hover:text-primary-container transition-colors">
            <WifiSync size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">

          {/* Event Item: Addition */}
          <div className="flex gap-3 relative before:absolute before:left-[15px] before:top-8 before:bottom-[-24px] before:w-px before:bg-outline-variant/40">
            <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant/50 flex items-center justify-center shrink-0 z-10">
              <ShoppingCart size={16} className="text-primary" />
            </div>
            <div className="flex-1 bg-surface rounded-lg p-3 border border-outline-variant/20 shadow-sm">
              <div className="flex justify-between items-start mb-1">
                <span className="font-label-sm text-label-sm font-semibold text-on-surface">Package Purchased</span>
                <span className="text-[10px] text-on-surface-variant">10:42 AM</span>
              </div>
              <p className="font-body-sm text-[13px] text-on-surface-variant">Jonas Doe (ST-8492)</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="px-2 py-0.5 bg-primary/10 text-primary rounded font-mono text-[11px] font-bold">+8 Sessions</span>
                <span className="text-[11px] text-on-surface-variant">Intensive Math</span>
              </div>
            </div>
          </div>

          {/* Event Item: Deduction */}
          <div className="flex gap-3 relative">
            <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant/50 flex items-center justify-center shrink-0 z-10">
              <PenTool size={16} className="text-secondary" />
            </div>
            <div className="flex-1 bg-surface rounded-lg p-3 border border-outline-variant/20 shadow-sm">
              <div className="flex justify-between items-start mb-1">
                <span className="font-label-sm text-label-sm font-semibold text-on-surface">Session Deducted</span>
                <span className="text-[10px] text-on-surface-variant">09:15 AM</span>
              </div>
              <p className="font-body-sm text-[13px] text-on-surface-variant">Sarah Smith (ST-8493)</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="px-2 py-0.5 bg-surface-variant text-on-surface-variant rounded font-mono text-[11px] font-bold">-1 Session</span>
                <span className="text-[11px] text-on-surface-variant">Completed with Tutor A.</span>
              </div>
            </div>
          </div>

        </div>

        <div className="p-3 border-t border-outline-variant/30 bg-surface text-center">
          <button className="text-[12px] font-medium text-primary hover:underline">View Full Ledger</button>
        </div>
      </div>
    </div>
  );
}
