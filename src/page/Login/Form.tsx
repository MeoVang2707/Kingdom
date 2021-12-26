import { ChangeEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Button from 'src/component/Button';
import Input from 'src/component/Input';
import { handleChangeField } from 'src/state/reducer/auth';

export default function Form() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    dispatch(
      handleChangeField({
        userInfor: {
          name: 'string',
          email: 'string',
          address: 'string@gmail.com',
          balance: 1000,
        },
      }),
    );

    history.push('/');
  };

  return (
    <div className="mx-auto p-4 pb-6 border border-accent-500 rounded-lg">
      <div className="flex justify-center items-center">
        <img alt="gmail" src="/assets/images/gmail.svg" />
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
          Forget password?
        </div>
      </div>

      <div className="my-4 text-warning-500 text-center">
        Wrong username or password. Please try again!
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
