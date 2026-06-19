export default function CustomInput({ label, invalid, ...props }) {
  return (
    <p>
      <label
        className={`
          block
          mb-2
          text-xs
          font-bold
          uppercase
          tracking-widest
          ${invalid ? 'text-red-400' : 'text-gray-500'}
        `}
      >
        {label}
      </label>

      <input
        {...props}
        className={`
          w-full
          px-4
          py-3
          leading-6
          rounded
          border
          shadow-sm
          ${
            invalid
              ? 'bg-red-200 text-red-500 border-red-500'
              : 'bg-gray-300 text-gray-700 border-transparent'
          }
        `}
      />
    </p>
  );
}
