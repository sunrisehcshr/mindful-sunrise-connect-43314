
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import QuickAppointmentForm from './QuickAppointmentForm';
import { X } from 'lucide-react';

interface AppointmentDialogProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultServiceName?: string;
}

const AppointmentDialog: React.FC<AppointmentDialogProps> = ({ 
  children,
  open,
  onOpenChange,
  defaultServiceName
}) => {
  // Internal state for uncontrolled mode (when children trigger is used)
  const [internalOpen, setInternalOpen] = useState(false);
  
  // Determine if we're in controlled or uncontrolled mode
  const isControlled = open !== undefined && onOpenChange !== undefined;
  const isOpen = isControlled ? open : internalOpen;
  const handleOpenChange = isControlled ? onOpenChange : setInternalOpen;
  
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden w-[95vw] max-h-[90vh]">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="text-xl font-bold text-amber-950">Schedule Your Appointment</DialogTitle>
          <DialogDescription className="text-amber-900 text-sm">
            Fill out the form below and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="px-4 pb-4 pt-2">
          <QuickAppointmentForm defaultService={defaultServiceName} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;
