import { useBoolean } from '@umijs/hooks';
import Dialog from 'rc-dialog';
import 'rc-dialog/assets/index.css';
import React, { forwardRef, useImperativeHandle } from 'react';
import Icon from '../Icon';
import './index.scss';

export interface ModalProps {
  visible?: boolean;
  children?: React.ReactNode;
  className?: string;
  closeIcon?: React.ReactNode;
  title?: string | React.ReactNode;
  content?: string | React.ReactNode;
  footer?: string | React.ReactNode;
  titleProps?: any;
  onClose?: () => void;
  width?: number;
}

function Modal(props: ModalProps, ref: any) {
  const {
    visible,
    children,
    className,
    closeIcon,
    title,
    content,
    footer,
    titleProps,
    onClose,
    width = 443,
    ...rest
  } = props;

  const { state, setTrue, setFalse } = useBoolean(false);

  useImperativeHandle(ref, () => ({
    setTrue,
    setFalse,
  }));

  const renderTitle = () => {
    return <div className="text-center text-2xl text-accent-500">{title}</div>;
  };

  const renderCloseIcon = (): React.ReactNode => {
    if (closeIcon) return closeIcon;

    return <Icon name="close_square" />;
  };

  return (
    <Dialog
      visible={visible ? visible : state}
      width={width}
      // className={cls([styles.rcModal, className])}
      className={`rcModal ${className}`}
      onClose={visible ? onClose : setFalse}
      closeIcon={renderCloseIcon()}
      maskStyle={{
        backgroundColor: '#1d1d25',
        opacity: 0.7,
      }}
      {...rest}
    >
      {renderTitle()}

      <div className={`${title ? '' : 'pt-10'}`}>{children}</div>
    </Dialog>
  );
}

export default forwardRef(Modal);
