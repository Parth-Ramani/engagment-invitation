/**
 * Web Audio API based ambient Indian classical raga synthesizer
 * Generates an ethereal Tanpura drone (Sa-Pa-Sa) combined with gentle
 * Sitar/Flute harmonic resonance and subtle temple chime reflections.
 * Completely offline, zero network requests, zero broken assets.
 */

class IndianAmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private intervalId: number | null = null;
  private droneOscillators: OscillatorNode[] = [];

  // Raga Yaman / Bhupali scale frequencies based on C# (138.59 Hz)
  private readonly baseFreq = 138.59; // C#3
  private readonly notes = [
    138.59, // Sa (C#3)
    155.56, // Re (D#3)
    174.61, // Ga (F3)
    207.65, // Pa (G#3)
    233.08, // Dha (A#3)
    277.18, // Sa' (C#4)
    311.13, // Re' (D#4)
    349.23, // Ga' (F4)
    415.3,  // Pa' (G#4)
    554.37, // Sa'' (C#5)
  ];

  private initContext() {
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public play() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    if (this.isPlaying) return;

    this.isPlaying = true;
    const now = this.ctx.currentTime;

    // Smooth fade in
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(0.22, now + 2.5);

    this.startTanpuraDrone();
    this.startMelodicNotes();
  }

  public pause() {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;
    const now = this.ctx.currentTime;

    // Smooth fade out
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 1.2);

    setTimeout(() => {
      this.stopAll();
      this.isPlaying = false;
    }, 1300);
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private startTanpuraDrone() {
    if (!this.ctx || !this.masterGain) return;

    // 4 strings of Tanpura: Pa (G#3), Sa' (C#4), Sa' (C#4), Sa (C#3)
    const droneFreqs = [
      this.baseFreq * 1.5,   // Pa: G#3
      this.baseFreq * 2.0,   // Sa': C#4
      this.baseFreq * 2.002, // Sa' slight detune for rich beating
      this.baseFreq * 1.0,   // Kharaj Sa: C#3
    ];

    droneFreqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Warm analog Indian instrument timbre
      osc.type = idx === 3 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Lowpass filter for warm acoustic resonance
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(850, this.ctx.currentTime);
      filter.Q.setValueAtTime(2.5, this.ctx.currentTime);

      // Delicate amplitude modulation (tanpura pluck rhythm)
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      this.droneOscillators.push(osc);
    });
  }

  private startMelodicNotes() {
    if (!this.ctx) return;

    let step = 0;
    // Rhythmic soothing bell & flute melody intervals
    const playNextNote = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;

      const noteFreq = this.notes[step % this.notes.length];
      step++;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = "sine";
      osc.frequency.setValueAtTime(noteFreq, this.ctx.currentTime);

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(noteFreq, this.ctx.currentTime);
      filter.Q.setValueAtTime(4, this.ctx.currentTime);

      const t = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.0001, t);
      // Soft gentle chime attack and long reverb tail
      gain.gain.linearRampToValueAtTime(0.07, t + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 3.8);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 4.0);

      // Schedule next note with randomized musical spacing (2.5s to 4.5s)
      const nextDelay = 2600 + Math.random() * 1800;
      this.intervalId = window.setTimeout(playNextNote, nextDelay);
    };

    this.intervalId = window.setTimeout(playNextNote, 1000);
  }

  private stopAll() {
    this.droneOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // already stopped
      }
    });
    this.droneOscillators = [];

    if (this.intervalId !== null) {
      clearTimeout(this.intervalId);
      this.intervalId = null;
    }
  }
}

export const ambientAudio =
  typeof window !== "undefined" ? new IndianAmbientAudioEngine() : null;
