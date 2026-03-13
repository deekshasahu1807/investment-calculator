import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({userInput}) {
    console.log("Result component rendered");

    const investmentResults = calculateInvestmentResults(userInput);
    const initialInvestment = investmentResults[0].valueEndOfYear - investmentResults[0].interest - investmentResults[0].annualInvestment;

    console.log("Investment Data : ", investmentResults);

    return (
        <div className="center">
            <table id="result">
                <thead>
                    <tr>
                        <td>Year</td>
                        <td>Investment Value</td>
                        <td>Interest(Year)</td>
                        <td>Total Interest</td>
                        <td>Invested Capital </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        investmentResults && investmentResults.map((result) => {
                            console.log("investmentResults result : ", result);

                            const { year, valueEndOfYear, interest, annualInvestment } = result;

                            const totalInterest = valueEndOfYear - annualInvestment * year - initialInvestment;
                            const totalAmountInvested = valueEndOfYear - totalInterest;
                            
                            return (
                                <tr key={year}>
                                    <td>{year}</td>
                                    <td>{formatter.format(valueEndOfYear)}</td>
                                    <td>{formatter.format(interest)}</td>
                                    <td>{formatter.format(totalInterest)}</td>
                                    <td>{formatter.format(totalAmountInvested)}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}