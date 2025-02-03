import { CreateStyled } from '@emotion/styled';

export const withTransientProps: Parameters<CreateStyled>[1] = {
  shouldForwardProp: (propName: string) => !propName.startsWith('$'),
};

export const shouldNotForwardPropsWithKeys =
  <CustomProps>(props: Array<keyof CustomProps>) =>
  (propName: PropertyKey): boolean =>
    !props.map(p => p.toString()).includes(propName.toString());

export const shouldForwardProp =
  <TCustomProps extends Record<string, unknown>>(customProps: ReadonlyArray<keyof TCustomProps>) =>
  (prop: string): boolean =>
    !customProps.includes(prop);
