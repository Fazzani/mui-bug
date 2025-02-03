'use client';

import { FC } from 'react';
import { StyledLoadingIcon } from './LoadingIcon.styles';

export interface LoadingIconProps {
  size?: number;
}

export const LoadingIcon: FC<LoadingIconProps> = ({ size = 16 }) => {
  return <StyledLoadingIcon size={size} />;
};
