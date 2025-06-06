import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children, className, ...props }) => {
  // In a real app with routing, you'd use your router's Link component here
  return (
    <a 
      href={href} 
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};