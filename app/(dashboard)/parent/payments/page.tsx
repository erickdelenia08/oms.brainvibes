import { Receipt, UploadCloud, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ParentPaymentsPage() {
  return (
    <div className="flex flex-col gap-section-gap max-w-4xl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="font-h2 text-h2 text-on-surface">Payments & Packages</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">View active packages and upload payment proofs.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Active Packages List */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="font-h3 text-[18px] text-on-surface">Your Packages</h3>
          
          {/* Package 1 */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 p-card-padding shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-label-md text-label-md text-on-surface">Intensive Math (8x)</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Student: Ahmad</p>
              </div>
              <Badge variant="success">Active</Badge>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '75%' }}></div>
              </div>
              <span className="font-mono text-xs whitespace-nowrap">6 / 8 Used</span>
            </div>
            <p className="font-label-sm text-[11px] text-on-surface-variant">Expires: 12 Nov 2023</p>
          </div>

          {/* Package 2 */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 p-card-padding shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-label-md text-label-md text-on-surface">Standard Physics (4x)</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Student: Ahmad</p>
              </div>
              <Badge variant="warning">Pending Payment</Badge>
            </div>
            
            <div className="p-4 bg-error-container/20 border border-error/20 rounded-lg flex flex-col md:flex-row gap-4 items-center justify-between">
              <div>
                <p className="font-label-sm text-label-sm text-error font-bold">Rp 400,000</p>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-1">Please transfer to BCA 123456789 (PT BrainVibes) and upload proof.</p>
              </div>
              <button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm flex items-center gap-2 hover:bg-primary/90 transition-colors shrink-0">
                <UploadCloud size={16} /> Upload Proof
              </button>
            </div>
          </div>
        </div>

        {/* Payment History */}
        <div className="space-y-4">
          <h3 className="font-h3 text-[18px] text-on-surface">Payment History</h3>
          
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 p-4 shadow-sm flex flex-col gap-3">
            
            <div className="flex gap-3 pb-3 border-b border-outline-variant/30">
              <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center shrink-0">
                <Receipt size={16} />
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface">INV-20231001</p>
                <p className="font-body-sm text-[11px] text-on-surface-variant">Intensive Math (8x)</p>
                <p className="font-label-sm text-[11px] text-primary mt-1">Rp 800,000</p>
              </div>
            </div>

            <div className="flex gap-3 pb-3 border-b border-outline-variant/30 opacity-70">
              <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center shrink-0">
                <Receipt size={16} />
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface">INV-20230901</p>
                <p className="font-body-sm text-[11px] text-on-surface-variant">Standard Math (4x)</p>
                <p className="font-label-sm text-[11px] text-primary mt-1">Rp 400,000</p>
              </div>
            </div>

            <button className="text-primary font-label-sm text-[12px] hover:underline flex items-center gap-1 justify-center w-full mt-2">
              <FileText size={14} /> View All Invoices
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
