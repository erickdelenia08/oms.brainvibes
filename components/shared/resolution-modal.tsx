import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function ResolutionModal({ isOpen, onClose, title = "Resolve Conflict" }: ResolutionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-inverse-surface/60 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-surface-container-lowest w-full max-w-2xl rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-card-padding py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
          <h3 className="font-h3 text-h3 text-on-surface">{title}</h3>
          <button 
            className="text-on-surface-variant hover:text-on-surface p-1 rounded-full hover:bg-surface-variant transition-colors"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Body */}
        <div className="p-card-padding overflow-y-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              <div className="flex flex-col gap-1.5">
                <label className="font-label-sm text-label-sm text-on-surface">Substitute Tutor</label>
                <select className="w-full bg-surface border border-outline-variant rounded-lg px-3 py-2 text-body-sm text-on-surface focus:border-primary-container focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all">
                  <option>Select Tutor</option>
                  <option>Tutor Budi</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="font-label-sm text-label-sm text-on-surface">Reschedule Date</label>
                <input 
                  className="w-full bg-surface border border-outline-variant rounded-lg px-3 py-2 text-body-sm text-on-surface focus:border-primary-container focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all" 
                  type="date"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-label-sm text-on-surface">Reason / Note</label>
              <textarea 
                className="w-full bg-surface border border-outline-variant rounded-lg px-3 py-2 text-body-sm text-on-surface focus:border-primary-container focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all min-h-[100px]"
                placeholder="Explain the reason for this change..."
              />
            </div>
          </form>
        </div>
        
        {/* Footer / Actions */}
        <div className="px-card-padding py-4 border-t border-outline-variant bg-surface-container flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button className="bg-primary text-on-primary">Apply Changes</Button>
        </div>
      </div>
    </div>
  );
}
