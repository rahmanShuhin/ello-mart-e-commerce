import Dashboard from "./Dashboard/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HomeIcon from "@mui/icons-material/Home";
import ProductList from "./Product/ProductList";
import ProductAdd from "./Product/ProductAdd";

export const sideBarData = [
  {
    menu: "Dashboard",
    icon: <HomeIcon />,
    subMenu: [
      {
        title: "Dashboard",
        render: <Dashboard />,
      },
    ],
  },
  {
    menu: "Products",
    icon: <LocalShippingIcon />,
    subMenu: [
      {
        title: "Product List",
        render: <ProductList />,
      },
      { title: "Product Add", render: <ProductAdd /> },
    ],
  },
  {
    menu: "Orders",
    icon: <LocalShippingIcon />,
    subMenu: [
      {
        title: "Order List",
        render: <ProductList />,
      },
      { title: "Edit Order", render: <ProductAdd /> },
    ],
  },
];
