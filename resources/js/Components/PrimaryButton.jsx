export default function PrimaryButton({className = '', disabled, children, ...props}) {
  return (
    <button
      {...props}
      className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
