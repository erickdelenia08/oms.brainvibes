"use client";

import { useState } from "react";
import { X, Calendar as CalendarIcon, Clock, AlertCircle } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  sessionTitle: string;
};

export function RescheduleModal({ isOpen, onClose, onSubmit, sessionTitle }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200">
      <div className="bg-surface rounded-xl border border-outline-variant shadow-xl w-full max-w-md overflow-hidden flex flex-col">
        <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
          <h3 className="font-h3 text-h3 text-on-surface">Request Reschedule</h3>
          <button onClick={onClose} className="text-on-surface-variant hover:text-error transition-colors p-1 rounded-md hover:bg-error-container/20">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4 flex flex-col gap-4">
          <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/30 flex items-start gap-3 text-sm">
            <AlertCircle className="text-primary mt-0.5 shrink-0" size={16} />
            <div className="text-on-surface-variant">
              You are requesting to reschedule <strong className="text-on-surface">{sessionTitle}</strong>. 
              Admin approval is required.
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-xs text-on-surface-variant">New Date</label>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={16} />
              <input type="date" className="w-full pl-9 pr-3 py-2 border border-outline-variant rounded-md bg-surface text-sm focus:ring-1 focus:ring-primary outline-none" />
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="font-label-sm text-xs text-on-surface-variant">Start Time</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={16} />
                <input type="time" className="w-full pl-9 pr-3 py-2 border border-outline-variant rounded-md bg-surface text-sm focus:ring-1 focus:ring-primary outline-none" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="font-label-sm text-xs text-on-surface-variant">End Time</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={16} />
                <input type="time" className="w-full pl-9 pr-3 py-2 border border-outline-variant rounded-md bg-surface text-sm focus:ring-1 focus:ring-primary outline-none" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-xs text-on-surface-variant">Reason for Reschedule</label>
            <textarea 
              rows={3} 
              className="w-full p-3 border border-outline-variant rounded-md bg-surface text-sm focus:ring-1 focus:ring-primary outline-none resize-none"
              placeholder="Please explain why you need to reschedule..."
            ></textarea>
          </div>
        </div>

        <div className="p-4 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg font-label-md text-sm text-on-surface hover:bg-surface-container transition-colors">
            Cancel
          </button>
          <button onClick={() => onSubmit({})} className="px-4 py-2 rounded-lg font-label-md text-sm bg-primary text-on-primary hover:bg-primary/90 transition-colors shadow-sm">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}

export function AbsenceModal({ isOpen, onClose, onSubmit, sessionTitle }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200">
      <div className="bg-surface rounded-xl border border-outline-variant shadow-xl w-full max-w-md overflow-hidden flex flex-col">
        <div className="p-4 border-b border-error/20 flex justify-between items-center bg-error-container/10">
          <h3 className="font-h3 text-h3 text-error">Report Unavailability</h3>
          <button onClick={onClose} className="text-on-surface-variant hover:text-error transition-colors p-1 rounded-md hover:bg-error-container/20">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4 flex flex-col gap-4">
          <div className="p-3 bg-error-container/20 rounded-lg border border-error/20 flex items-start gap-3 text-sm">
            <AlertCircle className="text-error mt-0.5 shrink-0" size={16} />
            <div className="text-on-surface">
              You are reporting that you cannot attend <strong className="font-bold">{sessionTitle}</strong>. 
              The Admin will be notified immediately to find a substitute or cancel the session.
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-xs text-on-surface-variant">Reason for Absence</label>
            <textarea 
              rows={4} 
              className="w-full p-3 border border-outline-variant rounded-md bg-surface text-sm focus:ring-1 focus:ring-error outline-none resize-none"
              placeholder="Please provide the reason for your unavailability..."
            ></textarea>
          </div>
        </div>

        <div className="p-4 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg font-label-md text-sm text-on-surface hover:bg-surface-container transition-colors">
            Cancel
          </button>
          <button onClick={() => onSubmit({})} className="px-4 py-2 rounded-lg font-label-md text-sm bg-error text-on-error hover:bg-error/90 transition-colors shadow-sm">
            Report Absence
          </button>
        </div>
      </div>
    </div>
  );
}
