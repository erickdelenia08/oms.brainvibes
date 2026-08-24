import { CalendarGrid } from "@/components/shared/calendar-grid";

export default function ParentSchedulePage() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* 
        In a real app, this CalendarGrid would receive props to render 
        only the students belonging to this parent and disable Admin editing tools. 
        For now, we reuse the UI slice.
      */}
      <CalendarGrid />
    </div>
  );
}
