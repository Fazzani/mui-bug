import { CheckCircle } from '@phosphor-icons/react';
import { styled } from '@mui/material/styles';

const StyledCheckCircle = styled(CheckCircle)(({ theme }) => ({
  color: theme.palette.grey['900'],
  display: 'inline',
  marginRight: theme.spacing(1),
}));

export function CheckedCircle() {
  return <StyledCheckCircle size={16} weight="fill" alt="coché" />;
}
