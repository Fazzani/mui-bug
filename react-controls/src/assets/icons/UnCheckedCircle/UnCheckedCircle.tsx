import { Circle } from '@phosphor-icons/react';
import { styled } from '@mui/material/styles';

const StyledCheckCircle = styled(Circle)(({ theme }) => ({
  color: theme.palette.grey['200'],
  display: 'inline',
  marginRight: theme.spacing(1),
}));

export function UnCheckedCircle() {
  return <StyledCheckCircle size={16} weight="fill" alt="décoché" />;
}
