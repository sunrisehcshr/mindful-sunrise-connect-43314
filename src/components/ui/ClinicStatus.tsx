
"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

interface ClinicStatusProps {
    className?: string;
    showBadge?: boolean;
}

export default function ClinicStatus({ className, showBadge = false }: ClinicStatusProps) {
    const [status, setStatus] = useState({ 
        isOpen: false, 
        label: "Clinic Closed", 
        countdown: "" 
    });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const checkStatus = () => {
            // Get current time in Darby, PA (America/New_York time zone)
            const darbyNow = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
            
            const day = darbyNow.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
            const hour = darbyNow.getHours();
            const minutes = darbyNow.getMinutes();
            
            // Mon-Fri (1-5) and 9:00 AM to 5:00 PM (9-17)
            const isOpen = day >= 1 && day <= 5 && hour >= 9 && hour < 17;
            
            if (isOpen) {
                setStatus({ isOpen: true, label: "Open Now", countdown: "" });
            } else {
                // Calculate time until next open (Mon-Fri 9:00 AM)
                let nextOpen = new Date(darbyNow);
                nextOpen.setHours(9, 0, 0, 0);

                if (day >= 1 && day <= 5 && hour >= 17) {
                    // It's a weekday after 5 PM, next open is tomorrow 9 AM
                    nextOpen.setDate(darbyNow.getDate() + 1);
                } else if (day === 0 || day === 6) {
                    // It's weekend, next open is Monday 9 AM
                    const daysUntilMonday = (1 + 7 - day) % 7;
                    nextOpen.setDate(darbyNow.getDate() + (daysUntilMonday === 0 ? 7 : daysUntilMonday));
                } else if (day >= 1 && day <= 5 && hour < 9) {
                    // It's a weekday before 9 AM, next open is today 9 AM
                }

                const diffMs = nextOpen.getTime() - darbyNow.getTime();
                const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
                const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
                const diffSecs = Math.floor((diffMs % (1000 * 60)) / 1000);
                
                const timeLabel = `Open in ${String(diffHrs).padStart(2, '0')}:${String(diffMins).padStart(2, '0')}:${String(diffSecs).padStart(2, '0')}`;
                setStatus({ isOpen: false, label: "Closed Now", countdown: timeLabel });
            }
        };

        checkStatus();
        const interval = setInterval(checkStatus, 1000); // Update every second
        return () => clearInterval(interval);
    }, [mounted]);

    if (!mounted) return null;

    if (showBadge) {
        return (
            <div className={cn("flex items-center gap-2", className)} aria-live="polite">
                <div className="relative flex h-1.5 w-1.5">
                    <span className={cn(
                        "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                        status.isOpen ? "bg-emerald-400" : "bg-orange-400"
                    )}></span>
                    <span className={cn(
                        "relative inline-flex rounded-full h-1.5 w-1.5",
                        status.isOpen ? "bg-emerald-500" : "bg-orange-500"
                    )}></span>
                </div>
                <span className={cn(
                    "text-[10px] uppercase tracking-[0.15em] font-bold font-barlow",
                    status.isOpen ? "text-emerald-600" : "text-orange-600"
                )}>
                    {status.isOpen ? "Open Now" : status.countdown}
                </span>
            </div>
        );
    }

    return (
        <div className={cn("flex items-center gap-2", className)} aria-live="polite">
            <div className="relative flex h-1.5 w-1.5">
                <span className={cn(
                    "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                    status.isOpen ? "bg-emerald-400" : "bg-orange-400"
                )}></span>
                <span className={cn(
                    "relative inline-flex rounded-full h-1.5 w-1.5",
                    status.isOpen ? "bg-emerald-500" : "bg-orange-500"
                )}></span>
            </div>
            <span className={cn(
                "text-[10px] font-bold uppercase tracking-[0.15em] font-barlow",
                status.isOpen ? "text-emerald-700" : "text-orange-700"
            )}>
                {status.isOpen ? "Open Now" : status.countdown}
            </span>
        </div>
    );
}
