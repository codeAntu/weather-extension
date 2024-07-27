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
      className={`w-full rounded-xl border border-white/20 bg-white/0 px-1 py-2.5 text-xs   font-bold text-white transition duration-300 hover:border-white/30 hover:bg-white/5`}
      onClick={onClick}
    >
      {children}
      {}
    </button>
  );
}
