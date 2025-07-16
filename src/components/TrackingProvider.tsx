import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackingService } from '@/services/trackingService';

interface TrackingProviderProps {
  children: React.ReactNode;
}

export const TrackingProvider: React.FC<TrackingProviderProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Track the current page visit
    trackingService.trackPageVisit(location.pathname + location.search);
  }, [location]);

  return <>{children}</>;
};