import { calculateInvestmentResults, formatter } from "../util/investment"
export default function InvestmentTable({inputs}) {

    const annualData = calculateInvestmentResults(inputs);
    const InitialInvestment = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment;

    return (
            <table id="result">
                <thead>
                    <tr>
                        <th className="center">Year</th>
                        <th className="center">Investment Value</th>
                        <th className="center">Interest (Year)</th>
                        <th className="center">Total Interest</th>
                        <th className="center">Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {annualData.map((value, keyIndex) => {
                        const totalInterest = value.valueEndOfYear - value.annualInvestment * value.year - InitialInvestment;
                        const investedCapital = value.valueEndOfYear - totalInterest;
                        return (
                        <tr key={keyIndex}>
                            <td>{value.year}</td>                        
                            <td>{formatter.format(value.valueEndOfYear)}</td>                        
                            <td>{formatter.format(value.interest)}</td>                        
                            <td>{formatter.format(totalInterest)}</td>                        
                            <td>{formatter.format(investedCapital)}</td>                        
                        </tr>
                        )
                    }
                    )}
                    
                </tbody>
            </table>
        
    )
}