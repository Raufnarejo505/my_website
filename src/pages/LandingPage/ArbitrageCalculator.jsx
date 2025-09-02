// src/pages/ArbitrageCalculator/ArbitrageCalculator.jsx
import React, { useState } from "react";
import styles from "./ArbitrageCalculator.module.css";

const ArbitrageCalculator = () => {
  const [stake, setStake] = useState("");
  const [oddsA, setOddsA] = useState("");
  const [oddsB, setOddsB] = useState("");
  const [strategy, setStrategy] = useState("A"); // Strategy A or B
  const [result, setResult] = useState(null);

  const calculateArb = () => {
    if (!stake || !oddsA || !oddsB) return;

    const s = parseFloat(stake);
    const a = parseFloat(oddsA);
    const b = parseFloat(oddsB);

    const invA = 1 / a;
    const invB = 1 / b;
    const totalInv = invA + invB;

    if (strategy === "A") {
      // ✅ Strategy A: Risk-free arbitrage
      if (totalInv < 1) {
        const stakeA = (s * invA) / totalInv;
        const stakeB = (s * invB) / totalInv;
        const payout = s / totalInv;
        const profit = payout - s;
        const roi = (profit / s) * 100;

        setResult({
          strategy: "A",
          stakeA: stakeA.toFixed(2),
          stakeB: stakeB.toFixed(2),
          payout: payout.toFixed(2),
          profit: profit.toFixed(2),
          roi: roi.toFixed(2),
        });
      } else {
        setResult({ error: "No arbitrage opportunity (Strategy A)" });
      }
    } else {
      // ✅ Strategy B: Weighted arbitrage (favor outcome A)
      const stakeA = (s * invA) / totalInv + (s * 0.05); // add 5% weighting on A
      const stakeB = s - stakeA;

      const payoutA = stakeA * a;
      const payoutB = stakeB * b;

      const profitA = payoutA - s;
      const profitB = payoutB - s;

      setResult({
        strategy: "B",
        stakeA: stakeA.toFixed(2),
        stakeB: stakeB.toFixed(2),
        payoutA: payoutA.toFixed(2),
        payoutB: payoutB.toFixed(2),
        profitA: profitA.toFixed(2),
        profitB: profitB.toFixed(2),
      });
    }
  };

  return (
    <div className={styles.calculator}>
      <h2>Arbitrage Calculator</h2>

      <div className={styles.form}>
        <input
          type="number"
          placeholder="Total Stake ($)"
          value={stake}
          onChange={(e) => setStake(e.target.value)}
        />
        <input
          type="number"
          placeholder="Odds Team A"
          value={oddsA}
          onChange={(e) => setOddsA(e.target.value)}
        />
        <input
          type="number"
          placeholder="Odds Team B"
          value={oddsB}
          onChange={(e) => setOddsB(e.target.value)}
        />

        {/* Strategy Toggle */}
        <div className={styles.strategyToggle}>
          <label>
            <input
              type="radio"
              value="A"
              checked={strategy === "A"}
              onChange={() => setStrategy("A")}
            />
            Strategy A (Risk-Free)
          </label>
          <label>
            <input
              type="radio"
              value="B"
              checked={strategy === "B"}
              onChange={() => setStrategy("B")}
            />
            Strategy B (Weighted)
          </label>
        </div>

        <button onClick={calculateArb}>Calculate</button>
      </div>

      {result && (
        <div className={styles.result}>
          {result.error ? (
            <p>{result.error}</p>
          ) : strategy === "A" ? (
            <>
              <h3>Strategy A: Risk-Free Arbitrage</h3>
              <p>Stake on Team A: ${result.stakeA}</p>
              <p>Stake on Team B: ${result.stakeB}</p>
              <p>Guaranteed Payout: ${result.payout}</p>
              <p>Guaranteed Profit: ${result.profit}</p>
              <p>ROI: {result.roi}%</p>
            </>
          ) : (
            <>
              <h3>Strategy B: Weighted Arbitrage</h3>
              <p>Stake on Team A: ${result.stakeA}</p>
              <p>Stake on Team B: ${result.stakeB}</p>
              <p>If Team A Wins → Payout: ${result.payoutA} | Profit: ${result.profitA}</p>
              <p>If Team B Wins → Payout: ${result.payoutB} | Profit: ${result.profitB}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ArbitrageCalculator;
