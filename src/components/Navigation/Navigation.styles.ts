import styled from 'styled-components';
import { styleProps } from './Navigation.types';
import tw from 'twin.macro';

export const NavigationWrapper = styled.button<styleProps>`
  ${tw`mt-4 py-3 px-4 text-sm font-semibold rounded-lg text-gray-600 hover:text-gray-800 flex justify-center items-center 
  text-black cursor-pointer capitalize bg-gray-300 hover:bg-gray-400`};
  // using css
  ${({ textColor }) => textColor && `color: ${textColor};`}
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}
`;
