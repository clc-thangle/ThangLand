import React, { Component } from 'react';
import * as firebase from 'firebase';
import { db } from '../../firebaseConnect';
import { Table, Button, Popconfirm, Modal, Input } from 'antd';
import { DeleteOutlined, EditOutlined, FolderAddOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import SearchItem from '../SearchItem/SearchItem';
class ShowAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            selectedRowKeys: [], // Check here to configure the default column
            isModalVisible: false,
            name: '',
            address: '',
            lat: '',
            lon: '',
            userEdit: {},
            userEditKey: '',
            keyword: '',
        }
        this.showModalUpdate = this.showModalUpdate.bind(this);
        this.showModalAdd = this.showModalAdd.bind(this);
        this.addGeo = this.addGeo.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    updateInput = e => {
        let user = this.state.userEdit;
        user[e.target.name] = e.target.value;
        this.setState({
            userEdit: user,
        });
    }

    // updateInput = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // }

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

    updateTutorial = () => {
        const data = {
            title: this.state.userEdit.title,
            address: this.state.userEdit.address,
            lat: parseFloat(this.state.userEdit.lat),
            lon: parseFloat(this.state.userEdit.lon),
        };
        console.log(data);
        const db = firebase.firestore()
        db.collection("geo/").doc(this.state.userEditKey).update(data)
            .then(() => {
                alert('cap nhap thanh cong')
            })
            .catch((e) => {
                console.log(e);
            });

        this.setState({ isModalVisible: false })
    }

    showModalAdd() {
        this.setState({ isModalVisible: true })
    }

    showModalUpdate(key) {
        db.collection("geo").doc(key).get()
            .then((querySnapshot) => {
                this.setState({
                    userEdit: querySnapshot.data()
                })
            });
        this.setState({ isModalVisible: true, userEditKey: key });
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

    onSearch = (keyword) => { 
        this.setState({
            keyword: keyword
        })
        console.log(keyword);
    }

    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'title',
                sorter: (a, b) => a.name.length - b.name.length,
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
                align: 'center',
                render: (key) => {
                    return (
                        <div style={{ display: "inline-flex" }}>
                            {/* button adđ */}
                            <Button onClick={this.showModalAdd} style={{ marginRight: "5px" }} icon={<FolderAddOutlined />} />
                            {/* button update */}
                            <Button
                                style={{ marginRight: "5px" }}
                                icon={<EditOutlined />}
                                onClick={() => this.showModalUpdate(key)}
                            />
                            {/* button delete */}
                            <Popconfirm
                                title="Are you sure？"
                                okText="Yes"
                                cancelText="No"
                                onClick={() => this.deleteGeo(key)}
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
                    {/* <SearchItem onSearch={this.onSearch}/> */}
                <Table columns={columns} dataSource={this.state.user} />
                </div>
                
                <Modal
                    title="Add Branch"
                    visible={this.state.isModalVisible}
                    onOk={this.addGeo}
                    onCancel={this.handleCancel}
                >
                    <span>Name</span><Input value={this.state.userEdit.title} onChange={this.updateInput} type="text" placeholder="Name Branch" name="title" required ></Input>
                    <span>Address</span><Input value={this.state.userEdit.address} onChange={this.updateInput} type="text" placeholder="Address" name="address" required ></Input>
                    <span>Lat</span><Input value={this.state.userEdit.lat} onChange={this.updateInput} type="text" placeholder="Lat" name="lat" required ></Input>
                    <span>Long</span><Input value={this.state.userEdit.lon} onChange={this.updateInput} type="text" placeholder="Lon" name="lon" required ></Input>
                </Modal>
            </div>
        );
    }
}

export default ShowAddress;
