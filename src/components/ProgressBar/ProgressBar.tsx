import { useEffect, useState } from 'react';
import styled from 'styled-components';

export interface ProgressBarProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  height?: number;
  color?: string;
  duration: number;
  width?: string | number;
  position?: string;
}

function ProgressBar({
  duration,
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  height = 20,
  color = 'red',
  width = '100%',
  position = 'absolute',
  ...rest
}: ProgressBarProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      style={{
        opacity: show ? 1 : 0,
      }}
    >
      <StyledProgressBar
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        height={height}
        color={color}
        width={width}
        position={position}
        duration={duration}
        {...rest}
      />
    </Container>
  );
}

const convertWidth = ({ width }: ProgressBarProps) => {
  if (typeof width === 'number') return `${width}px`;
  return width;
};

const Container = styled.div`
  position: relative;
`;

const StyledProgressBar = styled.div<ProgressBarProps>`
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  width: ${convertWidth};
  height: ${(props) => `${props.height}px`};
  background-color: ${(props) => props.color};
  animation-name: progress;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-duration: ${(props) => `${props.duration}s`};

  @keyframes progress {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;

export default ProgressBar;
