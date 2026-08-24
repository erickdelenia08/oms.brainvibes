"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Calendar, 
  History, 
  Wallet, 
  UserCircle,
  LogOut
} from 'lucide-react';
import { logoutUser } from '@/app/login/actions';

export function MobileNav({ role }: { role: string }) {
  const pathname = usePathname();

  const links = [
    { name: 'Schedule', href: `/${role.toLowerCase()}/schedule`, icon: Calendar },
    { name: 'History', href: `/${role.toLowerCase()}/history`, icon: History },
    { name: 'Payments', href: `/${role.toLowerCase()}/payments`, icon: Wallet },
    { name: 'Profile', href: '/settings', icon: UserCircle },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 h-16 bg-surface border-t border-outline-variant shadow-lg rounded-t-xl pb-safe">
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
        
        return (
          <Link 
            key={link.name}
            href={link.href}
            className={`flex flex-col items-center justify-center transition-colors p-2 rounded-lg w-16 ${
              isActive 
                ? "text-primary font-bold" 
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            <Icon size={24} />
            <span className="font-label-sm text-label-sm mt-1">{link.name}</span>
          </Link>
        );
      })}
      <form action={logoutUser} className="flex flex-col items-center justify-center p-2 rounded-lg w-16">
        <button type="submit" className="flex flex-col items-center text-on-surface-variant hover:text-primary transition-colors">
          <LogOut size={24} />
          <span className="font-label-sm text-[10px] mt-1">Log Out</span>
        </button>
      </form>
    </nav>
  );
}
