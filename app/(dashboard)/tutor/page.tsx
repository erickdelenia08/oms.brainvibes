"use client";

import { useState } from "react";
import { TopHeader } from "@/components/layout/top-header";
import { Badge } from "@/components/ui/badge";
import { Timer, Clock, MapPin, LogIn, Send, Star, CalendarSync, UserX } from "lucide-react";
import { RescheduleModal, AbsenceModal } from "@/components/shared/tutor-modals";

type SessionStatus = "SCHEDULED" | "IN_PROGRESS" | "COMPLETED";

interface Session {
  id: string;
  time: string;
  subject: string;
  student: string;
  grade: string;
  location: string;
  status: SessionStatus;
}

export default function TutorDashboard() {
  const [sessions, setSessions] = useState<Session[]>([
    {
      id: "s1",
      time: "14:00 - 15:30",
      subject: "Advanced Mathematics",
      student: "Budi Santoso",
      grade: "Grade 10",
      location: "123 Sudirman Street, Jakarta",
      status: "SCHEDULED"
    },
    {
      id: "s2",
      time: "10:00 - 11:30",
      subject: "Basic Physics",
      student: "Siti Aminah",
      grade: "Grade 11",
      location: "45 Thamrin Avenue, Jakarta",
      status: "IN_PROGRESS" // Needs check-out
    }
  ]);

  const [activeModal, setActiveModal] = useState<"NONE" | "RESCHEDULE" | "ABSENCE">("NONE");
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);

  const selectedSession = sessions.find(s => s.id === selectedSessionId);

  const handleStartLesson = (id: string) => {
    // Simulate GPS check-in and status update
    setSessions(prev => prev.map(s => s.id === id ? { ...s, status: "IN_PROGRESS" } : s));
  };

  const handleSubmitLog = (id: string, e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submitting log and checking out
    setSessions(prev => prev.map(s => s.id === id ? { ...s, status: "COMPLETED" } : s));
    alert("Learning log submitted successfully! Quota has been deducted.");
  };

  const handleOpenReschedule = (id: string) => {
    setSelectedSessionId(id);
    setActiveModal("RESCHEDULE");
  };

  const handleOpenAbsence = (id: string) => {
    setSelectedSessionId(id);
    setActiveModal("ABSENCE");
  };

  const handleModalSubmit = () => {
    alert("Request submitted successfully!");
    setActiveModal("NONE");
    setSelectedSessionId(null);
  };

  return (
    <>
      <TopHeader
        title="Welcome back, Andi!"
        subtitle="Here is your schedule and tasks for today."
        role="TUTOR"
      />

      <div className="flex flex-col gap-section-gap max-w-3xl pb-24 md:pb-0">
        {/* Hero/Welcome Section */}
        <section className="flex flex-col gap-2">
          <h1 className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1 text-on-surface md:hidden mb-2">Halo, Tutor Andi!</h1>

          <div className="bg-primary-container text-on-primary-container rounded-xl p-card-padding flex items-center justify-between shadow-sm relative overflow-hidden">
            <div className="z-10 flex flex-col gap-1">
              <span className="font-label-sm text-label-sm uppercase tracking-wider opacity-80">Next Lesson In</span>
              <div className="font-h2 text-h2 text-on-primary font-bold">00:45:00</div>
            </div>
            <div className="z-10 bg-primary/40 rounded-full w-12 h-12 flex items-center justify-center">
              <Timer className="text-on-primary" size={24} />
            </div>
            {/* Decorative background element */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
        </section>

        {/* Today's Schedule Cards */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-h3 text-h3 text-on-surface">Today&apos;s Schedule</h2>
            <span className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm px-2 py-1 rounded-full">
              {sessions.filter(s => s.status !== "COMPLETED").length} Active Sessions
            </span>
          </div>

          {sessions.map(session => (
            <div key={session.id} className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-sm p-card-padding flex flex-col gap-4 relative overflow-hidden transition-all duration-300">

              {/* Status Indicator Bar */}
              <div className={`absolute top-0 left-0 w-1 h-full ${session.status === 'SCHEDULED' ? 'bg-secondary-container' :
                  session.status === 'IN_PROGRESS' ? 'bg-primary' :
                    'bg-outline'
                }`}></div>

              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                    <Clock size={16} /> {session.time}
                  </span>
                  <h3 className="font-label-md text-label-md text-on-surface">{session.subject}</h3>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{session.student} • {session.grade}</span>
                </div>
                {session.status === 'SCHEDULED' && <span className="bg-secondary-container/20 text-on-secondary-container font-label-sm text-label-sm px-2 py-1 rounded border border-secondary-container/30">Upcoming</span>}
                {session.status === 'IN_PROGRESS' && <Badge variant="default" className="bg-primary hover:bg-primary/90 text-on-primary">In Progress</Badge>}
                {session.status === 'COMPLETED' && <Badge variant="default">Completed</Badge>}
              </div>

              <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
                <MapPin size={18} />
                <span>{session.location}</span>
              </div>

              {/* SCHEDULED ACTIONS */}
              {session.status === "SCHEDULED" && (
                <div className="flex flex-col gap-2 mt-2">
                  <button
                    onClick={() => handleStartLesson(session.id)}
                    className="w-full bg-primary text-on-primary font-label-md text-label-md h-[48px] rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-95 transition-all shadow-md"
                  >
                    <LogIn size={20} /> Start Lesson (Check-In)
                  </button>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleOpenReschedule(session.id)}
                      className="flex-1 flex items-center justify-center gap-1.5 text-on-surface-variant font-label-md text-label-sm h-[44px] rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors"
                    >
                      <CalendarSync size={16} /> Reschedule
                    </button>
                    <button
                      onClick={() => handleOpenAbsence(session.id)}
                      className="flex-1 flex items-center justify-center gap-1.5 text-error font-label-md text-label-sm h-[44px] rounded-lg border border-error/30 hover:bg-error/10 transition-colors"
                    >
                      <UserX size={16} /> Report Absence
                    </button>
                  </div>
                </div>
              )}

              {/* IN PROGRESS ACTIONS (Check-Out Form) */}
              {session.status === "IN_PROGRESS" && (
                <form onSubmit={(e) => handleSubmitLog(session.id, e)} className="mt-2 bg-surface-container-low rounded-lg p-4 border border-outline-variant/30 flex flex-col gap-4 animate-in fade-in zoom-in-95">
                  <div className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
                    <h4 className="font-label-md text-label-md text-on-surface">Post-Lesson Log</h4>
                    <span className="text-xs text-on-surface-variant">Required for Check-Out</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Material Covered</label>
                    <textarea
                      required
                      className="w-full rounded-md border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary font-body-sm text-body-sm text-on-surface p-3 min-h-[80px] outline-none"
                      placeholder="Briefly describe what was taught today..."
                    ></textarea>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Student Understanding</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <button key={i} type="button" className="text-outline hover:text-secondary-container transition-colors p-1">
                          <Star size={32} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-tertiary text-on-tertiary font-label-md text-label-md h-[48px] rounded-lg flex items-center justify-center gap-2 mt-2 shadow-sm hover:bg-tertiary/90 transition-colors">
                    <Send size={20} /> Submit Log & Check Out
                  </button>
                </form>
              )}

            </div>
          ))}

          {sessions.filter(s => s.status !== "COMPLETED").length === 0 && (
            <div className="p-8 text-center text-on-surface-variant bg-surface-container-lowest rounded-xl border border-outline-variant/50 border-dashed">
              You have completed all sessions for today!
            </div>
          )}
        </section>
      </div>

      {/* Action Modals */}
      <RescheduleModal
        isOpen={activeModal === "RESCHEDULE"}
        onClose={() => setActiveModal("NONE")}
        onSubmit={handleModalSubmit}
        sessionTitle={selectedSession ? `${selectedSession.subject} with ${selectedSession.student}` : ""}
      />

      <AbsenceModal
        isOpen={activeModal === "ABSENCE"}
        onClose={() => setActiveModal("NONE")}
        onSubmit={handleModalSubmit}
        sessionTitle={selectedSession ? `${selectedSession.subject} with ${selectedSession.student}` : ""}
      />
    </>
  );
}
