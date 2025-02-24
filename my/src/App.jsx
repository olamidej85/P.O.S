import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/loginPage';
import DashBoard from './components/dashBoard'; 
import Purchases from './components/purchases';
import PurchaseReturn from './components/purchaseReturn';
import Sales from './components/sales'
import SalesReturns from './components/salesReturns';
import Payments from './components/payments';
import SupplierSection from './components/supplierSection';
import ExpensesSection from './components/expensesSection';
import BalanceTransfer from './components/balanceTransfer';
import Sidebar from './components/sideBar';
import ExpensesCategory from './components/expensesCategory';
import ExpensesSubcategory from './components/expensesSubcategory';
import Quotation from './components/quotation';
import Invoice from './components/invoice';
import InvoiceReturns from './components/invoiceReturns';
import Account from './components/account';
import BalanceAdjustments from './components/balanceAdjustments';
import Transaction from './components/transaction';
import NonInvoice from './components/nonInvoice';
import NonPurchase from './components/nonPurchase';

const App = () => {
  return (
    <Router>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashBoard" element={<DashBoard />} />
        <Route path="/Purchases" element={<Purchases />} />
        <Route path="/PurchaseReturn" element={<PurchaseReturn />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="/SalesReturns" element={<SalesReturns />} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="/supplierSection" element={<SupplierSection />} />
        <Route path="/ExpensesSection" element={<ExpensesSection />} />
        <Route path="/balanceTransfer" element={<BalanceTransfer />} />
        <Route path="/ExpensesCategory" element={<ExpensesCategory />} />
        <Route path="/ExpensesSubcategory" element={<ExpensesSubcategory />} />
        <Route path="/Quotation" element={<Quotation />} />
        <Route path="/Invoice" element={<Invoice />} />
        <Route path="/InvoiceReturns" element={<InvoiceReturns />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Transaction" element={<Transaction />} />
        <Route path="/NonInvoice" element={<NonInvoice />} />
        <Route path="/NonPurchase" element={<NonPurchase />} />
        <Route path="/BalanceAdjustments" element={<BalanceAdjustments />} />
      </Routes>
    </Router>
  );
};

export default App;
