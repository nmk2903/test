import { Drawer, Table } from "antd";
import { useState } from "react";
import { productColumn } from "../../../@type/admin.type";
import { Loader } from "../../../componenets/cores";
import { AdminAddProduct, AdminContentHeader } from "../../../modules";
import ProductService from "../../../services/products";
// import product from "../../../@type/product.ts";

function AdminProduct() {
    const title = "Product Management";
    const titleDrawer = "UPDATE PRODUCT";
    const initialProduct: any[] | (() => any[]) = [];

    // const product = useQuery(getAllProduct);
    const [searchValue, setSearchValue] = useState("");
    const [dataSource, setDataSource] = useState(initialProduct);

    const [visible, setVisible] = useState(false);
    const onClose = () => {
        setVisible(false);
        setContentDrawer(<></>);
    };
    const [contentDrawer, setContentDrawer] = useState(<></>);
    const showDrawer = (record: any) => {
        setVisible(true);
        setContentDrawer(
            <AdminAddProduct
                visibleProp={setVisible}
                dataProp={record}
                id={record.name}
            />
        );
    };
    // useEffect(() => {
    //     if (product.data) {
    //         let i = 0;
    //         const newData = product.data.getAllProducts.map((data: any) => {
    //             return { ...data, ...{ id: ++i } };
    //         });
    //         setDataSource(
    //             newData.filter((entry: { name: string | string[] }) => {
    //                 return entry.name.includes(searchValue);
    //             })
    //         );
    //     }
    // }, [product.data, searchValue]);
    return (
        <>
            <AdminContentHeader
                title={title}
                setSearchValue={setSearchValue}
                current={2}
                exportData={dataSource}
            />
            <Drawer
                title={titleDrawer}
                placement="right"
                onClose={onClose}
                open={visible}
                size="large"
            >
                {contentDrawer}
            </Drawer>
            {true ? (
                <Table
                    size="small"
                    // loading={product.loading}
                    columns={productColumn}
                    dataSource={dataSource}
                    scroll={{ y: 265 }}
                    onRow={(record, rowIndex) => {
                        return {
                            onDoubleClick: (event) => {
                                showDrawer(record);
                            },
                        };
                    }}
                />
            ) : (
                <Loader />
            )}
        </>
    );
}

export default AdminProduct;
