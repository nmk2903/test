import { Drawer, Table } from "antd";
import React, { useState } from "react";
import { Loader } from "../../../componenets/cores";
import { userColumns } from "../../../@type/admin.type";
import AdminCreateUser from "../../../modules/admin/AdminCreateUser";
import AdminContentHeader from "../../../modules/admin/AdminContentHeader";

const userData: any = [
    {
        id: 1,
        firstName: "test",
        lastName: "test",
        dateCreate: "2023-06-08",
        email: "124",
    },
    {
        id: 2,
        firstName: "test",
        lastName: "test",
        dateCreate: "2023-06-08",
        email: "124",
    },
];
const title = "User Management";
const titleDrawer = "UPDATE USER";
const AdminUser = () => {
    const [visible, setVisible] = useState(false);
    const [dataSource, setDataSource] = useState(userData);
    const [searchValue, setSearchValue] = useState("");

    // useEffect(() => {
    //     if (data) {
    //         let i = 0;
    //         const newData = data.getAllUsers.map((data: any) => {
    //             return {
    //                 ...data,
    //                 ...{ id: ++i },
    //                 ...{ password: "***************" },
    //             };
    //         });
    //         setDataSource(
    //             newData.filter(
    //                 (entry: {
    //                     firstName: string | string[];
    //                     lastName: string | string[];
    //                 }) => {
    //                     const splitSearchValue = searchValue.split(" ");
    //                     let [first, second]: string[] = splitSearchValue;
    //                     if (entry.firstName === null) {
    //                         entry.firstName = "";
    //                     }
    //                     if (entry.lastName === null) {
    //                         entry.lastName = "";
    //                     }
    //                     return (
    //                         entry.firstName.includes(first) ||
    //                         entry.lastName.includes(second) ||
    //                         entry.firstName.includes(second) ||
    //                         entry.lastName.includes(first)
    //                     );
    //                 }
    //             )
    //         );
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [data, searchValue]);

    const onClose = () => {
        setVisible(false);
        setContentDrawer(<></>);
    };
    const [contentDrawer, setContentDrawer] = useState(<></>);
    const showDrawer = (record: any) => {
        setVisible(true);
        setContentDrawer(
            <AdminCreateUser
                visibleProp={setVisible}
                dataProp={record}
                id={record.username}
            />
        );
    };
    return (
        <>
            <AdminContentHeader
                title={title}
                setSearchValue={setSearchValue}
                current={1}
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
                    columns={userColumns}
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
};

export default AdminUser;
