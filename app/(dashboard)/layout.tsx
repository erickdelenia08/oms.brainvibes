import { Sidebar } from '@/components/layout/sidebar';
import { MobileNav } from '@/components/layout/mobile-nav';
import { auth } from '@/auth';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const role = session?.user?.role || 'TUTOR';

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col md:flex-row">
      {/* Mobile Top Navigation */}
      <nav className="md:hidden bg-primary text-on-primary flex justify-between items-center w-full px-container-margin py-base-unit h-16 shadow-sm sticky top-0 z-40">
        <div className="font-h3 text-h3 font-bold text-on-primary">BrainVibes OMS</div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-surface-dim border border-on-primary/30 flex items-center justify-center text-primary font-bold text-sm">
            {role.charAt(0)}
          </div>
        </div>
      </nav>

      {/* Sidebar Navigation */}
      <Sidebar role={role} />

      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-[280px] p-container-margin md:p-8 overflow-x-hidden pb-24 md:pb-8">
        {children}
      </main>

      {/* Bottom Navigation (Mobile Only) */}
      <MobileNav role={role} />
    </div>
  );
}
