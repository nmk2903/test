import { Drawer, Table, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { Loader } from "../../../componenets/cores";
import { AdminContentHeader, AdminViewBill } from "../../../modules";
import { billColumn } from "../../../@type/admin.type";
import billService from "../../../services/bill";
import { billPayload } from "../../../@type/bill.type";

function AdminBill() {
    const title = "Bill Management";
    const titleDrawer = "BOOKED PRODUCT LIST";
    
    const [searchValue, setSearchValue] = useState("");
    const [dataSource, setDataSource] = useState<billPayload[]>([]);

    const [visible, setVisible] = useState(false);
    const onClose = () => {
        setVisible(false);
        setContentDrawer(<></>);
    };
    const [contentDrawer, setContentDrawer] = useState(<></>);
    const showDrawer = (record: any) => {
        setVisible(true);
        setContentDrawer(
            <AdminViewBill
                visibleProp={setVisible}
                dataProp={record}
                id={record._id}
            />
        );
    };
    const switchDelivery = (checked:boolean) => {

    };
    useEffect(() => {
        billService.getAllBills().then((data) => {
             setDataSource(data);
        });
        // if (bill.data) {
        //     let i = 0;
        //     const newData = bill.data.getAllBills.map((data: any) => {
        //         return { ...data, ...{ id: ++i } };
        //     });
        //     setDataSource(
        //         newData.filter(
        //             (entry: {
        //                 firstName: string | string[];
        //                 lastName: string | string[];
        //             }) => {
        //                 const splitSearchValue = searchValue.split(" ");
        //                 let [first, second]: string[] = splitSearchValue;
        //                 return (
        //                     entry.firstName.includes(first) ||
        //                     entry.lastName.includes(second) ||
        //                     entry.firstName.includes(second) ||
        //                     entry.lastName.includes(first)
        //                 );
        //             }
        //         )
        //     );
        // }
    }, []);
    return (
        <>
            <AdminContentHeader
                title={title}
                setSearchValue={setSearchValue}
                current={0}
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
            <Switch defaultChecked />
            {true ? (
                <Table
                    size="small"
                    // loading={bill.loading}
                    columns={billColumn}
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

export default AdminBill;
