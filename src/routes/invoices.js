import { Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";
import QueryNavLink from "../components/QueryNavLink";
import "./invoices.styles.scss";

function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  const setActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  const handleChange = (event) => {
    let filter = event.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };
  return (
    <>
      <div className="invoices-container">
        <nav className="invoice-nav">
          <input
            type="text"
            name="filter"
            value={searchParams.get("filter") || ""}
            onChange={handleChange}
          />
          {invoices
            .filter((invoice) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((invoice) => (
              <QueryNavLink
                className="invoice-link"
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
                style={setActiveStyle}
              >
                {invoice.name}
              </QueryNavLink>
            ))}
        </nav>
        <Outlet />
      </div>
    </>
  );
}
export default Invoices;
