import { useGlobalReducer } from '../../../../store/reducers/globalReducer/useGlobalReducer';
import Modal from '../Modal';

export type GlobalModalType = {
  visible: boolean;
  title: string;
  text: string;
};

export function GlobalModal() {
  const { modal, closeModal } = useGlobalReducer();

  return (
    <Modal
      title={modal.title}
      text={modal.text}
      visible={modal.visible}
      onCloseModal={closeModal}
    />
  );
}
