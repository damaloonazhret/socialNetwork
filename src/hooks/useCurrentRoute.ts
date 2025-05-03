import { useState, useEffect } from 'react';

type TRoute = '/' | '/profile' | '/messages';

export const useCurrentRoute = () => {
  const [currentRoute, setCurrentRoute] = useState<TRoute>(window.location.pathname as TRoute);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentRoute(window.location.pathname as TRoute);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return currentRoute;
};
