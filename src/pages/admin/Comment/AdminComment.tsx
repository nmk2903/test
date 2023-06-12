import { useState } from "react";
import "../../../sass/Admin/Admin.scss";
import { Drawer, Table } from "antd";
import { commentColumns } from "../../../@type/admin.type";
import { AdminAddComment, AdminContentHeader } from "../../../modules";

function AdminComment() {
    //   const comments = useQuery(getAllComments);

    const title = "Comment Management";
    const initialValues: any[] = [];
    const [dataSource, setDataSource] = useState(initialValues);
    const [searchValue, setSearchValue] = useState("");

    // useEffect(() => {
    //     if (comments.data) {
    //         let i = 0;
    //         const newData = comments.data.getAllComments.map((data: any) => {
    //             return { ...data, ...{ id: ++i } };
    //         });

    //         setDataSource(
    //             newData.filter((entry: any) => {
    //                 return entry.content.includes(searchValue);
    //             })
    //         );
    //     }
    // }, [comments.data, searchValue]);
    const [visible, setVisible] = useState(false);
    const titleDrawer = "UPDATE COMMENT";
    const onClose = () => {
        setVisible(false);
        setContentDrawer(<></>);
    };
    const [contentDrawer, setContentDrawer] = useState(<></>);
    const showDrawer = (record: { id: number }) => {
        setVisible(true);
        setContentDrawer(
            <AdminAddComment visibleProp={setVisible} dataProp={record} />
        );
    };
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
            <Table
                size="small"
                columns={commentColumns}
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
        </>
    );
}

export default AdminComment;
