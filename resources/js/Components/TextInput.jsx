import {forwardRef, useEffect, useRef} from 'react';

export default forwardRef(function TextInput({type = 'text', className = '', isFocused = false, ...props}, ref) {
  const input = ref ? ref : useRef();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <input
      {...props}
      type={type}
      className="w-full mt-5 px-8 py-1 md:py4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
      ref={input}
    />
  );
});
