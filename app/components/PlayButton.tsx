export default function PlayButton({
  isPlaying,
  play,
  stop,
  disabled = false,
}: {
  isPlaying: boolean;
  play: Function;
  stop: Function;
  disabled?: boolean;
}) {
  if (isPlaying) {
    return (
      <button
        disabled={disabled}
        className="button button--delete col-span-7"
        onClick={() => stop()}
      >
        <span>Stop</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  }

  return (
    <button className="button button--submit col-span-7" onClick={() => play()}>
      <span>Play</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
