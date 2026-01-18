"use client";

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface LoadingContextType {
    isPageReady: boolean;
}

const LoadingContext = createContext<LoadingContextType>({ isPageReady: false });

export function usePageReady() {
    return useContext(LoadingContext);
}

export function LoadingProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const [isPageReady, setIsPageReady] = useState(false);
    const isFirstMount = useRef(true);
    const prevPathname = useRef(pathname);

    useEffect(() => {
        // 初回マウント時: LoadingScreenの時間を待つ (約2100ms)
        if (isFirstMount.current) {
            isFirstMount.current = false;
            const timer = setTimeout(() => {
                setIsPageReady(true);
            }, 2200);
            return () => clearTimeout(timer);
        }

        // ページ遷移時: PageTransitionの時間を待つ (1200ms)
        if (prevPathname.current !== pathname) {
            setIsPageReady(false);
            prevPathname.current = pathname;

            const timer = setTimeout(() => {
                setIsPageReady(true);
            }, 1300);
            return () => clearTimeout(timer);
        }
    }, [pathname]);

    return (
        <LoadingContext.Provider value={{ isPageReady }}>
            {children}
        </LoadingContext.Provider>
    );
}
