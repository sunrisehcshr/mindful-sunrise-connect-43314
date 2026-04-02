import React from 'react';
const OpeningHours: React.FC = () => {
  const hours = [
    { day: "Monday", time: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", time: "9:00 AM - 5:00 PM" },
    { day: "Thursday", time: "9:00 AM - 5:00 PM" },
    { day: "Friday", time: "9:00 AM - 5:00 PM" },
    { day: "Saturday", time: "Closed", closed: true },
    { day: "Sunday", time: "Closed", closed: true },
  ];

  return (
    <div className="h-full flex flex-col relative z-10">
      <h3 className="text-xl font-barlow font-bold text-white mb-6 flex items-center gap-3">
        Opening Hours
        <div className="h-px flex-grow bg-stone-800" />
      </h3>
      
      <div className="space-y-3">
        {hours.map((item, index) => (
          <div key={index} className="flex justify-between items-center group/item border-b border-stone-800/20 pb-2">
            <p className="text-stone-400 text-xs font-barlow group-hover/item:text-stone-300 transition-colors">{item.day}</p>
            <p className={`font-barlow text-xs font-medium ${item.closed ? 'text-orange-500/70' : 'text-white'}`}>
              {item.time}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <div className="bg-orange-500/10 rounded-xl p-3 border border-orange-500/20">
          <p className="text-orange-500 text-[10px] uppercase tracking-widest font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            Accepting New Clients
          </p>
        </div>
      </div>
    </div>
  );
};
export default OpeningHours;