import { styled, keyframes } from '@mui/material/styles';
import { CircleNotch } from '@phosphor-icons/react';

const tick = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const StyledLoadingIcon = styled(CircleNotch)(() => ({
  animation: `${tick} 1s steps(30, end) infinite`,
}));
