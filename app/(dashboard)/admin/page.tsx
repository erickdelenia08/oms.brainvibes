"use client";

import { useState } from "react";
import { TopHeader } from "@/components/layout/top-header";
import { KpiCard } from "@/components/ui/kpi-card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  AlertTriangle,
  Wallet,
  Users,
  Search,
  Filter,
  MoreVertical,
  MapPin,
  UserX,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  Edit
} from "lucide-react";

interface AdminSession {
  id: string;
  time: string;
  student: string;
  subject: string;
  tutor: string;
  location: string;
  status: "SCHEDULED" | "IN_PROGRESS" | "UNAVAILABLE" | "RESCHEDULE_PENDING";
  duration: string;
}

export default function AdminDashboard() {
  const [sessions, setSessions] = useState<AdminSession[]>([
    {
      id: "a1",
      time: "10:00 AM",
      duration: "2h duration",
      student: "Emma Watson",
      subject: "A-Level Mathematics",
      tutor: "James Smith",
      location: "142 Baker St, London",
      status: "IN_PROGRESS"
    },
    {
      id: "a2",
      time: "11:30 AM",
      duration: "1.5h duration",
      student: "Lucas Grey",
      subject: "GCSE Physics",
      tutor: "Sarah Jenkins",
      location: "Online (Zoom)",
      status: "UNAVAILABLE"
    },
    {
      id: "a3",
      time: "2:00 PM",
      duration: "1h duration",
      student: "Mia Wong",
      subject: "Primary English",
      tutor: "Anita Patel",
      location: "78 High St, Manchester",
      status: "RESCHEDULE_PENDING"
    }
  ]);

  const [activeModal, setActiveModal] = useState<"NONE" | "SUBSTITUTE" | "RESCHEDULE" | "EDIT">("NONE");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedSession = sessions.find(s => s.id === selectedId);

  const openModal = (id: string, type: "SUBSTITUTE" | "RESCHEDULE" | "EDIT") => {
    setSelectedId(id);
    setActiveModal(type);
  };

  const handleResolveAbsence = () => {
    setSessions(prev => prev.map(s => s.id === selectedId ? { ...s, status: "SCHEDULED", tutor: "New Substitute Tutor" } : s));
    setActiveModal("NONE");
    alert("Substitute tutor assigned successfully.");
  };

  const handleApproveReschedule = () => {
    setSessions(prev => prev.map(s => s.id === selectedId ? { ...s, status: "SCHEDULED", time: "Tomorrow 14:00" } : s));
    setActiveModal("NONE");
    alert("Reschedule approved.");
  };

  return (
    <div className="space-y-6 p-6 pb-24 md:pb-6 relative">
      <TopHeader
        title="Admin Operations Dashboard"
        subtitle="Today's overview and live session management."
        role="ADMIN"
      />

      {/* KPI Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Today's Sessions */}
        <KpiCard
          title="Today's Sessions"
          value="18"
          icon={Calendar}
          iconClassName="text-primary bg-primary/10"
          containerClassName="hover:border-primary/30 transition-colors"
        >
          <div className="flex justify-between items-center text-xs text-muted-foreground pt-2">
            <div className="flex flex-col items-center">
              <span className="font-medium">Scheduled</span>
              <span className="font-semibold text-foreground">{sessions.filter(s => s.status === 'SCHEDULED').length + 2}</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex flex-col items-center">
              <span className="font-medium text-primary">In-Progress</span>
              <span className="font-semibold text-foreground">{sessions.filter(s => s.status === 'IN_PROGRESS').length}</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex flex-col items-center">
              <span className="font-medium text-emerald-600">Completed</span>
              <span className="font-semibold text-foreground">12</span>
            </div>
          </div>
        </KpiCard>

        {/* Attention Required */}
        <KpiCard
          title="Attention Required"
          value={sessions.filter(s => ['UNAVAILABLE', 'RESCHEDULE_PENDING'].includes(s.status)).length}
          icon={AlertTriangle}
          iconClassName="text-destructive bg-destructive/10"
          containerClassName="hover:border-destructive/30 relative overflow-hidden transition-colors"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-destructive" />
          <div className="flex flex-col gap-1.5 pl-2 pt-1">
            <div className="flex justify-between items-center text-xs bg-destructive/10 px-2.5 py-1 rounded-md">
              <span className="text-destructive font-medium">Tutor Unavailable</span>
              <span className="font-bold text-destructive">{sessions.filter(s => s.status === 'UNAVAILABLE').length}</span>
            </div>
            <div className="flex justify-between items-center text-xs bg-muted px-2.5 py-1 rounded-md">
              <span className="text-muted-foreground">Pending Reschedules</span>
              <span className="font-semibold text-foreground">{sessions.filter(s => s.status === 'RESCHEDULE_PENDING').length}</span>
            </div>
          </div>
        </KpiCard>

        {/* Active Quota Balance */}
        <KpiCard
          title="Active Quota Balance"
          value={
            <div className="flex items-baseline gap-1">
              <span>420</span>
              <span className="text-sm font-normal text-muted-foreground">hrs</span>
            </div>
          }
          icon={Wallet}
          iconClassName="text-indigo-600 bg-indigo-50"
          containerClassName="hover:border-primary/30 transition-colors"
        >
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-3">
            <TrendingUp size={14} className="text-emerald-500" />
            <span>Avg 12 hrs/student</span>
          </div>
        </KpiCard>

        {/* Active Users */}
        <KpiCard
          title="Active Users"
          value=""
          icon={Users}
          iconClassName="text-sky-600 bg-sky-50"
          containerClassName="hover:border-primary/30 flex flex-col justify-between transition-colors"
        >
          <div className="flex justify-between items-center pt-1">
            <div>
              <div className="text-2xl font-bold text-foreground">34</div>
              <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Tutors</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-right">
              <div className="text-2xl font-bold text-foreground">112</div>
              <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Students</div>
            </div>
          </div>
          <div className="w-full bg-muted h-2 rounded-full mt-3 overflow-hidden flex">
            <div className="bg-primary h-full" style={{ width: '23%' }} title="Tutors (23%)" />
            <div className="bg-sky-500 h-full" style={{ width: '77%' }} title="Students (77%)" />
          </div>
        </KpiCard>
      </section>

      {/* Main Data Table Section */}
      <section className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 sm:p-6 border-b border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-background">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Today&apos;s Live Operational Matrix</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Real-time status of all active and upcoming sessions.</p>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input
                className="w-full pl-9 pr-4 py-2 text-xs bg-muted/50 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:bg-background transition-colors"
                placeholder="Search sessions..."
                type="text"
              />
            </div>
            <button
              aria-label="Filter options"
              className="p-2 border border-input rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground"
            >
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-muted/50 border-b border-border text-xs text-muted-foreground font-medium">
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Student / Subject</th>
                <th className="px-4 py-3">Tutor</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-xs divide-y divide-border text-foreground">

              {sessions.map(session => (
                <tr key={session.id} className={`${session.status === 'UNAVAILABLE' || session.status === 'RESCHEDULE_PENDING' ? 'bg-destructive/5 hover:bg-destructive/10 border-l-2 border-l-destructive' : 'hover:bg-muted/30'} transition-colors`}>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="font-medium">{session.time}</div>
                    <div className="text-muted-foreground text-[11px]">{session.duration}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-primary">{session.student}</div>
                    <div className="text-muted-foreground text-[11px]">{session.subject}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className={`flex items-center gap-2 ${session.status === 'UNAVAILABLE' ? 'text-destructive font-medium' : ''}`}>
                      {session.status === 'UNAVAILABLE' ? <UserX size={16} /> : <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">{session.tutor.charAt(0)}</div>}
                      <span>{session.tutor}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 max-w-[160px] truncate" title={session.location}>
                    {session.location}
                  </td>
                  <td className="px-4 py-3">
                    {session.status === 'IN_PROGRESS' && <Badge variant="info">In Progress</Badge>}
                    {session.status === 'SCHEDULED' && <Badge variant="default">Scheduled</Badge>}
                    {session.status === 'UNAVAILABLE' && <Badge variant="error">Unavailable</Badge>}
                    {session.status === 'RESCHEDULE_PENDING' && <Badge variant="warning">Reschedule Pending</Badge>}
                  </td>
                  <td className="px-4 py-3 text-right">
                    {session.status === 'UNAVAILABLE' ? (
                      <button onClick={() => openModal(session.id, "SUBSTITUTE")} className="px-2.5 py-1 bg-destructive text-destructive-foreground text-xs font-medium rounded-md hover:bg-destructive/90 transition-colors shadow-sm">
                        Assign Substitute
                      </button>
                    ) : session.status === 'RESCHEDULE_PENDING' ? (
                      <button onClick={() => openModal(session.id, "RESCHEDULE")} className="px-2.5 py-1 bg-warning text-warning-foreground text-xs font-medium rounded-md hover:bg-warning/90 transition-colors shadow-sm">
                        Review
                      </button>
                    ) : (
                      <button onClick={() => openModal(session.id, "EDIT")} aria-label="Edit Session" className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-muted">
                        <Edit size={16} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        {/* Pagination / Footer */}
        <div className="px-4 py-3 border-t border-border flex justify-between items-center bg-muted/20 text-xs text-muted-foreground">
          <span>Showing 1 to 3 of 18 entries</span>
          <div className="flex gap-1">
            <button aria-label="Previous page" disabled className="p-1 border border-input rounded hover:bg-accent hover:text-accent-foreground disabled:opacity-40 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button aria-label="Next page" className="p-1 border border-input rounded hover:bg-accent hover:text-accent-foreground transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ADMIN ACTION MODALS */}
      {activeModal === "SUBSTITUTE" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200">
          <div className="bg-surface rounded-xl border border-outline-variant shadow-xl w-full max-w-md overflow-hidden flex flex-col">
            <div className="p-4 border-b border-outline-variant bg-surface-container-lowest">
              <h3 className="font-h3 text-h3 text-on-surface">Assign Substitute Tutor</h3>
            </div>
            <div className="p-4 flex flex-col gap-4 text-sm">
              <p className="text-on-surface-variant">
                Select a substitute for <strong className="text-on-surface">{selectedSession?.subject}</strong> with <strong className="text-on-surface">{selectedSession?.student}</strong>.
              </p>
              <select className="w-full p-2.5 border border-outline-variant rounded-md bg-surface outline-none focus:ring-2 focus:ring-primary">
                <option>Select a Tutor...</option>
                <option>James Smith (Available)</option>
                <option>Anita Patel (Available)</option>
                <option disabled>Rina (Conflict)</option>
              </select>
            </div>
            <div className="p-4 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-3">
              <button onClick={() => setActiveModal("NONE")} className="px-4 py-2 rounded-lg text-sm hover:bg-surface-container transition-colors">Cancel</button>
              <button onClick={handleResolveAbsence} className="px-4 py-2 rounded-lg text-sm bg-primary text-on-primary hover:bg-primary/90 transition-colors">Assign</button>
            </div>
          </div>
        </div>
      )}

      {activeModal === "RESCHEDULE" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200">
          <div className="bg-surface rounded-xl border border-outline-variant shadow-xl w-full max-w-md overflow-hidden flex flex-col">
            <div className="p-4 border-b border-outline-variant bg-surface-container-lowest">
              <h3 className="font-h3 text-h3 text-on-surface">Review Reschedule Request</h3>
            </div>
            <div className="p-4 flex flex-col gap-4 text-sm">
              <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant text-xs">Original</span>
                  <span className="font-medium strike-through">{selectedSession?.time}</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-on-surface-variant text-xs">Requested</span>
                  <span className="font-medium text-primary">Tomorrow 14:00</span>
                </div>
                <div className="mt-3 pt-3 border-t border-outline-variant">
                  <span className="text-on-surface-variant text-xs block mb-1">Reason</span>
                  <p>Student is sick.</p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-3">
              <button onClick={() => setActiveModal("NONE")} className="px-4 py-2 rounded-lg text-sm border border-error text-error hover:bg-error/10 transition-colors flex items-center gap-1"><XCircle size={16}/> Reject</button>
              <button onClick={handleApproveReschedule} className="px-4 py-2 rounded-lg text-sm bg-success text-on-success hover:bg-success/90 transition-colors flex items-center gap-1"><CheckCircle size={16}/> Approve</button>
            </div>
          </div>
        </div>
      )}

      {activeModal === "EDIT" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200">
          <div className="bg-surface rounded-xl border border-outline-variant shadow-xl w-full max-w-md overflow-hidden flex flex-col">
            <div className="p-4 border-b border-outline-variant bg-surface-container-lowest">
              <h3 className="font-h3 text-h3 text-on-surface">Edit Session</h3>
            </div>
            <div className="p-4 flex flex-col gap-4 text-sm text-on-surface-variant text-center">
              [Session Edit Form Mockup] <br/>
              (Date, Time, Location, Status)
            </div>
            <div className="p-4 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-3">
              <button onClick={() => setActiveModal("NONE")} className="px-4 py-2 rounded-lg text-sm bg-primary text-on-primary transition-colors">Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}