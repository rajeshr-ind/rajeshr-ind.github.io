// src/components/InitialsAvatar.tsx
import React from 'react';

const stringToColor = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 70%, 55%)`;   // vibrant, good contrast
};

const getInitials = (name: string) => {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  return parts.length >= 2
    ? (parts[0][0] + parts[1][0]).toUpperCase()
    : parts[0].slice(0, 2).toUpperCase();
};

interface Props {
  name: string;
  size?: number;
  forceColor?: string;
}

export default function InitialsAvatar({ name, size = 36, forceColor }: Props) {
  const bgColor = forceColor || stringToColor(name);
  const initials = getInitials(name);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{borderRadius: '50%', display: 'block'}}
    >
      <circle cx="50" cy="50" r="50" fill={bgColor} />
      <text
        x="50"
        y="50"
        dominantBaseline="central"
        textAnchor="middle"
        fill="white"
        fontSize="52"
        fontWeight="bold"
        fontFamily="system-ui, sans-serif"
      >
        {initials}
      </text>
    </svg>
  );
}