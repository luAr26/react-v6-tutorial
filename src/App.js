import "./App.scss";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container mt-5">
      <header style={{ marginBottom: "2rem", borderBottom: "1px solid #333" }}>
        <h2>Bookkeeper!</h2>
        <p>
          <Link to="/invoices">Invoices</Link>{" "}
          <Link to="/expenses">Expenses</Link>
        </p>
      </header>

      <Outlet />
    </div>
  );
}

export default App;
