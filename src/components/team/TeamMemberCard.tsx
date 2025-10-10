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

  // Generate initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="warm-card floating-card h-full">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <Avatar className="h-24 w-24 border-4 border-amber-100">
              <AvatarImage src={image} alt={name} className="object-cover" />
              <AvatarFallback className="bg-gradient-to-br from-orange-400 to-amber-500 text-white text-xl font-semibold">
                {getInitials(name)}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {name}
              </h3>
              <p className="text-sm font-medium text-primary mb-3">
                {role}
              </p>
            </div>

            <div className="w-full pt-3 border-t border-amber-100">
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-3"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {bio}
                  </p>
                </motion.div>
              )}
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full text-primary hover:text-primary hover:bg-amber-50"
              >
                {isExpanded ? (
                  <>
                    Close Bio <ChevronUp className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Read Bio <ChevronDown className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeamMemberCard;
