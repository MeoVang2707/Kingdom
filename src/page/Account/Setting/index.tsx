import Button from 'src/component/Button';
import Input from 'src/component/Input';
import { useState } from 'react';
import {
  ModalEmail,
  ModalAddPassword,
  ModalChangePassword,
  ModalForgot,
} from './Modal';

enum ModalName {
  ADD_EMAIL = 'Add Email',
  CHANGE_EMAIL = 'Change Email',
  ADD_PASS = 'Add Password',
  CHANGE_PASS = 'Change Password',
  CREATE_NEW_PASS = 'Creat new password',
  FORGET_PASS = 'Forgot Password',
}

export default function Setting() {
  const [modalName, setModalName] = useState('');
  const onClickOpenModal = (val: string) => () => {
    setModalName(val);
  };

  const onCloseModal = () => {
    setModalName('');
  };

  const onClickAddEmailConfirm = (val: string) => {
    console.log('val', val);
  };

  const onClickAddPassWordConfirm = (pass: string, rePass: string) => {
    console.log('pass', pass, rePass);
  };

  const onForgotPass = () => {
    setModalName(ModalName.FORGET_PASS);
  };

  const onClickChangePasswordConfirm = (
    currPass: string,
    pass: string,
    rePass: string,
  ) => {
    setModalName('');
  };

  const onForgetPassConfirm = (val: string) => {
    setModalName('');
  };

  return (
    <div className="pl-32">
      <div className="text-primary-100 font-semibold text-2xl leading-8">
        General Settings
      </div>

      <div className="mt-6">
        <span className="text-white font-semibold leading-5.5 text-sm">
          Name
        </span>
        <div className="items-center flex pt-1">
          <Input className="w-23rem" classNameInput="w-full" />
          <Button variant="fulfill" className="w-44 ml-4">
            Save change
          </Button>
        </div>
      </div>

      <div className="mt-6">
        <span className="text-white font-semibold leading-5.5 text-sm">
          Email
        </span>
        <div className="items-center flex pt-1">
          <Input
            className="w-23rem"
            classNameInput="w-full"
            // value="jrchards123@gmail.com"
            disabled
            placeholder="Email"
          />
          <Button
            variant="fulfill"
            className="w-44 ml-4"
            // onClick={onClickAddEmail}
          >
            Change
          </Button>
        </div>
      </div>

      <div className="mt-6">
        <span className="text-white font-semibold leading-5.5 text-sm">
          Password
        </span>
        <div className="items-center flex pt-1">
          <Input
            className="w-23rem"
            classNameInput="w-full"
            type="password"
            disabled
            value="123"
          />
          <Button
            variant="fulfill"
            className="w-44 ml-4"
            onClick={onClickOpenModal(ModalName.CHANGE_PASS)}
          >
            Change
          </Button>
        </div>
      </div>

      <ModalEmail
        visible={[ModalName.ADD_EMAIL, ModalName.CHANGE_EMAIL].includes(
          modalName as ModalName,
        )}
        onClickConfirm={onClickAddEmailConfirm}
        onClose={onCloseModal}
      />

      <ModalAddPassword
        visible={[ModalName.ADD_PASS, ModalName.CREATE_NEW_PASS].includes(
          modalName as ModalName,
        )}
        onClickConfirm={onClickAddPassWordConfirm}
        onClose={onCloseModal}
        tittle={
          modalName === ModalName.ADD_PASS
            ? 'Add password'
            : 'Create new password'
        }
      />

      <ModalChangePassword
        visible={modalName === ModalName.CHANGE_PASS}
        onForgotPass={onForgotPass}
        onClose={onCloseModal}
        onClickConfirm={onClickChangePasswordConfirm}
      />

      <ModalForgot
        visible={modalName === ModalName.FORGET_PASS}
        onClose={onCloseModal}
        onClickConfirm={onForgetPassConfirm}
      />
    </div>
  );
}
