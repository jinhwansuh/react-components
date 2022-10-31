import React, { memo, ReactNode, useMemo } from 'react';
import styled from 'styled-components';

export interface TextProps {
  children: ReactNode;
  size?: 'large' | 'small' | number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginAll?: number;
  id?: string;
  onClick?: React.MouseEventHandler;
  color?: string;
  className?: string;
  bold?: boolean;
}

function Text({
  children,
  size,
  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginAll = 0,
  id,
  onClick,
  color,
  className,
  bold = false,
  ...rest
}: TextProps) {
  const fontSize = useMemo(
    () => (size === 'large' ? 30 : size === 'small' ? 8 : size),
    [size]
  );

  return (
    <StyledText
      size={fontSize}
      marginTop={marginTop || marginAll}
      marginRight={marginRight || marginAll}
      marginBottom={marginBottom || marginAll}
      marginLeft={marginLeft || marginAll}
      id={id}
      onClick={onClick}
      color={color}
      className={className}
      bold={bold}
      {...rest}
    >
      {children}
    </StyledText>
  );
}

const getMargin = ({
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: TextProps): string => {
  return `${marginTop}px , ${marginRight}px, ${marginBottom}px, ${marginLeft}px`;
};

const StyledText = styled.span<TextProps>`
  margin: ${getMargin};
  font-size: ${(props) => `${props.size}px` || 'inherit'};
  color: ${(props) => props.color || 'inherit'};
  font-weight: ${(props) => (props.bold ? '700' : 'normal')};
`;

export default memo(Text);
