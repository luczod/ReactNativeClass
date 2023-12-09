import { fireEvent, render, screen } from '@testing-library/react-native';
import { ReactNode } from 'react';
import { View as MockView } from 'react-native';
import { describe, beforeEach, expect, it, vi } from 'vitest';

import Modal from '../Modal';
import { modalTestId } from '../__mocks__/modal.mock';

vi.mock('react-native-linear-gradient', () => {
  return ({ children }: { children: ReactNode }) => {
    return <MockView>{children}</MockView>;
  };
});

const mockTitle = 'mockTitle';
const mockText = 'mockText';
const mockOnClose = vi.fn();

describe('Modal', () => {
  beforeEach(() => {
    render(
      <Modal
        title={mockTitle}
        text={mockText}
        onCloseModal={mockOnClose}
        testID={modalTestId.MODAL_CONTAINER}
      />,
    );
  });

  it('should render success', () => {
    const modal = screen.getByTestId(modalTestId.MODAL_CONTAINER);

    expect(modal).toBeDefined();
  });

  it('should render title', () => {
    const title = screen.getByText(mockTitle);

    expect(title).toBeDefined();
  });

  it('should render text', () => {
    const text = screen.getByText(mockText);

    expect(text).toBeDefined();
  });

  it('should render button and onPress', () => {
    const button = screen.getByTestId(modalTestId.MODAL_CLOSE_BUTTON);

    expect(button).toBeDefined();

    fireEvent.press(button);

    expect(mockOnClose).toBeCalled();
  });

  it('should render icon and onPress', () => {
    const icon = screen.getByTestId(modalTestId.MODAL_CLOSE_ICON);

    expect(icon).toBeDefined();

    fireEvent.press(icon);

    expect(mockOnClose).toBeCalled();
  });
});
