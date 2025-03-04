
import { Clock, CalendarClock, CalendarX } from "lucide-react";
import { cn } from "@/lib/utils";

const hours = [
  { day: "Monday", hours: "8:00 AM - 7:00 PM", isClosed: false },
  { day: "Tuesday", hours: "8:00 AM - 7:00 PM", isClosed: false },
  { day: "Wednesday", hours: "8:00 AM - 7:00 PM", isClosed: false },
  { day: "Thursday", hours: "8:00 AM - 7:00 PM", isClosed: false },
  { day: "Friday", hours: "8:00 AM - 7:00 PM", isClosed: false },
  { day: "Saturday", hours: "9:00 AM - 5:00 PM", isClosed: false },
  { day: "Sunday", hours: "Closed", isClosed: true },
];

// Get the current day for highlighting
const getCurrentDay = () => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[new Date().getDay()];
  return currentDay;
};

const OpeningHours = () => {
  const currentDay = getCurrentDay();
  
  // Check if we're currently open
  const isCurrentlyOpen = () => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // Convert current time to minutes since midnight
    const currentTimeInMinutes = (currentHour * 60) + currentMinute;
    
    // Sunday (closed)
    if (dayOfWeek === 0) return false;
    
    // Saturday
    if (dayOfWeek === 6) {
      return currentTimeInMinutes >= 9 * 60 && currentTimeInMinutes < 17 * 60;
    }
    
    // Monday to Friday
    return currentTimeInMinutes >= 8 * 60 && currentTimeInMinutes < 19 * 60;
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-sunrise-400" />
          <h3 className="text-lg font-medium">Opening Hours</h3>
        </div>
        <div className={cn(
          "px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5",
          isCurrentlyOpen() 
            ? "bg-green-100 text-green-800" 
            : "bg-red-100 text-red-800"
        )}>
          {isCurrentlyOpen() ? (
            <>
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Currently Open
            </>
          ) : (
            <>
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              Currently Closed
            </>
          )}
        </div>
      </div>
      
      <div className="bg-secondary rounded-xl overflow-hidden border border-border shadow-sm">
        <div className="divide-y divide-border">
          {hours.map((item) => (
            <div 
              key={item.day}
              className={cn(
                "flex items-center justify-between p-4 transition-colors",
                currentDay === item.day && "bg-sunrise-50"
              )}
            >
              <div className="flex items-center gap-2.5">
                {item.isClosed ? (
                  <CalendarX className="h-4 w-4 text-red-500" />
                ) : (
                  <CalendarClock className={cn(
                    "h-4 w-4",
                    currentDay === item.day ? "text-sunrise-600" : "text-muted-foreground"
                  )} />
                )}
                <span className={cn(
                  "font-medium",
                  currentDay === item.day ? "text-sunrise-800" : ""
                )}>
                  {item.day}
                </span>
                {currentDay === item.day && (
                  <span className="text-xs bg-sunrise-200 text-sunrise-800 px-1.5 py-0.5 rounded">Today</span>
                )}
              </div>
              <span className={cn(
                "text-sm",
                item.isClosed ? "text-red-500 font-medium" : "text-muted-foreground",
                currentDay === item.day && !item.isClosed ? "text-sunrise-800" : ""
              )}>
                {item.hours}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 flex items-start space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className="text-sm text-blue-700">
          <p className="font-medium">Holiday Hours</p>
          <p className="mt-1">Our hours may vary on holidays. Please call ahead to confirm our availability on major holidays.</p>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
