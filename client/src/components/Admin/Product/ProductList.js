import React from "react";
import { fakeData } from "../../../assets/data/fakeData";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar } from "@mui/material";
import TopSearch from "./../TopSearch/TopSearch";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function ProductList() {
  return (
    <div className="productsList">
      <TopSearch title="Products" />
      <div className="productList__body">
        <div>
          <table className="admin-table-global">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Product Type</th>
                <th>In Stock</th>
                <th>Discount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Avatar src="https://advergizefiles-bragboxx.netdna-ssl.com/wp-content/uploads/RAW_Pepsico-770x515.jpg" />
                </td>
                <td>{fakeData.title}</td>
                <td>{fakeData.price}</td>
                <td>{fakeData.category}</td>
                <td>{fakeData.stock}</td>
                <td>10%</td>
                <td>Publish</td>
                <td>
                  <DeleteIcon />
                  <EditIcon />
                </td>
              </tr>
              <tr>
                <td>
                  <Avatar src="https://advergizefiles-bragboxx.netdna-ssl.com/wp-content/uploads/RAW_Pepsico-770x515.jpg" />
                </td>
                <td>{fakeData.title}</td>
                <td>{fakeData.price}</td>
                <td>{fakeData.category}</td>
                <td>{fakeData.stock}</td>
                <td>10%</td>
                <td>Publish</td>
                <td>
                  <DeleteIcon />
                  <EditIcon />
                </td>
              </tr>
              <tr>
                <td>
                  <Avatar src="https://advergizefiles-bragboxx.netdna-ssl.com/wp-content/uploads/RAW_Pepsico-770x515.jpg" />
                </td>
                <td>{fakeData.title}</td>
                <td>{fakeData.price}</td>
                <td>{fakeData.category}</td>
                <td>{fakeData.stock}</td>
                <td>10%</td>
                <td>Publish</td>
                <td>
                  <DeleteIcon />
                  <EditIcon />
                </td>
              </tr>
              <tr>
                <td>
                  <Avatar src="https://advergizefiles-bragboxx.netdna-ssl.com/wp-content/uploads/RAW_Pepsico-770x515.jpg" />
                </td>
                <td>{fakeData.title}</td>
                <td>{fakeData.price}</td>
                <td>{fakeData.category}</td>
                <td>{fakeData.stock}</td>
                <td>10%</td>
                <td>Publish</td>

                <td>
                  <DeleteIcon />
                  <EditIcon />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="pagination__table">
            <Stack spacing={2}>
              <Pagination count={10} />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
