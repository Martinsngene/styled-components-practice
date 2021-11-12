import React from 'react';
import LottieAnimation from './LottieAnimation';
import pageNotFoundTwo from '../animations/pageNotFoundTwo.json';

function DialogFluid() {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Test mode
            </button>

            {/* <!-- Modal --> */}

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                {/* <div className="modal-header">
                    <h5 className="modal-title text-center" id="staticBackdropLabel">Page was not found</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div> */}
                <div className="modal-body">
                    {/* <div className="customContainer"> */}
                        <div className="img-fluid">
                            <LottieAnimation className="img-fluid" lotti={pageNotFoundTwo} height={150} width={300} />
                        </div>
                    {/* </div> */}
                </div>
                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Ok</button>
                </div> */}
                </div>
            </div>
            </div>       
        </div>
    )
}

export default DialogFluid
