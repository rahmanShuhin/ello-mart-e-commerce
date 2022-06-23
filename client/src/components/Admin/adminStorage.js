import Dashboard from "./Dashboard/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HomeIcon from "@mui/icons-material/Home";
import ProductList from "./Product/ProductList";
import ProductAdd from "./Product/ProductAdd";

export const sideBarData = [
  {
    menu: "Dashboard",
    icon: <HomeIcon />,
    render: <Dashboard />,
  },
  {
    menu: "Products",
    icon: <LocalShippingIcon />,
    render: <ProductList />,
  },
  {
    menu: "Product Add",
    icon: <LocalShippingIcon />,
    render: <ProductAdd />,
  },
  {
    menu: "Orders",
    icon: <LocalShippingIcon />,
    render: <ProductList />,
  },
];
