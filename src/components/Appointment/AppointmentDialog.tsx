
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
import { X } from "lucide-react";
import QuickAppointmentForm from './QuickAppointmentForm';

interface AppointmentDialogProps {
  children: React.ReactNode;
}

const AppointmentDialog: React.FC<AppointmentDialogProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-auto w-[95vw] max-h-[90vh] bg-white">
        <DialogHeader className="p-4 pb-0 sticky top-0 bg-white z-10">
          <DialogTitle className="text-xl font-bold text-amber-950">Schedule Your Appointment</DialogTitle>
          <DialogDescription className="text-amber-900 text-sm">
            Fill out the form below and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <DialogClose className="absolute right-4 top-4 rounded-sm ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none opacity-70">
          <X className="h-5 w-5 text-amber-900" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <div className="px-4 pb-4 pt-2 overflow-y-auto">
          <QuickAppointmentForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;
