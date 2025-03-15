import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}
const SectionTag = ({
  children,
  className,
  icon = <Sparkles className="h-3 w-3" />
}: SectionTagProps) => {
  return;
};
export default SectionTag;