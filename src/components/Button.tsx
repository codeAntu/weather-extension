export default function Button({
  children,
  onClick,
  color,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  color?: string;
}) {
  return (
    <button
      className={`text-blue-500 rounded-2xl px-1 py-1.5 w-full hover:bg-blue-500/5 hover:border-blue-500/30 duration-500 font-bold text-sm transition border border-blue-500/20`}
      onClick={onClick}
    >
      {children}
      {}
    </button>
  );
}
