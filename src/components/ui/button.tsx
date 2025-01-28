
import React from 'react';


interface SignupButtonProps {
  loading: boolean;
  disabled?: boolean;
  title?: string;
  type?: any;
}

const SignupButton: React.FC<SignupButtonProps> = ({
  loading,
  disabled = false,
  title = 'Sign up',
  type
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"}
    >
      {loading ? (
         <svg
                    className="animate-spin h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-label="Loading"
                    >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                    </svg>
      ) : (
        title
      )}
    </button>
  );
};

export default SignupButton;