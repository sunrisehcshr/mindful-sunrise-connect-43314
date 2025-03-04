
import React from 'react';

const OpeningHours: React.FC = () => {
  const hours = [
    { day: "Monday", time: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", time: "9:00 AM - 5:00 PM" },
    { day: "Thursday", time: "9:00 AM - 5:00 PM" },
    { day: "Friday", time: "9:00 AM - 5:00 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" }
  ];

  return (
    <div className="bg-secondary/50 rounded-xl p-6 border border-border/40">
      <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
      
      <div className="space-y-2">
        {hours.map((item, index) => (
          <div key={index} className="flex justify-between">
            <p className="text-muted-foreground">{item.day}</p>
            <p className="font-medium">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpeningHours;
