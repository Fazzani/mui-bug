import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Button, ThemeProvider as UpThemeProvider } from 'design-system';
import { MuiOtpInput } from 'mui-one-time-password-input';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <UpThemeProvider>{children}</UpThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): ReturnType<typeof render> => render(ui, { wrapper: AllTheProviders, ...options });

describe('Component', () => {
  it('should run successfully', async () => {
    const rendered = customRender(<Button />);
  });

  it('MuiOtpInput should run successfully', async () => {
    const rendered = customRender(<MuiOtpInput />);
  });
});
