import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; 
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import InventoryIcon from '@mui/icons-material/Inventory';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SavingsIcon from '@mui/icons-material/Savings';
import WeekendIcon from '@mui/icons-material/Weekend';
import PaymentIcon from '@mui/icons-material/Payment';
import PeopleIcon from '@mui/icons-material/People';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import CategoryIcon from '@mui/icons-material/Category';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const navigate = useNavigate();
  const [isExpensesOpen, setIsExpensesOpen] = useState(false); 
  const [isPurchasesOpen, setIsPurchasesOpen] = useState(false); 
const [isSalesOpen, setIsSalesOpen] =useState(false);
const [isCashOpen, setIsCashOpen] =useState(false);
const [isPaymentsOpen, setIsPaymentsOpen] =useState(false);
const [isLoanOpen, setIsLoanOpen] =useState(false);
const [isAssetOpen, setIsAssetOpen]= useState(false);
const [isEmployeesOpen, setIsEmployeesOpen]= useState(false);
const [isProductOpen, setIsProductOpen]= useState(false);
const [isInventoryOpen, setIsInventoryOpen]= useState(false);
const [isClientsOpen, setIsClientsOpen] = useState(false);
const[isSupplierOpen, setIsSupplierOpen]= useState(false);

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <MenuIcon className="menu-icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>
      <Drawer variant="persistent" anchor="left" open={isSidebarOpen}>
        <Box sx={{ width: 250 }}>
          <div className="sidebar-header">
            <ChevronLeftIcon className="close-icon" onClick={() => setIsSidebarOpen(false)} />
          </div>
          <img src="images/logo-black.png" alt="logo" />
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/dashboard")}>
                <ListItemIcon> <HomeIcon/> </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItemButton>
            </ListItem>  

            <h4 className="sub-heading1">ACTIVITIES</h4>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setIsExpensesOpen(!isExpensesOpen)}>  
                <ListItemIcon> <CalculateIcon/> </ListItemIcon>
                <ListItemText primary={"Expenses"} />
                {isExpensesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />} 
              </ListItemButton>
            </ListItem>  

            {isExpensesOpen && (
              <List sx={{ paddingLeft: "20px" }}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expensesCategory")}>
                    <ListItemText primary={"Categories"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expensesSubcategory")}>
                    <ListItemText primary={"Sub Categories"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expensesSection")}>
                    <ListItemText primary={"Expenses list"} />
                  </ListItemButton>
                </ListItem>
              </List>
            )}

            <ListItem disablePadding>
            <ListItemButton onClick={() => setIsPurchasesOpen(!isPurchasesOpen)}>  
                <ListItemIcon> <ShoppingCartIcon/> </ListItemIcon>
                <ListItemText primary={"Purchases"} />
                {isPurchasesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />} 
              </ListItemButton>
            </ListItem>  

            {isPurchasesOpen && (
              <List sx={{ paddingLeft: "20px" }}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/purchases")}>
                    <ListItemText primary={"Purchases List"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/purchaseReturn")}>
                    <ListItemText primary={"Return List"} />
                  </ListItemButton>
                </ListItem>
              </List>
            )}
          
              <ListItem disablePadding>
            <ListItemButton onClick={() => setIsSalesOpen(!isSalesOpen)}>  
                <ListItemIcon> <PointOfSaleIcon/> </ListItemIcon>
                <ListItemText primary={"Sales"} />
                {isPurchasesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />} 
              </ListItemButton>
            </ListItem>  

            {isSalesOpen && (
              <List sx={{ paddingLeft: "20px" }}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/quotation")}>
                    <ListItemText primary={"Quotations List"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/invoice")}>
                    <ListItemText primary={"Invoice List"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expenses/marketing")}>
                    <ListItemText primary={"POS"} />
                  </ListItemButton>
                </ListItem>
              
              <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/invoiceReturns")}>
                    <ListItemText primary={"Returns List"} />
                  </ListItemButton>
                </ListItem>
              </List>
            )}

            <h4 className="sub-heading1">ACCOUNTING</h4>

            <ListItem disablePadding>
            <ListItemButton onClick={() => setIsCashOpen(!isCashOpen)}>  
                <ListItemIcon> <MenuBookIcon/> </ListItemIcon>
                <ListItemText primary={"Cash Book"} />
                {isCashOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />} 
              </ListItemButton>
            </ListItem>  

            {isCashOpen && (
              <List sx={{ paddingLeft: "20px" }}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/account")}>
                    <ListItemText primary={"Account"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/balanceAdjustments")}>
                    <ListItemText primary={"Balance Adjustment"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/balanceTransfer")}>
                    <ListItemText primary={"Balance Transfers "} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/transaction")}>
                    <ListItemText primary={"Transaction History"} />
                  </ListItemButton>
                </ListItem>
              </List>
            )}


          <ListItem disablePadding>
            <ListItemButton onClick={() => setIsPaymentsOpen(!isPaymentsOpen)}>  
                <ListItemIcon> <ReceiptIcon/> </ListItemIcon>
                <ListItemText primary={"Payment"} />
                {isPaymentsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />} 
              </ListItemButton>
            </ListItem>  

            {isPaymentsOpen && (
              <List sx={{ paddingLeft: "20px" }}>
                    <ListItem disablePadding>
            <ListItemButton onClick={() => setIsClientsOpen(!isClientsOpen)}>  
                <ListItemIcon>  </ListItemIcon>
                <ListItemText primary={"Client"} />
                {isClientsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />} 
              </ListItemButton>
            </ListItem>  

            {isClientsOpen && (
              <List sx={{ paddingLeft: "20px" }}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/payments")}>
                    <ListItemText primary={"Invoice"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/nonInvoice")}>
                    <ListItemText primary={"Non Invoice"} />
                  </ListItemButton>
                </ListItem>
              </List>
            )}

<ListItem disablePadding>
            <ListItemButton onClick={() => setIsSupplierOpen(!isSupplierOpen)}>  
                <ListItemIcon> <ReceiptIcon/> </ListItemIcon>
                <ListItemText primary={"Suppliers"} />
                {isSupplierOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />} 
              </ListItemButton>
            </ListItem>  

            {isSupplierOpen && (
              <List sx={{ paddingLeft: "20px" }}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/supplierSection")}>
                    <ListItemText primary={"Purchase"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/nonPurchase")}>
                    <ListItemText primary={"Non Purchase"} />
                  </ListItemButton>
                </ListItem>
              </List>
            )}
              </List>
            )}

             <ListItem disablePadding>
            <ListItemButton onClick={() => setIsLoanOpen(!isLoanOpen)}>  
                <ListItemIcon> <SavingsIcon/> </ListItemIcon>
                <ListItemText primary={"Loan Manaement"} />
                {isLoanOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />} 
              </ListItemButton>
            </ListItem>  

            {isLoanOpen && (
              <List sx={{ paddingLeft: "20px" }}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expenses/travel")}>
                    <ListItemText primary={"Authorities"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expenses/office")}>
                    <ListItemText primary={"Loans"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expenses/marketing")}>
                    <ListItemText primary={"Payments"} />
                  </ListItemButton>
                </ListItem>
              </List>
            )}

          <ListItem disablePadding>
            <ListItemButton onClick={() => setIsAssetOpen(!isAssetOpen)}>  
                <ListItemIcon> <WeekendIcon/> </ListItemIcon>
                <ListItemText primary={"Asset Management"} />
                {isAssetOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />} 
              </ListItemButton>
            </ListItem>  
            {isAssetOpen && (
              <List sx={{ paddingLeft: "20px" }}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expenses/travel")}>
                    <ListItemText primary={"Type"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expenses/office")}>
                    <ListItemText primary={"Assets"} />
                  </ListItemButton>
                </ListItem>
              </List>
            )}

            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/payroll")}>
                <ListItemIcon> <PaymentIcon/> </ListItemIcon>
                <ListItemText primary={"Payroll"} />
              </ListItemButton>
            </ListItem>  


            <h4 className="sub-heading1">PEOPLE</h4>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/clients")}>
                <ListItemIcon> <PeopleIcon/> </ListItemIcon>
                <ListItemText primary={"Clients"} />
              </ListItemButton>
            </ListItem>  

            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/supplier")}>
                <ListItemIcon> <Diversity3Icon/> </ListItemIcon>
                <ListItemText primary={"Supplier"} />
              </ListItemButton>
            </ListItem>  

            <ListItem disablePadding>
            <ListItemButton onClick={() => setIsEmployeesOpen(!isEmployeesOpen)}>  
                <ListItemIcon> <GroupAddIcon/> </ListItemIcon>
                <ListItemText primary={"Employees"} />
                {isEmployeesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />} 
              </ListItemButton>
            </ListItem>  
            {isEmployeesOpen && (
              <List sx={{ paddingLeft: "20px" }}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expenses/travel")}>
                    <ListItemText primary={"Departments"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expenses/office")}>
                    <ListItemText primary={"Employees List"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expenses/office")}>
                    <ListItemText primary={"Increments"} />
                  </ListItemButton>
                </ListItem>
              </List>
            )}

            <h4 className="sub-heading1">INVENTORY</h4>

            <ListItem disablePadding>
              <ListItemButton onClick={() => setIsProductOpen(!isProductOpen)}>  
                <ListItemIcon> <CategoryIcon/> </ListItemIcon>
                <ListItemText primary={"Product"} />
                {isProductOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />} 
              </ListItemButton>
            </ListItem>  

            {isProductOpen && (
              <List sx={{ paddingLeft: "20px" }}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expenses/travel")}>
                    <ListItemText primary={"Categories"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expenses/office")}>
                    <ListItemText primary={"Sub Categories"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expenses/marketing")}>
                    <ListItemText primary={"Product List"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expenses/marketing")}>
                    <ListItemText primary={"Barcode"} />
                  </ListItemButton>
                </ListItem>
              </List>
            )}


<ListItem disablePadding>
              <ListItemButton onClick={() => setIsInventoryOpen(!isInventoryOpen)}>  
                <ListItemIcon> <InventoryIcon/> </ListItemIcon>
                <ListItemText primary={"Inventory"} />
                {isInventoryOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />} 
              </ListItemButton>
            </ListItem>  

            {isInventoryOpen && (
              <List sx={{ paddingLeft: "20px" }}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expenses/travel")}>
                    <ListItemText primary={"View Inventory"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expenses/office")}>
                    <ListItemText primary={"Non Zero Inventory"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/expenses/marketing")}>
                    <ListItemText primary={"Inventory Adjustment"} />
                  </ListItemButton>
                </ListItem>
              </List>
            )}

<h4 className="sub-heading1">Reports</h4>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/clients")}>
                <ListItemIcon> <PeopleIcon/> </ListItemIcon>
                <ListItemText primary={"Balance Sheet"} />
              </ListItemButton>
            </ListItem>  

            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/supplier")}>
                <ListItemIcon> <Diversity3Icon/> </ListItemIcon>
                <ListItemText primary={"Today Report"} />
              </ListItemButton>
            </ListItem>  
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/supplier")}>
                <ListItemIcon> <Diversity3Icon/> </ListItemIcon>
                <ListItemText primary={"Summary Report"} />
              </ListItemButton>
            </ListItem>  
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/supplier")}>
                <ListItemIcon> <Diversity3Icon/> </ListItemIcon>
                <ListItemText primary={"Profit/Loss Report"} />
              </ListItemButton>
            </ListItem>  
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/supplier")}>
                <ListItemIcon> <Diversity3Icon/> </ListItemIcon>
                <ListItemText primary={"Expenses Report"} />
              </ListItemButton>
            </ListItem>  
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/supplier")}>
                <ListItemIcon> <Diversity3Icon/> </ListItemIcon>
                <ListItemText primary={"Item Report"} />
              </ListItemButton>
            </ListItem>  
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/supplier")}>
                <ListItemIcon> <Diversity3Icon/> </ListItemIcon>
                <ListItemText primary={"Inventory Report"} />
              </ListItemButton>
            </ListItem>  
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/supplier")}>
                <ListItemIcon> <Diversity3Icon/> </ListItemIcon>
                <ListItemText primary={"Supplier Payable Report"} />
              </ListItemButton>
            </ListItem>  
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/supplier")}>
                <ListItemIcon> <Diversity3Icon/> </ListItemIcon>
                <ListItemText primary={"Client Receiveable Report"} />
              </ListItemButton>
            </ListItem>  
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/supplier")}>
                <ListItemIcon> <Diversity3Icon/> </ListItemIcon>
                <ListItemText primary={"Sales By User Report"} />
              </ListItemButton>
            </ListItem>  
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/supplier")}>
                <ListItemIcon> <Diversity3Icon/> </ListItemIcon>
                <ListItemText primary={"Collection By User Report"} />
              </ListItemButton>
            </ListItem>  
          </List>
          <Divider />
        </Box>
      </Drawer>
    </div>
  );
};

export default Sidebar;
