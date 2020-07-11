import React, { Component } from 'react';
import './shop.css'
import { db } from '../../firebaseConnect';
import CateItem from './CateItem';

import Modal from 'react-modal';
import ModalOrder from '../Modal/ModalOrder';

// import { connect} from 'react-redux'

class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrayCategory: [],
            showModal: false
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal(val) {
        this.setState({ showModal: true });
        // this.props.addObject(val)
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    componentDidMount() {
        var list = [];
        db.collection("data").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let cate = doc.data();
                    cate.dishes = [];
                    doc.ref.collection('dishes').get()
                        .then((querySnapshot1) => {
                            querySnapshot1.forEach((pro) => {
                                cate.dishes.push(pro.data());
                            })
                            list.push(cate);
                            this.setState({
                                arrayCategory: list
                            })
                        })
                });
            });
    }

    showProCate = (cate) => {
        var listPro = cate.dishes.map((val, key) =>
            <div className="col-sm-6" onClick={() => this.handleOpenModal(val)}>
                <div className="ih-item circle effect13 from_left_and_right"><a>
                    <div className="img">
                        <img src={val.photos[2].value} />
                    </div>
                    <div className="info">
                        <div className="info-back">
                            <h3>{val.name}</h3>
                            <p>Mua Ngay!</p>

                        </div>
                    </div></a>
                    <div className="price"><h3>{val.name}</h3></div>
                    <div className="price"><h3>{val.price.text}</h3></div>
                </div>
            </div>

        )
        return listPro;
    }

    // showDataModal = (cate) => {
    //     var listModal = cate.dishes.map((v, key) => {
    //         <ModalOrder />
    //     })
    //     return listModal;
    // }

    render() {
        console.log(this.state.arrayCategory.length);
        return (
            <div className="contentShop">
                <div className="row1 cate">
                    {
                        this.state.arrayCategory.map((value, key) =>
                            <CateItem
                                key={key} id={key}
                                name={value.dish_type_name}
                                slug={value.slug}
                            />
                        )}
                </div>
                <div className="row1 pro">
                    {
                        this.state.arrayCategory.map((value, key) =>
                            <div key={key} id={key}>
                                {
                                    this.showProCate(value)
                                }
                            </div>
                        )}
                </div>
                <div>
                    <Modal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal}>
                        <div className="modal-container">
                            <button className="modal-container-button" onClick={this.handleCloseModal}>
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                            {/* {
                                this.state.arrayCategory.map((value, key) =>
                                    <div key={key} id={key}>
                                        {
                                            this.showDataModal(value)
                                        }
                                    </div>
                                )} */}
                                <ModalOrder/>
                        </div>
                    </Modal>
                </div>


            </div>
        );
    }
}
// const mapStateToProps = (state, ownProps) => {
//     return {
//     }
// }
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         addObject: (addItem) => {
//             dispatch({ type: 'GET_ADD_DATA', addItem })
//         }
//     }
// }
export default (Shop);
Modal.setAppElement('body');