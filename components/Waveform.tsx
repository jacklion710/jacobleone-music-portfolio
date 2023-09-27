import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';

const Waveform = ({ src, isVisible }: { src: string; isVisible: boolean }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isPlaying, setIsPlaying] = useState(false);
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

    const togglePlayPause = () => {
        if (wavesurfer.current) {
            if (isPlaying) {
                wavesurfer.current.pause();
            } else {
                wavesurfer.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    let waveformWidth = '100%';
    if (windowWidth <= 480) {
        waveformWidth = '250%';
    } else if (windowWidth <= 768) {
        waveformWidth = '300%';
    } else {
        waveformWidth = '500%';
    }

    return (
        <div style={{ width: waveformWidth, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div ref={waveformRef} style={{ width: '100%', height: '100px' }}></div>
            {isVisible && (
                <button 
                    onClick={togglePlayPause} 
                    style={{ 
                        marginTop: '50px', 
                        padding: '10px 20px',
                        backgroundColor: 'red',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                        fontSize: '16px',
                        fontWeight: '600'
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = 'purple'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'violet'}
                >
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
            )}
        </div>
    );
};

export default Waveform;