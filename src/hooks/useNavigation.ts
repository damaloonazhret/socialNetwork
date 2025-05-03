import { useCallback } from 'react';

type TRoute = '/' | '/profile' | '/messages';

export const useNavigation = () => {
  const navigate = useCallback((route: TRoute) => {
    window.history.pushState({}, '', route);
    // Создаем и диспатчим кастомное событие для оповещения о смене роута
    window.dispatchEvent(new PopStateEvent('popstate'));
  }, []);

  return { navigate };
};
