
import React from 'react';
import { Pressable, Text } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';


interface SignupButtonProps {
  loading: boolean;
  disabled?: boolean;
  title?: string;
  onPress?: any;
}

const SignupButton: React.FC<SignupButtonProps> = ({
  loading,
  disabled = false,
  title = 'Sign up',
  onPress
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      className={"inline-flex items-center justify-center gap-2  rounded-md disabled:opacity-50 bg-black text-white hover:bg-primary/90 h-9 px-4 py-2 w-full"}
    >
      {loading ? (
        <Svg
          className="animate-spin h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          aria-label="Loading"
        >
          <Circle

            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></Circle>
          <Path

            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></Path>
        </Svg>
      ) : (
        <Text className="text-white text-sm font-medium ">{title}</Text>
      )}
    </Pressable>
  );
};

export default SignupButton;