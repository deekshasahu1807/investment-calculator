import Input from "./Input";

export default function UserInput({userInput, onChangeInput}) {
  console.log("UserInput component rendered");

  return (
    <section id="user-input">
      <div className="input-group">
        <Input label="INITIAL INVESTMENT" id="initialInvestment" initialValue={userInput.initialInvestment} onChange={onChangeInput} />
        <Input label="ANNUAL INVESTMENT" id="annualInvestment" initialValue={userInput.annualInvestment} onChange={onChangeInput} />
      </div>
      <div className="input-group">
        <Input label="EXPECTED RETURN" id="expectedReturn" initialValue={userInput.expectedReturn} onChange={onChangeInput} />
        <Input label="DURATION" id="duration" initialValue={userInput.duration} onChange={onChangeInput} />
      </div>
    </section>
  );
}
