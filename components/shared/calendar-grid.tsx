import { ChevronDown, AlertTriangle, Plus } from "lucide-react";

export function CalendarGrid() {
  return (
    <div className="flex-1 flex flex-col w-full h-full bg-background overflow-hidden rounded-xl border border-border">

      {/* Top Toolbar / Filters */}
      <div className="bg-card border-b border-border px-4 py-3 shrink-0 shadow-sm z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <h2 className="text-lg font-semibold text-foreground mr-2">Master Schedule</h2>

          {/* Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="relative">
              <select className="appearance-none bg-muted/50 border border-input text-foreground rounded-lg pl-3 pr-8 py-1.5 text-xs focus:ring-1 focus:ring-ring outline-none cursor-pointer">
                <option>All Tutors</option>
                <option>Tutor Andi</option>
                <option>Tutor Budi</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={14} />
            </div>

            <div className="relative">
              <select className="appearance-none bg-muted/50 border border-input text-foreground rounded-lg pl-3 pr-8 py-1.5 text-xs focus:ring-1 focus:ring-ring outline-none cursor-pointer">
                <option>All Students</option>
                <option>Student X</option>
                <option>Student Y</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={14} />
            </div>

            <div className="relative">
              <select className="appearance-none bg-muted/50 border border-input text-foreground rounded-lg pl-3 pr-8 py-1.5 text-xs focus:ring-1 focus:ring-ring outline-none cursor-pointer">
                <option>Status: Any</option>
                <option>Scheduled</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={14} />
            </div>
          </div>
        </div>

        {/* View Toggles & Actions */}
        <div className="flex items-center gap-2 ml-auto md:ml-0">
          <div className="bg-muted p-1 rounded-lg flex gap-1">
            <button className="px-3 py-1 bg-background text-primary rounded-md shadow-sm text-xs font-medium">Week</button>
            <button className="px-3 py-1 text-muted-foreground hover:bg-background/50 rounded-md text-xs font-medium transition-colors">Day</button>
            <button className="px-3 py-1 text-muted-foreground hover:bg-background/50 rounded-md text-xs font-medium transition-colors">List</button>
          </div>
          <button aria-label="Add Schedule" className="md:hidden p-2 bg-primary text-primary-foreground rounded-lg shadow-sm hover:bg-primary/90 transition-colors">
            <Plus size={18} />
          </button>
        </div>
      </div>

      {/* Conflict Alert Banner */}
      <div className="bg-destructive/10 text-destructive px-4 py-2.5 shrink-0 flex items-center justify-between border-b border-destructive/20 text-xs">
        <div className="flex items-center gap-2">
          <AlertTriangle className="text-destructive shrink-0" size={16} />
          <p>
            <strong className="font-semibold">Conflict Detected:</strong> Tutor Andi has two overlapping sessions on Mon 16:00-17:30
          </p>
        </div>
        <button className="text-destructive hover:bg-destructive/10 px-2 py-1 rounded font-medium underline transition-colors">
          Resolve
        </button>
      </div>

      {/* Calendar Grid Canvas */}
      <div className="flex-1 overflow-auto bg-background p-4 relative">
        <div className="min-w-[800px] h-[800px] grid grid-cols-[80px_repeat(5,1fr)] gap-px bg-border rounded-lg overflow-hidden border border-border">

          {/* Time Column Header */}
          <div className="bg-card p-2 border-b border-r border-border" />

          {/* Days Headers */}
          {['Mon 16 Oct', 'Tue 17 Oct', 'Wed 18 Oct', 'Thu 19 Oct', 'Fri 20 Oct'].map((day, i) => (
            <div key={day} className={`bg-card p-2 text-center border-b ${i < 4 ? 'border-r' : ''} border-border`}>
              <div className="text-[11px] text-muted-foreground uppercase font-medium">{day.split(' ')[0]}</div>
              <div className="text-sm font-semibold text-foreground">{day.split(' ').slice(1).join(' ')}</div>
            </div>
          ))}

          {/* Time Row: 15:00 */}
          <div className="bg-card p-2 text-right border-r border-b border-border relative">
            <span className="text-[11px] text-muted-foreground font-medium relative -top-2">15:00</span>
          </div>
          <div className="bg-card border-r border-b border-border relative" />
          <div className="bg-card border-r border-b border-border relative" />
          <div className="bg-card border-r border-b border-border relative" />
          <div className="bg-card border-r border-b border-border relative" />
          <div className="bg-card border-b border-border relative" />

          {/* Time Row: 16:00 (Conflict Area) */}
          <div className="bg-card p-2 text-right border-r border-b border-border relative">
            <span className="text-[11px] text-muted-foreground font-medium relative -top-2">16:00</span>
          </div>
          <div className="bg-destructive/5 border-r border-b border-border relative p-1 group">
            {/* Session Card 1 */}
            <div className="absolute top-1 left-1 right-3 h-[75px] bg-card border border-destructive/60 shadow-sm rounded-md p-2 hover:shadow-md transition-shadow z-10 flex flex-col justify-between overflow-hidden cursor-pointer">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-semibold text-foreground truncate pr-1">Math G9 - Std A</span>
                  <span className="px-1 py-0.5 bg-amber-500/10 text-amber-600 rounded text-[9px] font-bold uppercase shrink-0">Sch</span>
                </div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Tutor Andi</div>
              </div>
              <div className="text-[10px] text-destructive font-medium flex items-center gap-1">
                <AlertTriangle size={10} /> Conflict
              </div>
            </div>

            {/* Session Card 2 (Overlapping) */}
            <div className="absolute top-6 left-3 right-1 h-[75px] bg-card border border-destructive shadow-md rounded-md p-2 hover:shadow-lg transition-shadow z-20 flex flex-col justify-between overflow-hidden cursor-pointer bg-card/95">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-semibold text-foreground truncate pr-1">Physics - Std B</span>
                  <span className="px-1 py-0.5 bg-amber-500/10 text-amber-600 rounded text-[9px] font-bold uppercase shrink-0">Sch</span>
                </div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Tutor Andi</div>
              </div>
              <div className="text-[10px] text-destructive font-medium flex items-center gap-1">
                <AlertTriangle size={10} /> Conflict
              </div>
            </div>
          </div>

          <div className="bg-card border-r border-b border-border relative p-1">
            {/* Normal Session */}
            <div className="absolute top-1 left-1 right-1 h-[50px] bg-card border-l-4 border-l-emerald-500 border-y border-r border-border shadow-sm rounded-md p-2 hover:shadow-md transition-shadow z-10 flex flex-col justify-center overflow-hidden cursor-pointer">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-foreground truncate pr-1">English - Std C</span>
                <span className="px-1 py-0.5 bg-emerald-500/10 text-emerald-600 rounded text-[9px] font-bold uppercase shrink-0">Done</span>
              </div>
              <div className="text-[11px] text-muted-foreground">Tutor Budi</div>
            </div>
          </div>

          <div className="bg-card border-r border-b border-border relative" />
          <div className="bg-card border-r border-b border-border relative" />
          <div className="bg-card border-b border-border relative" />

          {/* Time Row: 17:00 */}
          <div className="bg-card p-2 text-right border-r border-b border-border relative">
            <span className="text-[11px] text-muted-foreground font-medium relative -top-2">17:00</span>
          </div>
          <div className="bg-destructive/5 border-r border-b border-border relative" />
          <div className="bg-card border-r border-b border-border relative" />
          <div className="bg-card border-r border-b border-border relative" />
          <div className="bg-card border-r border-b border-border relative p-1">
            <div className="absolute top-6 left-1 right-1 h-[75px] bg-card border-l-4 border-l-primary border-y border-r border-border shadow-sm rounded-md p-2 hover:shadow-md transition-shadow z-10 flex flex-col justify-between overflow-hidden cursor-pointer">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-semibold text-foreground truncate pr-1">Chem G12 - Std D</span>
                  <span className="px-1 py-0.5 bg-primary/10 text-primary rounded text-[9px] font-bold uppercase shrink-0">Sch</span>
                </div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Tutor Citra</div>
              </div>
            </div>
          </div>
          <div className="bg-card border-b border-border relative" />

          {/* Time Row: 18:00 */}
          <div className="bg-card p-2 text-right border-r border-border relative">
            <span className="text-[11px] text-muted-foreground font-medium relative -top-2">18:00</span>
          </div>
          <div className="bg-card border-r border-border relative" />
          <div className="bg-card border-r border-border relative" />
          <div className="bg-card border-r border-border relative" />
          <div className="bg-card border-r border-border relative" />
          <div className="bg-card border-border relative" />

        </div>
      </div>
    </div>
  );
}