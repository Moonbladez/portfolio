import { useEffect, useState } from "react";

interface IWindowSize {
    width: undefined | number;
    height: undefined | number;
}

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<IWindowSize>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};
