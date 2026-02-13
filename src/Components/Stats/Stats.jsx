import { useEffect, useState } from "react";
import "./stats.css";

function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [target]);

  return <h1>{count.toLocaleString()}</h1>;
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stat-card">
        <Counter target={50234} />
        <p>Products</p>
      </div>

      <div className="stat-card">
        <Counter target={56} />
        <p>ERP's</p>
      </div>

      <div className="stat-card">
        <Counter target={1453} />
        <p>Hours Of Support</p>
      </div>

      <div className="stat-card">
        <Counter target={50} />
        <p>Crore Transactions</p>
      </div>
    </section>
  );
}
