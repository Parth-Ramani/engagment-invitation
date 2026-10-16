/**
 * Audio Engine for Parth & Ankita Engagement Invitation
 * 
 * Plays MP3 background music in a continuous loop when the user opens the invitation.
 * Allows muting / pausing from the top-right music button.
 * 
 * PLACE YOUR MP3 FILE AT:
 * /public/audio/invitation.mp3
 * (Alternative names supported: /public/audio/music.mp3 or /public/music.mp3)
 */

type StateListener = (isPlaying: boolean) => void;

class InvitationAudioPlayer {
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;
  private listeners = new Set<StateListener>();
  private audioSources = [
    "/audio/invitation.mp3",
    "/audio/music.mp3",
    "/music.mp3",
  ];
  private currentSourceIndex = 0;

  constructor() {
    // Lazy initialized when user opens invitation to prevent initial bandwidth congestion
  }

  private initAudio() {
    if (this.audio || typeof window === "undefined") return;

    try {
      this.audio = new Audio();
      this.audio.loop = true;
      this.audio.preload = "none";
      this.audio.volume = 0.75;
      this.audio.src = this.audioSources[this.currentSourceIndex];

      this.audio.addEventListener("play", () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener("pause", () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener("ended", () => {
        // Enforce continuous loop if loop attribute is somehow not honored
        if (this.audio) {
          this.audio.currentTime = 0;
          this.audio.play().catch(() => {});
        }
      });

      this.audio.addEventListener("error", () => {
        // Try fallback source if available
        if (this.currentSourceIndex < this.audioSources.length - 1) {
          this.currentSourceIndex++;
          if (this.audio) {
            this.audio.src = this.audioSources[this.currentSourceIndex];
            if (this.isPlaying) {
              this.audio.play().catch(() => {});
            }
          }
        }
      });
    } catch (e) {
      console.warn("Audio initialization notice:", e);
    }
  }

  public play(): Promise<void> | void {
    if (typeof window === "undefined") return;
    this.initAudio();

    if (!this.audio) return;

    // Reset source to primary if it was changed
    if (!this.audio.src) {
      this.audio.src = this.audioSources[0];
    }

    return this.audio
      .play()
      .then(() => {
        this.isPlaying = true;
        this.notify();
      })
      .catch((err) => {
        // Autoplay may be restricted if called without user interaction
        // Or file not yet placed by the user
        console.info(
          "Audio playback waiting for user action or MP3 file at /public/audio/invitation.mp3:",
          err?.message
        );
      });
  }

  public pause(): void {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
      this.notify();
    }
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

  public subscribe(listener: StateListener): () => void {
    this.listeners.add(listener);
    listener(this.isPlaying);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => {
      try {
        listener(this.isPlaying);
      } catch (e) {
        console.error(e);
      }
    });
  }
}

export const ambientAudio =
  typeof window !== "undefined" ? new InvitationAudioPlayer() : null;
