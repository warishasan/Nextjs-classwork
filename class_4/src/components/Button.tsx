export default function Button({ children }: any) {
  return (
    <button className="bg-gray-400 border h-10 border-gray-300 rounded w-full">
      {children}
    </button>
  );
}
