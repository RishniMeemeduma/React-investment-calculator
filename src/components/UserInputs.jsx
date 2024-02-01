export default function UserInputs({handleChange, userInputs}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                <label htmlFor="">Initial Investment</label>
                <input type="number"  name="initial_investment" value={userInputs.initialInvestment} onChange={(event) => handleChange('initialInvestment', event.target.value)}/>
                </p>
                <p>
                <label htmlFor="">Annual Investment</label>
                <input type="number"  name="annual_investment" value={userInputs.annualInvestment} onChange={(event) => handleChange('annualInvestment',  event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                <label htmlFor="">Expected Return</label>
                <input type="number"  name="expected_return" value={userInputs.expectedReturn} onChange={(event) => handleChange('expectedReturn',  event.target.value)}/>
                </p>
                <p>
                <label htmlFor="">Duration</label>
                <input type="number"  name="duration" value={userInputs.duration} onChange={(event) => handleChange('duration',  event.target.value)}/>
                </p>
            </div>
        </section>
    )
}