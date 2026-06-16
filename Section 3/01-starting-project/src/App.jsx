import { useState } from 'react';
import UserInput from './components/UserInput';
import Results from './components/Results';

export default function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      {/* Truyền cả State và Hàm xử lý xuống cho UserInput */}
      <UserInput userInput={userInput} onChange={handleChange} />
      {/* Chia sẻ State này cho cả Results để chuẩn bị tính toán */}
      <Results input={userInput} />
    </>
  );
}
