import { render } from '../../utils/test-utils';
import { Button } from './Button';
import type { ButtonProps } from './Button';
import { act, fireEvent } from '@testing-library/react';

describe('<Button />', () => {
  let props: ButtonProps;
  const onClick = jest.fn();
  const onFocus = jest.fn();
  const onBlur = jest.fn();

  const create = () => {
    return render(<Button {...props} />);
  };

  beforeEach(() => {
    props = {
      onClick: () => {},
      onFocus: () => {},
      onBlur: () => {},
    };
  });

  it('should render a button', () => {
    const { container } = create();

    expect(container).toBeDefined();
  });

  it('should call the onClick callback when button is clicked', () => {
    props.onClick = onClick;
    const { getByRole } = create();

    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should call the onFocus callback when button has focus and then onBlur when blurred', () => {
    props.onFocus = onFocus;
    props.onBlur = onBlur;
    const { getByRole } = create();
    const button = getByRole('button');

    act(() => {
      button.focus();
    });
    expect(onFocus).toHaveBeenCalled();

    act(() => {
      button.blur();
    });
    expect(onBlur).toHaveBeenCalled();
  });
});
