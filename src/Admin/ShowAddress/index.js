import React, { Component } from 'react';
import { db } from '../../firebaseConnect';
import { Table, Button } from 'antd';
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

    // showUser = () => {
    //     let show = this.state.user.map((value, key) =>
    //         <tr>
    //             <td>{key}</td>
    //             <td>{value.title}</td>
    //             <td>{value.address}</td>
    //             <td>{value.lat}</td>
    //             <td>{value.lon}</td>
    //             <td><button>xóa</button></td>
    //         </tr>
    //     )
    //     return show;
    // }

    // render() {
    //     console.log(this.state.user);
    //     return (
    //         <div className="showUserAdmin">
    //             <table>
    //                 <thead>
    //                     <th>Id</th>
    //                     <th>Chi nhánh</th>
    //                     <th>Địa Chỉ</th>
    //                     <th>Lat</th>
    //                     <th>Long</th>
    //                     <th>Thao tác</th>
    //                 </thead>
    //                 <tbody>
    //                     {this.showUser()}
    //                 </tbody>
    //             </table>
    //         </div>
    //     );
    // }
    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    render() {
        const {selectedRowKeys } = this.state;
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table columns={columns} dataSource={this.state.user} />
            </div>
        );
    }
}

export default ShowAddress;
