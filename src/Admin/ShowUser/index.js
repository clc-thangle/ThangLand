import React, { Component } from 'react';
import {db} from './../../firebaseConnect';
import { Table, Button, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.css'

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        sorter: (a, b) => a.id - b.id,
        sortDirections: ['ascend'],
    },
    // {
    //     title: 'Ảnh',
    //     dataIndex: 'linkAvt',
    // },
    {
        title: 'Tên',
        dataIndex: 'name',
        sorter: (a, b) => a.title.length - b.title.length,
        sortDirections: ['ascend'],
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Mật khẩu',
        dataIndex: 'psw',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
    },
    {
        title: 'Quyền',
        dataIndex: 'role',
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

class ShowUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: []
        }
      }

    componentDidMount() {
        let user = [];
        db.collection("user").get()
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
        console.log(this.state.user);
        return (
            <div>
                <Table columns={columns} dataSource={this.state.user} />
            </div>
        );
    }
}

export default ShowUser;
