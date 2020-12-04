import React, { Component } from 'react';
import { db } from '../../firebaseConnect';
import { Table, Button, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        sorter: (a, b) => a.id - b.id,
        sortDirections: ['ascend'],
    },
    {
        title: 'Name',
        dataIndex: 'title',
        sorter: (a, b) => a.title.length - b.title.length,
        sortDirections: ['ascend'],
    },
    {
        title: 'Address',
        dataIndex: 'address',
        
    },
    {
        title: 'Lat',
        dataIndex: 'lat',
    },
    {
        title: 'Lon',
        dataIndex: 'lon',
    },
    {
        title: 'Action',
        dataIndex: 'id',
        // render: () => <><DeleteOutlined /><EditOutlined /></>,
        align: 'center',
        render: () => {
          return (
            <div>
              <Button
                icon={<EditOutlined />}
                // onClick={() => this.goToEdit(row)}
              />
              <Popconfirm
                title="Are you sure？"
                okText="Yes"
                cancelText="No"
                // onConfirm={() => onDelete(row._id)}
              >
                <Button icon={<DeleteOutlined />} />
              </Popconfirm>
            </div>
          );
        }
    }
];

class ShowAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            selectedRowKeys: [], // Check here to configure the default column
        }
    }

    componentDidMount() {
        let user = [];
        db.collection("geo").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    user.push(doc.data());
                });
                this.setState({
                    user: user
                })
            });
    }

    render() {
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                <span style={{ marginLeft: 8 }}>
                        
                </span>
                </div>
                <Table columns={columns} dataSource={this.state.user} />
            </div>
        );
    }
}

export default ShowAddress;
