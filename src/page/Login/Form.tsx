import Button from "src/component/Button";
import Input from "src/component/Input";

export default function Form() {
  return (
    <div className="mx-auto p-4 pb-6 border border-accent-500 rounded-lg">
      <div className="flex justify-center items-center">
        <img alt="gmail" src="/assets/images/gmail.svg" />
        <div className="pl-2 text-accent-500 font-bold">Log in with Email</div>
      </div>

      <div className="mt-4">
        <Input classNameInput="w-full" placeholder="Email" />

        <Input
          type="password"
          className="mt-2"
          classNameInput="w-full"
          placeholder="Password"
        />

        <div className="text-right text-accent-500 text-xs mt-2 cursor-pointer">
          Forget password?
        </div>
      </div>

      <div className="my-4 text-warning-500 text-center">
        Wrong username or password. Please try again!
      </div>

      <Button className="w-full" variant="fulfill">
        Log in
      </Button>
    </div>
  );
}
