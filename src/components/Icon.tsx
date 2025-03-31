import React from 'react';
import { IconType, IconBaseProps } from 'react-icons';

interface IconProps {
  icon: IconType;
  size?: number;
  className?: string;
}

/**
 * Icon component wrapper to properly handle React Icons with TypeScript
 * This fixes the type error: 'IconType' is not a valid JSX element
 */
const Icon: React.FC<IconProps> = ({ icon: IconComponent, size = 24, className = '' }) => {
  // Cast the IconComponent to any to avoid TypeScript errors
  const Component = IconComponent as React.ComponentType<IconBaseProps>;
  return <Component size={size} className={`inline ${className}`} />;
};

export default Icon; 