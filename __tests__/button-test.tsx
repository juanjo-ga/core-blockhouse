import React from 'react';
import { render, screen } from '@testing-library/react-native';


import SignupButton from '../src/components/ui/button';

describe('SignupButton Component', () => {
  test('renders with default props', async () => {
   render(<SignupButton loading={true} />);
    
    const buttonElement = screen.queryByText('Sign up');

    


  });

  
});