import { twMerge } from 'tailwind-merge';

function Button({ children, type, styles, ...props }) {
  let buttonTypeStyles = 'bg-stone-950 text-white';

  if (type === 'light') {
    buttonTypeStyles = 'bg-white text-stone-950';
  }

  return (
    <button
      className={twMerge(
        `w-24 h-12 rounded-lg font-poppins text-lg font-medium ${buttonTypeStyles}`,
        styles
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
