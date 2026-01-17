import React, { useRef, useState } from 'react';

interface MagneticWrapperProps {
  children: React.ReactElement;
  className?: string;
  strength?: number; // How far the element moves (default 0.5)
}

const MagneticWrapper: React.FC<MagneticWrapperProps> = ({ 
  children, 
  className = "", 
  strength = 0.5 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    setPosition({ x: x * strength, y: y * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)' // Spring-like feel
      }}
    >
      {React.cloneElement(children, {
        className: `${children.props.className || ''}`
      })}
    </div>
  );
};

export default MagneticWrapper;