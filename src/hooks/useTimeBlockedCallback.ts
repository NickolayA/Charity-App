import {useRef} from 'react';

export const useTimeBlockedCallback = (
  callback,
  timeBlocked: number = 1000,
) => {
  const isBlockedRef = useRef<boolean>(false);
  const unblockTimeout = useRef<NodeJS.Timeout>(null);

  return (...callbackArgs) => {
    if (!isBlockedRef.current) {
      callback(...callbackArgs);
    }
    clearTimeout(unblockTimeout.current);
    unblockTimeout.current = setTimeout(
      () => (isBlockedRef.current = false),
      timeBlocked,
    );
    isBlockedRef.current = true;
  };
};
