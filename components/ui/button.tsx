
export function Button({ children, ...props }: React.HTMLProps<HTMLButtonElement>) {
  return (
    <button
      className="px-4 py-2 rounded bg-white text-black shadow hover:shadow-md transition"
      {...props}
    >
      {children}
    </button>
  );
}
