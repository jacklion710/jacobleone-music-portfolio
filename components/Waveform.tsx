import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';

const Waveform = ({ src, isVisible }: { src: string; isVisible: boolean }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const waveformRef = useRef<HTMLDivElement | null>(null);
    const wavesurfer = useRef<WaveSurfer | null>(null);
  
    useEffect(() => {
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useLayoutEffect(() => {
        if (waveformRef.current) {
            wavesurfer.current = WaveSurfer.create({
                container: waveformRef.current,
                waveColor: 'violet',
                progressColor: 'purple'
            });

            wavesurfer.current.load(src);
        }

        return () => {
            wavesurfer.current && wavesurfer.current.destroy();
        };
    }, [src]);

    let waveformWidth = '100%'; // Default width
    if (windowWidth <= 480) { // For mobile devices
        waveformWidth = '250%';
    } else if (windowWidth <= 768) { // For tablets
        waveformWidth = '300%';
    } else { // For desktops and larger devices
        waveformWidth = '500%';
    }

    return <div ref={waveformRef} style={{ width: waveformWidth, height: '100px' }}></div>;
};

export default Waveform;
