
"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import QuickAppointmentForm from './QuickAppointmentForm';
import { X } from 'lucide-react';

interface AppointmentDialogProps {
  children: React.ReactNode;
}

const AppointmentDialog: React.FC<AppointmentDialogProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden w-[95vw] max-h-[90vh]">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader className="p-8 pb-0">
          <DialogTitle className="text-3xl font-barlow font-bold text-stone-900 tracking-tight">Schedule Your <span className="text-orange-500 font-instrument-serif italic font-normal">Appointment</span></DialogTitle>
          <DialogDescription className="text-stone-500 font-barlow text-base mt-2">
            Fill out the form below and we&apos;ll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="p-8 pt-6">
          <QuickAppointmentForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;
