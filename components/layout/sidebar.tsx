"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Calendar,
  Users,
  GraduationCap,
  Wallet,
  History,
  FileText,
  Settings,
  Plus,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { logoutUser } from '@/app/login/actions';

export function Sidebar({ role }: { role: string }) {
  const pathname = usePathname();

  const adminLinks = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Schedule', href: '/admin/schedule', icon: Calendar },
    { name: 'Students', href: '/admin/students', icon: Users },
    { name: 'Tutors', href: '/admin/tutors', icon: GraduationCap },
    { name: 'Packages & Payments', href: '/admin/payments', icon: Wallet },
    { name: 'Attendance', href: '/admin/attendance', icon: History },
    { name: 'Audit', href: '/admin/audit', icon: FileText },
  ];

  const tutorLinks = [
    { name: 'Dashboard', href: '/tutor', icon: LayoutDashboard },
    { name: 'Schedule', href: '/tutor/schedule', icon: Calendar },
    { name: 'History', href: '/tutor/history', icon: History },
  ];

  const parentLinks = [
    { name: 'Dashboard', href: '/parent', icon: LayoutDashboard },
    { name: 'Students', href: '/parent/students', icon: Users },
    { name: 'Schedule', href: '/parent/schedule', icon: Calendar },
    { name: 'Payments', href: '/parent/payments', icon: Wallet },
  ];

  let links = tutorLinks;
  if (role === 'ADMIN') links = adminLinks;
  if (role === 'PARENT') links = parentLinks;

  return (
    <aside className="hidden md:flex flex-col w-[280px] h-screen fixed left-0 top-0 bg-primary text-on-primary p-4 shadow-md z-30">
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary font-bold">BV</div>
        <div>
          <h1 className="font-h3 text-h3 font-bold text-on-primary leading-tight">BrainVibes</h1>
          <p className="font-label-sm text-label-sm text-on-primary/70">Operations Management</p>
        </div>
      </div>
      <nav className="flex-1 flex flex-col gap-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-all ${isActive
                ? "text-secondary-fixed font-bold bg-primary-container translate-x-1"
                : "text-on-primary/80 hover:bg-primary-container hover:text-secondary-fixed-dim"
                }`}
            >
              <Icon size={20} />
              <span className="font-label-md text-label-md">{link.name}</span>
            </Link>
          );
        })}
        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-md text-on-primary/80 hover:bg-primary-container hover:text-secondary-fixed-dim transition-all mt-auto"
        >
          <Settings size={20} />
          <span className="font-label-md text-label-md">Settings</span>
        </Link>
        <form action={logoutUser} className="w-full mt-1">
          <button type="submit" className="flex w-full items-center gap-3 px-3 py-2.5 rounded-md text-on-primary/80 hover:bg-primary-container hover:text-secondary-fixed-dim transition-all">
            <LogOut size={20} />
            <span className="font-label-md text-label-md">Log Out</span>
          </button>
        </form>
      </nav>
      {role === 'ADMIN' && (
        <div className="mt-6 pt-4 border-t border-primary-container">
          <Button className="w-full py-2.5 bg-secondary-container hover:bg-secondary-container/90 text-on-secondary-container font-label-md text-label-md rounded-lg shadow-sm transition-opacity flex items-center justify-center gap-2 h-auto">
            <Plus size={18} />
            Schedule Session
          </Button>
        </div>
      )}
    </aside>
  );
}
