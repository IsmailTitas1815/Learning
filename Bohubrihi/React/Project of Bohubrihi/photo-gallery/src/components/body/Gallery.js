import React, { Component } from 'react';
import Photo from './Photo';
import PhotoDetails from './PhotoDetails';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment } from '../../redux/actionCreators'


const mapStateToProps = state => {
    return {
        imageDetails: state.imageDetails,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (photoId, author, rating, comment) => dispatch(
            addComment(photoId, author, rating, comment)
        )
    }
}

class Gallery extends Component {

    state = {
        ImageSelected: null,
        modalOpen: false
    }
    onImageSelect(selected) {
        this.setState({
            ImageSelected: selected,
            modalOpen: !this.state.modalOpen
        })
    }

    toogleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        let Images = this.props.imageDetails.map((singleDetails) => {
            return (
                <Photo singleDetails={singleDetails}
                    key={singleDetails.id}
                    ImageSelect={() => this.onImageSelect(singleDetails)} />
            )
        }
        )

        let singleImageDetails = null;
        if (this.state.ImageSelected != null) {
            const comments = this.props.comments.filter(comment => {
                return this.state.ImageSelected.id === comment.photoId
            })
            singleImageDetails = <PhotoDetails addComment={this.props.addComment} comments={comments} singleDetails={this.state.ImageSelected} />
        }

        return (
            <div className="">
                <div className="row">
                    <CardColumns>
                        {Images}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen}>
                        <ModalBody>
                            {singleImageDetails}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toogleModal}>
                                Close
                        </Button>
                        </ModalFooter>
                    </Modal>
                    <CardColumns>
                    </CardColumns>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);