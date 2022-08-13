export default function BeatTimeIndicator({
  timeBeats,
  currentBeatTime,
}: {
  timeBeats: string[];
  currentBeatTime: string;
}) {
  return (
    <div className="sequencer-row">
      {timeBeats.map((time) => (
        <div
          key={time}
          className={`p-1 h-1 button button--beat ${
            currentBeatTime === time ? "button--active" : ""
          } `}
        >
          <div className="sr-only">{time}</div>
        </div>
      ))}
    </div>
  );
}
