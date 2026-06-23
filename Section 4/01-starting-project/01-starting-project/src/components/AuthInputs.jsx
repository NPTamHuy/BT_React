import { useState } from 'react';

import Button from './Button';
import CustomInput from './Input';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      className="
        w-full
        max-w-md
        p-8
        mx-auto
        rounded-lg
        shadow-md
        bg-linear-to-b
        from-[#474232]
        to-[#28271c]
        text-white
      "
    >
      <div className="flex flex-col gap-2 mb-6">
        <CustomInput
          label="Email"
          invalid={emailNotValid}
          type="email"
          value={enteredEmail}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />

        <CustomInput
          label="Password"
          invalid={passwordNotValid}
          type="password"
          value={enteredPassword}
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }
        />
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="
            border-none
            text-[#f0b322]
            hover:text-[#f0920e]
          "
        >
          Create a new account
        </button>

        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
