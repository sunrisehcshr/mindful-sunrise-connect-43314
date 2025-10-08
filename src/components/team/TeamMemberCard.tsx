import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Mail, Phone } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  specialties: string[];
  image?: string;
  email?: string;
  phone?: string;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  specialties,
  image,
  email,
  phone,
  index
}) => {
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
              <AvatarImage src={image} alt={name} />
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

            <div className="w-full">
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {specialties.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {(email || phone) && (
              <div className="w-full pt-3 border-t border-amber-100 space-y-2">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="text-xs">{email}</span>
                  </a>
                )}
                {phone && (
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="text-xs">{phone}</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeamMemberCard;
