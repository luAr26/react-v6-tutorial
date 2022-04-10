import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";
import "./invoice.style.scss";

export default function Invoice() {
  let navigate = useNavigate();
  let location = useLocation();
  const { invoiceId } = useParams();
  const invoice = getInvoice(invoiceId);

  const handleClick = () => {
    deleteInvoice(invoice.number);
    navigate("/invoices" + location.search);
  };

  return (
    <main className="invoice-container">
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button className="btn btn-danger" onClick={handleClick}>
          Delete invoice &#10005;
        </button>
      </p>
    </main>
  );
}
