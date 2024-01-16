import { NavigationWrapper } from './Navigation.styles';
import { NavigationProps } from './Navigation.types';
import { Page } from 'contentlayer/generated';
import Link from 'next/link';

const Navigation = ({
                          children,
                          onClick,
                          textColor,
                          backgroundColor,
                          ...rest
                      }: NavigationProps) => {
    return (
            <NavigationWrapper
                onClick={onClick}
                textColor={textColor}
                backgroundColor={backgroundColor}
                {...rest}
            >
                {children}
            </NavigationWrapper>
    );
};

export default Navigation;
