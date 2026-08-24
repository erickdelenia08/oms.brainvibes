import { CalendarGrid } from "@/components/shared/calendar-grid";

export default function TutorSchedulePage() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* 
        In a real app, this CalendarGrid would receive props to render 
        only this tutor's schedule and disable Admin editing tools. 
        For now, we reuse the UI slice.
      */}
      <CalendarGrid />
    </div>
  );
}
