export default function Button({ children, ...props }) {
  return (
    <button
      className="
        px-4
        py-2
        font-semibold
        uppercase
        rounded-md
        text-gray-800
        bg-[#f0b322]
        border-none
        hover:bg-[#f0920e]
      "
      {...props}
    >
      {children}
    </button>
  );
}
