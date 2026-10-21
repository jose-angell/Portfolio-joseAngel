import { useSyncExternalStore } from 'react';

export type Route = 'home' | 'projects';

function subscribe(callback: () => void) {
  window.addEventListener('hashchange', callback);
  return () => window.removeEventListener('hashchange', callback);
}

function getSnapshot(): Route {
  return window.location.hash.startsWith('#/projects') ? 'projects' : 'home';
}

export function useHashRoute(): Route {
  return useSyncExternalStore(subscribe, getSnapshot);
}
