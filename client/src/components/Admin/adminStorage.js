import { BsTruck } from "react-icons/bs";
import { FiBox } from "react-icons/fi";
import { MdOutlineAllInbox } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import Dashboard from "./Dashboard/Dashboard";
import ProductAdd from "./Product/ProductAdd";
import ProductList from "./Product/ProductList";

export const sideBarData = [
  {
    menu: "Dashboard",
    icon: <RxDashboard fontSize={20} />,
    render: <Dashboard />,
  },
  {
    menu: "Products",
    icon: <FiBox fontSize={20}/>,
    render: <ProductList />,
  },
  {
    menu: "Create Product",
    icon: <MdOutlineAllInbox fontSize={20}/>,
    render: <ProductAdd />,
  },
  {
    menu: "Orders",
    icon: <BsTruck fontSize={20}/>,
    render: <ProductList />,
  },
];
