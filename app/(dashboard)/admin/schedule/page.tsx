import { CalendarGrid } from "@/components/shared/calendar-grid";

export default function AdminSchedulePage() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <CalendarGrid />
    </div>
  );
}
