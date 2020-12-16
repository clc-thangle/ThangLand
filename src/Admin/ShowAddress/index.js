import React, { Component } from 'react';
import * as firebase from 'firebase';
import { db } from '../../firebaseConnect';
import { Table, Button, Popconfirm, Modal, Input } from 'antd';
import { DeleteOutlined, EditOutlined, FolderAddOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
class ShowAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            selectedRowKeys: [], // Check here to configure the default column
            isModalVisible: false,
            title: '',
            address: '',
            lat: '',
            lon: '',
        }
        this.showModal = this.showModal.bind(this);
        this.addGeo = this.addGeo.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    refreshList() {
        this.setState({
            currentTutorial: null,
            currentIndex: -1,
        });
    }

    addGeo = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({ timestampsInSnapshots: true });
        const userRef = db.collection("geo").add({
            title: this.state.title,
            address: this.state.address,
            lat: parseFloat(this.state.lat),
            lon: parseFloat(this.state.lon),
        })
        this.setState({
            isModalVisible: false,
            title: '',
            address: '',
            lat: '',
            lon: ''

        })
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

    deleteGeo = (key) => {
        const db = firebase.firestore()
        db.collection("geo").doc(key).delete().then(() => {
            console.log("delete");

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

        }).catch((e) => {
            console.log("Error removing document: ", e);
        });
    }

    // updateGeo = () => {
    //     const db = firebase.firestore()
    //     db.collection("geo").doc(key).set({...})
    // }

    showModal() {
        this.setState({ isModalVisible: true })
    }

    handleCancel() {
        this.setState({ isModalVisible: false })
    }

    componentDidMount() {
        let user = [];
        db.collection("geo").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    user.push({ ...doc.data(), id: doc.id });
                    console.log(doc.id);
                });
                this.setState({
                    user: user
                })
            });
    }

    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'title',
                sorter: (a, b) => a.title.length - b.title.length,
                sortDirections: ['ascend'],
                width: 200
            },
            {
                title: 'Address',
                dataIndex: 'address',
                width: 300,
            },
            {
                title: 'Lat',
                dataIndex: 'lat',
                width: 100
            },
            {
                title: 'Lon',
                dataIndex: 'lon',
            },
            {
                title: 'Action',
                dataIndex: 'id',
                key: 'id',

                // render: () => <><DeleteOutlined /><EditOutlined /></>,
                align: 'center',
                render: (key) => {
                    return (
                        <div style={{ display: "inline-flex" }}>
                            <Button onClick={this.showModal} style={{ marginRight: "5px" }} icon={<FolderAddOutlined />} />
                            <Button
                                style={{ marginRight: "5px" }}
                                icon={<EditOutlined />}
                            // onClick={() => this.goToEdit(row)}
                            //s

                            />
                            <Popconfirm
                                title="Are you sure？"
                                okText="Yes"
                                cancelText="No"
                                onConfirm={() => this.deleteGeo(key)} // truyền bt ko dc à bth truyền kiểu gì giờ làm h lấy key của phàn tử nứ truyền v4 lm ren 

                            >
                                <Button style={{ marginRight: "5px" }} icon={<DeleteOutlined />} />
                            </Popconfirm>
                        </div>
                    );
                }
            }
        ]
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <span style={{ marginLeft: 8 }}>

                    </span>
                </div>
                <Table columns={columns} dataSource={this.state.user} />
                <Modal
                    title="Add Branch"
                    visible={this.state.isModalVisible}
                    onOk={this.addGeo}
                    onCancel={this.handleCancel}
                >
                    <span>Name</span><Input value={this.state.name} onChange={this.updateInput} type="text" placeholder="Name Branch" name="title" required ></Input>
                    <span>Address</span><Input value={this.state.address} onChange={this.updateInput} type="text" placeholder="Address" name="address" required ></Input>
                    <span>Lat</span><Input value={this.state.lat} onChange={this.updateInput} type="text" placeholder="Lat" name="lat" required ></Input>
                    <span>Long</span><Input value={this.state.lon} onChange={this.updateInput} type="text" placeholder="Lon" name="lon" required ></Input>
                </Modal>
            </div>
        );
    }
}

export default ShowAddress;
