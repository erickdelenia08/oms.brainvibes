import { Search, Plus, Filter, MoreVertical, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ParentStudentsPage() {
  return (
    <div className="flex flex-col gap-section-gap">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="font-h2 text-h2 text-foreground">My Students</h2>
          <p className="font-body-sm text-body-sm text-muted-foreground mt-1">Manage profiles and view progress for your children.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Student Card 1 */}
        <div className="bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Jonas Doe</h3>
                <p className="text-sm text-muted-foreground">Grade 10 • ID: ST-8492</p>
              </div>
            </div>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted">
              <MoreVertical size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="bg-muted/50 p-3 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground mb-1">Active Packages</p>
              <p className="font-medium text-sm">Intensive Math (8x)</p>
            </div>
            <div className="bg-muted/50 p-3 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground mb-1">Avg Rating</p>
              <p className="font-medium text-sm text-emerald-600">Excellent (A)</p>
            </div>
          </div>
          
          <div className="mt-2">
            <button className="w-full py-2 bg-primary/10 text-primary font-medium text-sm rounded-lg hover:bg-primary/20 transition-colors">
              View Detailed Progress
            </button>
          </div>
        </div>

        {/* Student Card 2 */}
        <div className="bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Sarah Smith</h3>
                <p className="text-sm text-muted-foreground">Grade 8 • ID: ST-8493</p>
              </div>
            </div>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted">
              <MoreVertical size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="bg-muted/50 p-3 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground mb-1">Active Packages</p>
              <p className="font-medium text-sm text-muted-foreground italic">None Active</p>
            </div>
            <div className="bg-muted/50 p-3 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground mb-1">Avg Rating</p>
              <p className="font-medium text-sm text-emerald-600">Good (B+)</p>
            </div>
          </div>
          
          <div className="mt-2">
            <button className="w-full py-2 bg-primary/10 text-primary font-medium text-sm rounded-lg hover:bg-primary/20 transition-colors">
              View Detailed Progress
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
