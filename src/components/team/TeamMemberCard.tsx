import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../ui/button';

interface TeamMemberCardProps {
  name: string;
  role: string;
  specialties: string[];
  bio: string;
  image?: string;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  specialties,
  bio,
  image,
  index
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="group bg-white border border-stone-200/80 rounded-2xl hover:shadow-lg hover:border-amber-200 transition-all duration-300 h-full">
        <div className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 rounded-2xl border-2 border-stone-200/80 overflow-hidden">
              {image ? (
                <img 
                  src={image} 
                  alt={name} 
                  className={`w-full h-full object-cover ${name === 'Shanada Anderson' ? 'scale-125 translate-y-2' : name === 'Anthony Obi' ? 'scale-125' : name === 'Michael Flynn' ? 'scale-[1.02]' : ''}`}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-amber-100 text-amber-700 text-xl font-barlow font-semibold">
                  {getInitials(name)}
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-xl font-barlow font-semibold text-stone-800 mb-1">
                {name}
              </h3>
              <p className="text-sm font-barlow font-medium text-amber-400 mb-3">
                {role}
              </p>
            </div>

            <div className="w-full pt-3 border-t border-stone-100">
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-3"
                >
                  <p className="text-sm text-stone-500 font-barlow leading-relaxed">
                    {bio}
                  </p>
                </motion.div>
              )}
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full text-amber-700 hover:text-amber-800 hover:bg-amber-50 font-barlow"
              >
                {isExpanded ? (
                  <>Close Bio <ChevronUp className="ml-1 h-4 w-4" /></>
                ) : (
                  <>Read Bio <ChevronDown className="ml-1 h-4 w-4" /></>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
