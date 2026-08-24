import { QuotaLedger } from "@/components/shared/quota-ledger";

export default function AdminPaymentsPage() {
  return (
    <div className="flex flex-col gap-section-gap">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="font-h2 text-h2 text-on-surface">Payments & Packages</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Manage active packages, verify manual payments, and audit quotas.</p>
        </div>
      </div>

      <QuotaLedger />
      
    </div>
  );
}
