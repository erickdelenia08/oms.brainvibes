"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, User, CheckCircle, AlertTriangle, Calendar } from 'lucide-react';
import { logoutUser } from '@/app/login/actions';

interface TopHeaderProps {
  title: string;
  subtitle: string;
  role: string;
}

export function TopHeader({ title, subtitle, role }: TopHeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Dummy notifications for UI
  const notifications = [
    { id: 1, title: "Reschedule Approved", message: "Your session with Budi is moved to Tomorrow 16:00.", time: "10m ago", icon: Calendar, color: "text-primary", bg: "bg-primary-container/50" },
    { id: 2, title: "Substitute Assigned", message: "You have been assigned to cover Math G10.", time: "1h ago", icon: CheckCircle, color: "text-success", bg: "bg-success/10" },
    { id: 3, title: "Pending Log", message: "Please submit learning log for Physics G11.", time: "2h ago", icon: AlertTriangle, color: "text-warning", bg: "bg-warning/10" }
  ];

  return (
    <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-section-gap hidden md:flex">
      <div>
        <h2 className="font-h2 text-h2 text-on-background">{title}</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">{subtitle}</p>
      </div>
      
      <div className="flex items-center gap-6 bg-surface p-2 rounded-xl border border-outline-variant/30 shadow-sm relative">
        <div className="px-4 py-2 bg-primary-container text-on-primary-container font-label-md text-label-md rounded-lg capitalize">
          {role.toLowerCase()}
        </div>
        <div className="w-px h-6 bg-outline-variant/50"></div>
        
        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="text-on-surface-variant hover:text-primary transition-colors relative p-1"
          >
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full ring-2 ring-surface"></span>
          </button>
          
          {showNotifications && (
            <div className="absolute top-full right-0 mt-2 w-80 bg-surface border border-outline-variant rounded-xl shadow-lg overflow-hidden z-50 animate-in slide-in-from-top-2">
              <div className="p-3 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-lowest">
                <span className="font-label-md text-sm font-semibold">Notifications</span>
                <button className="text-xs text-primary hover:underline">Mark all as read</button>
              </div>
              <div className="max-h-[300px] overflow-y-auto">
                {notifications.map(n => (
                  <div key={n.id} className="p-3 border-b border-outline-variant/20 hover:bg-surface-container-lowest transition-colors flex gap-3 cursor-pointer">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${n.bg} ${n.color}`}>
                      <n.icon size={16} />
                    </div>
                    <div>
                      <h4 className="font-label-sm text-xs text-on-surface font-semibold">{n.title}</h4>
                      <p className="text-[11px] text-on-surface-variant leading-tight mt-0.5">{n.message}</p>
                      <span className="text-[10px] text-outline mt-1 block">{n.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile Avatar */}
        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => setShowProfile(!showProfile)}
            className="w-10 h-10 rounded-full bg-surface-dim border border-outline-variant flex items-center justify-center text-primary font-bold hover:ring-2 ring-primary/50 transition-all"
          >
            {role.charAt(0)}
          </button>
          
          {showProfile && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-surface border border-outline-variant rounded-xl shadow-lg overflow-hidden z-50 animate-in slide-in-from-top-2">
              <div className="p-3 border-b border-outline-variant/30 bg-surface-container-lowest">
                <span className="font-label-md text-sm font-semibold text-on-surface block truncate">{role} User</span>
                <span className="text-xs text-on-surface-variant">Manage account</span>
              </div>
              <div className="p-1">
                <form action={logoutUser}>
                  <button type="submit" className="w-full text-left px-3 py-2 text-sm text-error hover:bg-error/10 rounded-md transition-colors font-medium">
                    Log Out
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
