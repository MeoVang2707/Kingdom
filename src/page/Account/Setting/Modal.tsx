import Button from 'src/component/Button';
import Input from 'src/component/Input';
import Modal from 'src/component/Modal';
import ModalInfo from 'src/component/Modal/ModalInfo';
import { useState } from 'react';

interface ModalEmailProps {
  visible: boolean;
  onClickConfirm: (val: string) => void;
  onClose: () => void;
  title?: string;
}

export const ModalEmail = ({
  visible,
  onClickConfirm,
  title = 'Add email',
  onClose,
}: ModalEmailProps) => {
  const [email, setEmail] = useState('');
  const onClick = () => {
    onClickConfirm(email);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Modal title={title} visible={visible} onClose={onClose}>
      <div className="pt-4">
        <div className="text-primary-100 text-sm leading 5.5 text-center">
          We will send verification code to your new email. Please verify it
          before you can this email to login.
        </div>

        <Input
          classNameInput="w-full"
          className="mt-6"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />

        <Button variant="fulfill" className="w-full mt-6" onClick={onClick}>
          Confirm
        </Button>
      </div>
    </Modal>
  );
};

interface ModalPasswordProps {
  visible: boolean;
  onClickConfirm: (val: string, val2: string) => void;
  onClose: () => void;
  tittle?: string;
}

export const ModalAddPassword = ({
  visible,
  onClickConfirm,
  onClose,
  tittle = 'Add password',
}: ModalPasswordProps) => {
  const [pass, setPass] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const onClick = () => {
    onClickConfirm(pass, repeatPass);
  };

  const onChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  const onChangeRepeatPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPass(e.target.value);
  };

  return (
    <Modal title={tittle} visible={visible} onClose={onClose}>
      <div className="pt-6">
        <Input
          classNameInput="w-full"
          placeholder="Password"
          value={pass}
          onChange={onChangePass}
          type="password"
        />

        <Input
          classNameInput="w-full"
          className="mt-4"
          placeholder="Repeat password"
          value={repeatPass}
          onChange={onChangeRepeatPass}
          type="password"
        />

        <Button variant="fulfill" className="w-full mt-6" onClick={onClick}>
          Confirm
        </Button>
      </div>
    </Modal>
  );
};

interface ModalChangePasswordProps {
  visible: boolean;
  onClickConfirm: (val: string, val2: string, val3: string) => void;
  onClose: () => void;
  onForgotPass: () => void;
}

export const ModalChangePassword = ({
  visible,
  onClickConfirm,
  onClose,
  onForgotPass,
}: ModalChangePasswordProps) => {
  const [pass, setPass] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [currPass, setcurrPass] = useState('');

  const onClick = () => {
    onClickConfirm(currPass, pass, repeatPass);
  };

  const onChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  const onChangeRepeatPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPass(e.target.value);
  };

  const onChangeCurrPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcurrPass(e.target.value);
  };

  return (
    <Modal title="Change password" visible={visible} onClose={onClose}>
      <div className="pt-6">
        <Input
          classNameInput="w-full"
          placeholder="Current password"
          value={currPass}
          onChange={onChangeCurrPass}
          type="password"
        />
        <div
          className="text-right text-accent-500 font-semibold text-xs leading-5 cursor-pointer mt-2"
          onClick={onForgotPass}
        >
          Forget password?
        </div>
        <Input
          classNameInput="w-full mt-4"
          placeholder="Password"
          value={pass}
          onChange={onChangePass}
          type="password"
        />

        <Input
          classNameInput="w-full"
          className="mt-4"
          placeholder="Repeat password"
          value={repeatPass}
          onChange={onChangeRepeatPass}
          type="password"
        />

        <Button variant="fulfill" className="w-full mt-6" onClick={onClick}>
          Confirm
        </Button>
      </div>
    </Modal>
  );
};

interface ModalForgotPass {
  visible: boolean;
  onClickConfirm: (val: string) => void;
  onClose: () => void;
}

export const ModalForgot = ({
  visible,
  onClickConfirm,
  onClose,
}: ModalForgotPass) => {
  const [email, setEmail] = useState('123@gmail.com');
  const onClickButton = () => {
    onClickConfirm(email);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <ModalInfo
      type="confirm"
      title="Forget password?"
      message="We will email you a link to reset your password."
      buttonName="Email me"
      onClickButton={onClickButton}
      visible={visible}
      onClose={onClose}
      buttonClassName="w-full"
      content={
        <Input
          disabled
          value={email}
          classNameInput="w-full"
          className="mt-6 w-full"
          onChange={onChange}
        />
      }
    />
  );
};
