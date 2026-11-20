import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

/**
 * Royal Palace Ambiance Sound Synthesizer:
 * Uses Web Audio API to create a gentle, meditative royal tanpura/sitar chord drone
 * with shimmering harmonic overtones. Completely zero external assets, fast, reliable!
 */
export const AudioAmbiance: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const toggleSound = () => {
    if (!isPlaying) {
      startAmbiance();
    } else {
      stopAmbiance();
    }
  };

  const startAmbiance = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 3); // subtle, soothing background
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Royal Indian Raag C# / Sa Pa Sa harmonic fundamental frequencies (Tanpura Tuning: Pa Sa Sa Sa)
      // Base: C#3 (138.59 Hz), G#3 (207.65 Hz), C#4 (277.18 Hz), F#4 (369.99 Hz)
      const frequencies = [138.59, 207.65, 277.18, 369.99, 415.30];

      oscillatorsRef.current = frequencies.map((freq, i) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Gentle undulating LFO modulation for traditional Indian string resonance
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2 + i * 0.1, ctx.currentTime);
        lfoGain.gain.setValueAtTime(freq * 0.008, ctx.currentTime);
        lfo.connect(osc.frequency);
        lfo.start();

        oscGain.gain.setValueAtTime(0.18 / (i + 1), ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start();
        return osc;
      });

      setIsPlaying(true);
    } catch (err) {
      console.warn("Web Audio API not permitted before interaction", err);
    }
  };

  const stopAmbiance = () => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 1.5);
      setTimeout(() => {
        oscillatorsRef.current.forEach((osc) => {
          try { osc.stop(); } catch {}
        });
        audioCtxRef.current?.close();
        audioCtxRef.current = null;
        masterGainRef.current = null;
        oscillatorsRef.current = [];
        setIsPlaying(false);
      }, 1500);
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Mute Royal Ambiance" : "Experience Royal Ambiance (Soft Sitar & Tanpura Soundscape)"}
      className={`group relative flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs uppercase tracking-wider transition-all duration-300 ${
        isPlaying 
          ? 'border-amber bg-amber/10 text-amber shadow-[0_0_15px_rgba(233,154,67,0.3)]' 
          : 'border-gold/40 bg-white/40 text-brown hover:border-gold hover:bg-gold/10'
      }`}
    >
      {isPlaying ? (
        <>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber"></span>
          </span>
          <Volume2 className="h-3.5 w-3.5 text-amber animate-pulse" />
          <span className="hidden sm:inline font-medium">Royal Ambiance: Active</span>
        </>
      ) : (
        <>
          <VolumeX className="h-3.5 w-3.5 text-brown/60 group-hover:text-amber" />
          <Sparkles className="h-3 w-3 text-gold opacity-75" />
          <span className="hidden sm:inline font-medium text-brown/70 group-hover:text-brown">Sound Experience</span>
        </>
      )}
    </button>
  );
};

