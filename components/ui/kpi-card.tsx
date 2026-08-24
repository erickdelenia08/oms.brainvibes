import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface KpiCardProps {
  title: string
  value: string | React.ReactNode
  icon: LucideIcon
  iconClassName?: string
  containerClassName?: string
  children?: React.ReactNode
}

export function KpiCard({ title, value, icon: Icon, iconClassName, containerClassName, children }: KpiCardProps) {
  return (
    <div className={cn("bg-white/90 backdrop-blur-md rounded-2xl p-card-padding shadow-sm hover:shadow-md transition-shadow group border border-slate-200", containerClassName)}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{title}</h3>
        <div className={cn("p-1.5 rounded-md", iconClassName)}>
          <Icon size={20} />
        </div>
      </div>
      <div className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1 text-on-background mb-4">
        {value}
      </div>
      {children}
    </div>
  )
}
