export default function Log({ turns }) {
  return (
    <ol className={`max-w-[20rem] text-[#3f3b00] list-none my-8 p-0 text-center`}>
      {turns.map((turn) => (
        <li
          key={`${turn.square.row}${turn.square.col}`}
          className="rounded-md animate-slide-in-from-left my-3"
        >
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
