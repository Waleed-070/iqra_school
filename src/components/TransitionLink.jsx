import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTransition } from '../context/TransitionContext';

export default function TransitionLink({ to, children, className, onClick, style }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { startTransition } = useTransition();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);

    // If we're already on the page, just scroll to top
    if (location.pathname === to) {
      window.scrollTo(0, 0);
      return;
    }

    startTransition(to, () => {
      navigate(to);
      window.scrollTo(0, 0);
    });
  };

  return (
    <a href={to} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}
