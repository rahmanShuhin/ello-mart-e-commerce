import { useEffect } from 'react';

export function useOnClickOutsideWithSecondRef(ref, ref2, handler) {
    useEffect(
      () => {
        const listener = (event) => {

          if (!ref.current || ref2.current.contains(event.target) || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },

      [ref, ref2, handler]
    );
  }