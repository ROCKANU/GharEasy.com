"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './MortgageCalculator.module.css';

export default function MortgageCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [principalTotal, setPrincipalTotal] = useState(0);
  const [interestTotal, setInterestTotal] = useState(0);
  const [error, setError] = useState('');

  const calculateMortgage = () => {
    setError('');
    const principal = parseFloat(loanAmount);
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    if (isNaN(principal) || isNaN(monthlyInterestRate) || isNaN(numberOfPayments)) {
      setError('Please enter valid numbers for all fields.');
      setMonthlyPayment(null);
      return;
    }

    const monthly = (
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
    );

    const totalPaid = monthly * numberOfPayments;
    const totalInterest = totalPaid - principal;

    setMonthlyPayment(monthly.toFixed(2));
    setPrincipalTotal(principal.toFixed(2));
    setInterestTotal(totalInterest.toFixed(2));
  };

  return (
    <div className={styles.calculatorSection}>
      <h1 className={styles.fadeIn}>Mortgage Calculator</h1>
      <p className={styles.fadeIn}>Calculate your monthly mortgage payments easily.</p>

      <div className={styles.formSection}>
        <input
          type="number"
          placeholder="Loan Amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          className={styles.inputField}
          min="0"
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className={styles.inputField}
          min="0"
        />
        <input
          type="number"
          placeholder="Loan Term (Years)"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          className={styles.inputField}
          min="0"
        />
        <button className={styles.calculateButton} onClick={calculateMortgage}>
          Calculate
        </button>
      </div>

      {error && (
        <p className={styles.errorMessage}>{error}</p>
      )}

      {monthlyPayment && (
        <>
          <div className={styles.resultSection}>
            <h2>Your Monthly Payment:</h2>
            <p className={styles.result}>₹ {monthlyPayment}</p>
            <p className={styles.breakdown}>Total Principal: ₹ {principalTotal}</p>
            <p className={styles.breakdown}>Total Interest: ₹ {interestTotal}</p>
          </div>

          {/* Chart Section */}
          <div className={styles.chartSection}>
            <h2>Payment Breakdown Over Time</h2>
            <Image
              src="/app/images/chart.png" // Replace with actual chart image path
              alt="Payment Breakdown Chart"
              width={800}
              height={400}
              className={styles.chartImage}
            />
          </div>
        </>
      )}
    </div>
  );
}
