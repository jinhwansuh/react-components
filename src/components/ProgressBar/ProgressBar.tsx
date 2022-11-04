import { useEffect, useState } from 'react';
import styled from 'styled-components';

export interface ProgressBarProps {
  top?: number;
  bottom?: number;
  height?: number;
  color?: string;
  duration: number;
}

function ProgressBar({ duration, ...rest }: ProgressBarProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container style={{ opacity: show ? 1 : 0 }}>
      <StyledProgressBar
        style={{ animationDuration: `${duration}s` }}
        {...rest}
      />
    </Container>
  );
}

const Container = styled.div<Pick<ProgressBarProps, 'height'>>`
  position: relative;
  height: ${(props) => props.height || '20px'};
  width: 100%;
`;

const StyledProgressBar = styled.div<Pick<ProgressBarProps, 'color'>>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color || 'red'};
  animation-name: progress;
  animation-fill-mode: forwards;
  animation-timing-function: linear;

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
