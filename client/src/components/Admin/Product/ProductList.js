import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PRODUCT_DATA } from "./../../../assets/data/productData";
import TopSearch from "./../TopSearch/TopSearch";

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
                            {PRODUCT_DATA.length > 0 &&
                                PRODUCT_DATA.map((product) => (
                                    <tr key={product.id}>
                                        <td>
                                            <Avatar src={product.images} />
                                        </td>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td>{product.category}</td>
                                        <td>{product.stock}</td>
                                        <td>{product.discount ? product.discount : '-'}</td>
                                        <td>Publish</td>
                                        <td>
                                            <DeleteIcon />
                                            <EditIcon />
                                        </td>
                                    </tr>
                                ))}
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
