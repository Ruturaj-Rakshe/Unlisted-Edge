"use client";
import Lenis from 'lenis';
import { createContext, useContext, useEffect, useState } from 'react';


const SmoothScrollerContext = createContext<Lenis | null>(null);


export const UseSmoothScrollerProvider = () => useContext(SmoothScrollerContext);

export const SmoothScrollerProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [lenisRef, useLenisRef] = useState<Lenis | null>(null);

    useEffect(() => {
        const scroller = new Lenis();
        
        function callingRaf(time: number){
            scroller.raf(time);
            requestAnimationFrame(callingRaf);
        }

        const rafId = requestAnimationFrame(callingRaf);

        useLenisRef(scroller);

        return () => {
            cancelAnimationFrame(rafId);
            scroller.destroy();
        }
    
    }, []);

    return (
        <SmoothScrollerContext.Provider value={lenisRef}>
            {children}
        </SmoothScrollerContext.Provider>
    );


}