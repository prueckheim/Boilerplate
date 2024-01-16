import styled from 'styled-components';
import { styleProps } from './Button.types';
import tw from 'twin.macro';

export const ButtonWrapper = styled.button<styleProps>`
  ${tw`mt-4 py-3 px-4 text-sm font-semibold rounded-lg text-white flex justify-center items-center text-black cursor-pointer capitalize bg-blue-500`};
  // using css
  ${({ textColor }) => textColor && `color: ${textColor};`}
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}
`;
