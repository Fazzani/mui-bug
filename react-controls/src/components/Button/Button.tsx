'use client';

import { FC } from 'react';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { StyledButton } from './Button.styles';
import { LoadingIcon } from '../../assets/icons/LoadingIcon';
import { Button as Button2 } from '@mui/material';
export type ButtonColors = 'primary' | 'secondary' | 'error' | 'success';
export type ButtonSizes = 'large' | 'medium' | 'small';
export type ButtonVariants = 'contained' | 'outlined' | 'text';

export interface ButtonProps extends MuiButtonProps {
  color?: ButtonColors;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  size?: ButtonSizes;
  variant?: ButtonVariants;
}

export const Button: FC<ButtonProps> = ({
  color = 'primary',
  disabled = false,
  fullWidth = false,
  loading = false,
  size = 'medium',
  variant = 'contained',
  children,
  ...otherProps
}) => {
  const loadingIconSize = size === 'large' ? 24 : 16;

  return (
    <StyledButton
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      size={size}
      variant={variant}
      {...otherProps}
    >
      {loading ? <LoadingIcon size={loadingIconSize} /> : children}
    </StyledButton>
  );
};

export const MuiButton: FC<ButtonProps> = ({
  color = 'primary',
  disabled = false,
  fullWidth = false,
  size = 'medium',
  variant = 'contained',
  children,
  ...otherProps
}) => {
  return (
    <StyledButton color={color} disabled={disabled} fullWidth={fullWidth} size={size} variant={variant} {...otherProps}>
      {children}
    </StyledButton>
  );
};


export const MuiButton2: FC<ButtonProps> = ({
  color = 'primary',
  disabled = false,
  fullWidth = false,
  size = 'medium',
  variant = 'contained',
  children,
  ...otherProps
}) => {
  return (
    <Button2 color={color} disabled={disabled} fullWidth={fullWidth} size={size} variant={variant} {...otherProps}>
      {children}
    </Button2>
  );
};
