import { ButtonWrapper } from './Button.styles';
import { ButtonProps } from './Button.types';

const CustomButton = ({
  children,
  onClick,
  textColor,
  backgroundColor,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      textColor={textColor}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {children}
    </ButtonWrapper>
  );
};

export default CustomButton;
