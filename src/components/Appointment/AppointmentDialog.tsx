
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-amber-950">Schedule Your Appointment</DialogTitle>
          <DialogDescription className="text-amber-900">
            Fill out the form below and we'll get back to you shortly to confirm your appointment.
          </DialogDescription>
        </DialogHeader>
        <div className="px-6 pb-6 pt-2">
          <QuickAppointmentForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;
