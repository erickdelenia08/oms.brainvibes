"use client";

import { useState } from "react";
import { TopHeader } from "@/components/layout/top-header";
import { ChevronRight, Star, Calendar, Clock, MapPin, CalendarSync } from "lucide-react";
import { RescheduleModal } from "@/components/shared/tutor-modals";
import { Badge } from "@/components/ui/badge";

interface UpcomingSession {
  id: string;
  student: string;
  subject: string;
  tutor: string;
  date: string;
  time: string;
  location: string;
}

export default function ParentDashboard() {
  const [upcomingSessions, setUpcomingSessions] = useState<UpcomingSession[]>([
    {
      id: "ps1",
      student: "Ahmad",
      subject: "Advanced Mathematics",
      tutor: "Pak Budi",
      date: "Tomorrow, 25 Oct 2026",
      time: "15:00 - 16:30",
      location: "123 Sudirman Street, Jakarta"
    }
  ]);

  const [activeModal, setActiveModal] = useState<"NONE" | "RESCHEDULE">("NONE");
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);

  const selectedSession = upcomingSessions.find(s => s.id === selectedSessionId);

  const handleOpenReschedule = (id: string) => {
    setSelectedSessionId(id);
    setActiveModal("RESCHEDULE");
  };

  const handleRescheduleSubmit = () => {
    alert("Reschedule request submitted successfully! Waiting for Admin approval.");
    setActiveModal("NONE");
    setSelectedSessionId(null);
  };

  return (
    <>
      <TopHeader
        title="Ibu Ratna"
        subtitle="Welcome back! Here is your student's progress."
        role="PARENT"
      />

      <div className="flex flex-col gap-section-gap max-w-3xl pb-24 md:pb-0">
        {/* Mobile Header Equivalent (Only visible on mobile) */}
        <section className="flex flex-col gap-2 md:hidden">
          <p className="font-label-sm text-label-sm text-on-surface-variant">Welcome back,</p>
          <h1 className="font-h3 text-h3 text-on-surface">Ibu Ratna</h1>
        </section>

        {/* Upcoming Schedule */}
        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="font-h3 text-h3 text-on-background">Upcoming Schedule</h2>
            <button className="font-label-sm text-label-sm text-primary flex items-center gap-1 hover:underline transition-all">
              Full Schedule <ChevronRight size={16} />
            </button>
          </div>

          {upcomingSessions.map(session => (
            <div key={session.id} className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-sm p-card-padding flex flex-col gap-4 relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary-container"></div>

              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                    <Calendar size={16} /> {session.date} • <Clock size={16} className="ml-2" /> {session.time}
                  </span>
                  <h3 className="font-label-md text-label-md text-on-surface">{session.subject}</h3>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Student: {session.student} • Tutor: {session.tutor}</span>
                </div>
                <Badge variant="default" className="text-secondary-fixed-dim border-secondary-fixed-dim">Upcoming</Badge>
              </div>

              <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
                <MapPin size={18} />
                <span>{session.location}</span>
              </div>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleOpenReschedule(session.id)}
                  className="w-full flex items-center justify-center gap-2 text-on-surface-variant font-label-md text-label-md h-[44px] rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors shadow-sm"
                >
                  <CalendarSync size={20} /> Request Reschedule
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Quota Ledger Card */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-h3 text-h3 text-on-background">Active Packages & Quota</h2>
          </div>
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-sm p-card-padding transition-shadow hover:shadow-md">

            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-label-md text-label-md text-on-surface">BrainVibes Math 8x</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Student: Ahmad</p>
              </div>
              <Badge variant="default" className="bg-success hover:bg-success/90 text-on-success">Active</Badge>
            </div>

            <div className="mb-2 flex justify-between items-end">
              <span className="font-h2 text-h2 text-primary">5<span className="font-h3 text-h3 text-on-surface-variant/60">/8</span></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Sessions Used</span>
            </div>

            <div className="w-full bg-surface-variant rounded-full h-2.5 mb-1 overflow-hidden">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: '62.5%' }}></div>
            </div>

            <div className="flex justify-between items-center font-label-sm text-label-sm text-on-surface-variant mt-3">
              <span>Expires: 12 Nov 2026 (12 days left)</span>
              <button className="text-primary font-label-md text-label-md hover:underline transition-all">Book More</button>
            </div>
          </div>
        </section>

        {/* Learning Progress Timeline (History & Logs) */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-h3 text-h3 text-on-background">Learning Logs & History</h2>
            <button className="font-label-sm text-label-sm text-primary flex items-center gap-1 hover:underline transition-all">
              View All <ChevronRight size={16} />
            </button>
          </div>

          <div className="relative border-l-2 border-surface-variant ml-4 space-y-6">

            {/* Timeline Item 1 */}
            <div className="relative pl-6">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>

              <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-sm p-4 hover:border-primary-container/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">12 Oct 2026 • 15:00 - 16:30</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-success/10 text-success text-[10px] uppercase font-bold rounded">Present</span>
                    <span className="px-2 py-1 bg-primary-container/10 text-primary font-label-sm text-label-sm rounded-md flex items-center gap-1">
                      <Star size={14} className="fill-primary" />
                      4.5/5 Baik
                    </span>
                  </div>
                </div>

                <h4 className="font-label-md text-label-md text-on-surface mb-1">Algebraic Expressions</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Tutor: Pak Budi • Student: Ahmad</p>

                <div className="bg-surface-container-low rounded-lg p-3">
                  <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                    &ldquo;Ahmad showed great improvement in understanding linear equations today. Keep practicing the worksheets provided.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-6">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-surface-variant border-4 border-background"></div>

              <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-sm p-4 opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">05 Oct 2026 • 15:00 - 16:30</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-success/10 text-success text-[10px] uppercase font-bold rounded">Present</span>
                    <span className="px-2 py-1 bg-primary-container/10 text-primary font-label-sm text-label-sm rounded-md flex items-center gap-1">
                      <Star size={14} className="fill-primary" />
                      4.0/5 Baik
                    </span>
                  </div>
                </div>

                <h4 className="font-label-md text-label-md text-on-surface mb-1">Introduction to Geometry</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Tutor: Pak Budi • Student: Ahmad</p>

                <div className="bg-surface-container-low rounded-lg p-3">
                  <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                    &ldquo;Good session. Needs a bit more focus on calculating areas of irregular shapes.&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      <RescheduleModal
        isOpen={activeModal === "RESCHEDULE"}
        onClose={() => setActiveModal("NONE")}
        onSubmit={handleRescheduleSubmit}
        sessionTitle={selectedSession ? `${selectedSession.subject} for ${selectedSession.student}` : ""}
      />
    </>
  );
}
