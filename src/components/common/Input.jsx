function Input({ label, type, error, ...props }) {
  return (
    <div className="mb-5">
      <label
        className={`block pb-1 font-poppins text-lg uppercase font-semibold ${error ? 'text-red-600' : 'text-stone-600'}`}
        htmlFor={label}
      >
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          className={`w-full h-20 p-3 bg-stone-200 rounded-sm focus:outline-none focus:border-b-[0.18rem] ${error ? 'focus:border-b-red-600' : 'focus:border-b-stone-600'} font-poppins text-base font-medium text-stone-700`}
          id={label}
          {...props}
        />
      ) : (
        <input
          className={`w-full h-10 pl-3 pr-3 bg-stone-200 rounded-sm focus:outline-none focus:border-b-[0.18rem] ${error ? 'focus:border-b-red-600' : 'focus:border-b-stone-600'} font-poppins text-base font-medium text-stone-700`}
          id={label}
          type={type}
          {...props}
        />
      )}
    </div>
  );
}

export default Input;
