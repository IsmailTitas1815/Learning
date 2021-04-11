import React, { Component } from 'react';
import IMAGEDETAILS from '../data/ImagesDetails';
import Photo from './Photo';
import PhotoDetails from './PhotoDetails';

class Gallery extends Component {
    state = {
        ImagesDetails: IMAGEDETAILS,
        ImageSelected: null
    }
    onImageSelect(selected) {
        this.setState({
            ImageSelected: selected
        })
    }

    render() {
        let Images = this.state.ImagesDetails.map((singleDetails) => {
            return (
                <Photo singleDetails={singleDetails}
                    key={singleDetails.id}
                    ImageSelect={() => this.onImageSelect(singleDetails)} />
            )
        }
        )

        let singleImageDetails = null;
        if (this.state.ImageSelected != null) {
            singleImageDetails = <PhotoDetails singleDetails={this.state.ImageSelected} />
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {Images}
                    </div>
                    <div className="col-6">
                        {singleImageDetails}
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;