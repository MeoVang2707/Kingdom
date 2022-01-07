import Button from 'src/component/Button';
import Icon from '../Icon';
import Modal, { ModalProps } from './';

type TypeModal = 'confirm' | 'danger' | 'success';

interface ModalInfoProps extends ModalProps {
  type: TypeModal;
  message: string;
  buttonName: string;
  onClickButton: () => void;
  buttonClassName?: string;
}

const mapIcon = {
  confirm: 'infor_big',
  danger: 'danger_big',
  success: 'success_big',
};

export default function ModalInfo({
  type,
  title,
  message,
  buttonName,
  onClickButton,
  content,
  buttonClassName,
  ...props
}: ModalInfoProps) {
  return (
    <>
      <Modal width={400} {...props}>
        <div className="flex flex-col items-center">
          <Icon name={mapIcon[type]} alt="icon" />
          <div className="mt-4 leading-8 text-white text-2xl font-semibold">
            {title}
          </div>

          <div className="text-primary-100 text-sm mt-2 leading-5.5">
            {message}
          </div>

          {content}

          <Button
            variant="fulfill"
            className={`mt-6 ${buttonClassName}`}
            onClick={onClickButton}
            // {...buttonProps}
          >
            {buttonName}
          </Button>
        </div>
      </Modal>
    </>
  );
}
