import { fireEvent, render, screen } from '@testing-library/react-native';
import { ReactNode } from 'react';
import { View as MockView } from 'react-native';
import { GlobalModal } from '../GlobalModal';
import { globalModalTestId } from '../__mocks__/globalModal.mock';
import { describe, beforeEach, expect, it, vi } from 'vitest';
import { modalTestId } from '../../__mocks__/modal.mock';

const mockModal = {
  title: 'mockTitle',
  text: 'mockText',
  visible: true,
};

const mockCloseModal = vi.fn();

vi.mock('react-native-linear-gradient', () => {
  return ({ children }: { children: ReactNode }) => {
    return <MockView>{children}</MockView>;
  };
});

vi.mock('../../../../../store/reducers/globalReducer/useGlobalReducer', () => ({
  useGlobalReducer: () => ({
    modal: mockModal,
    closeModal: mockCloseModal,
  }),
}));

describe('GlobalModal', () => {
  beforeEach(() => {
    render(<GlobalModal />);
  });

  it('should render success', () => {
    const globalModal = screen.getByTestId(globalModalTestId.GLOBAL_MODAL_CONTAINER);

    expect(globalModal).toBeDefined();
  });

  it('shuold close modal', () => {
    const buttonClose = screen.getByTestId(modalTestId.MODAL_CLOSE_BUTTON);

    fireEvent.press(buttonClose);

    expect(mockCloseModal).toBeCalled();
  });

  it('shuld render text', () => {
    const text = screen.getByText(mockModal.text);

    expect(text).toBeDefined();
  });

  it('shuld render title', () => {
    const title = screen.getByText(mockModal.title);

    expect(title).toBeDefined();
  });
});
