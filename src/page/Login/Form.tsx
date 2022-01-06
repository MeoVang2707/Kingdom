import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Button from 'src/component/Button';
import Icon from 'src/component/Icon';
import Input from 'src/component/Input';
import { handleChangeField } from 'src/state/reducer/auth';

export default function Form() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageError, setMessageError] = useState('');
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const res = true;
    if (res) {
      dispatch(
        handleChangeField({
          userInfor: {
            username: 'string',
            email: 'string',
            address: 'string@gmail.com',
            createdDate: ''
          },
        }),
      );

      history.push('/');
    } else {
      // const message = 'This email address is not being verified.';
      setMessageError('Wrong username or password. Please try again!');
    }
  };

  return (
    <div className="mx-auto p-4 pb-6 border border-accent-500 rounded-lg">
      <div className="flex justify-center items-center">
        <Icon name="gmail" />
        <div className="pl-2 text-accent-500 font-bold">Log in with Email</div>
      </div>

      <div className="mt-4">
        <Input
          classNameInput="w-full"
          placeholder="Email"
          onChange={onChangeEmail}
        />

        <Input
          type="password"
          className="mt-2"
          classNameInput="w-full"
          placeholder="Password"
          onChange={onChangePass}
        />

        <div className="text-right text-accent-500 text-xs mt-2 cursor-pointer">
          Forgot password?
        </div>
      </div>

      <div className="my-4 text-warning-500 text-center h-5.5">
        {messageError}
      </div>

      <Button
        className="w-full"
        variant="fulfill"
        disabled={!email || !password}
        onClick={handleLogin}
      >
        Log in
      </Button>
    </div>
  );
}
