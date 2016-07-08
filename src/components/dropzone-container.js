import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

class DropZoneContainer extends Component {
    deleteImage(event, index) {
        event-preventDefault();
        debugger;
        console.log("Delete image " + index);
    }

    render() {
        const {files} = this.props;

        return(
            <div>
                <Dropzone
                    className="dropzone"
                    activeClassName="dropzone-active"
                    onDrop={this.props.onDrop}>
                    {
                        files == 0 ? <div>Try dropping some files here, or click to select files to upload.</div> :
                            <div className="product-images">
                                {
                                    files.map((image, index) => {
                                        return (
                                            <img className="product-image" key={index} src={image.preview} />
                                        );
                                    })
                                }
                            </div>

                    }
                </Dropzone>
            </div>
        )
    }
}

export default DropZoneContainer;