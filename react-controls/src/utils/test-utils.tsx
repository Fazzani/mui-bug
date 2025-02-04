import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '../components/ThemeProvider/ThemeProvider';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): ReturnType<typeof render> =>
  render(ui, { wrapper: AllTheProviders, ...options });

// export * from '@testing-library/react';
export { customRender as render };
