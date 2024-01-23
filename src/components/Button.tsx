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
      className={`text-blue-500 rounded-lg p-1 w-full hover:bg-blue-500/20 font-bold text-sm transition`}
      onClick={onClick}
    >
      {children}
      {}
    </button>
  );
}
