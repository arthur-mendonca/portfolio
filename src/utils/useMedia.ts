import { useState, useEffect } from "react";

export const useMedia = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        setMatches(media.matches);

        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        if (media.addEventListener) {
            media.addEventListener("change", listener);
        } else {
            // Compatibility for older browsers
            media.addListener(listener as any);
        }

        return () => {
            if (media.removeEventListener) {
                media.removeEventListener("change", listener);
            } else {
                // Compatibility for older browsers
                media.removeListener(listener as any);
            }
        };
    }, [query]);

    return matches;
};
