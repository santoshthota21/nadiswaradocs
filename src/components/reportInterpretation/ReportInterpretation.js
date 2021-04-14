import React from 'react';
import './ReportInterpretation.css';

class ReportInterpretation extends React.Component{
      
    constructor(props){
        super(props);

        this.state ={
            questions:[{
                    "key":"1",
                    "title":"Five Elements",
                    "imageURL":"",
                    "description":"Nadiswara analyses pulse through sensor by acquiring pulse at raddial artery"
                },{
                    "key":"2",
                    "title":"Tridhosha",
                    "imageURL":"",
                    "description":"Nadiswara analyses pulse through sensor by acquiring pulse at raddial artery"
                },{
                    "key":"3",
                    "title":"Food suggestions",
                    "imageURL":"",
                    "description":"Nadiswara analyses pulse through sensor by acquiring pulse at raddial artery"
                },{
                    "key":"4",
                    "title":"Body wellness",
                    "imageURL":"",
                    "description":"Nadiswara analyses pulse through sensor by acquiring pulse at raddial artery"
                },{
                    "key":"5",
                    "title":"Thought Pattern",
                    "imageURL":"",
                    "description":"Nadiswara analyses pulse through sensor by acquiring pulse at raddial artery"
                },{
                    "key":"6",
                    "title":"Acupressure",
                    "imageURL":"",
                    "description":"Nadiswara analyses pulse through sensor by acquiring pulse at raddial artery"
                },{
                    "key":"7",
                    "title":"Seed therapy",
                    "imageURL":"",
                    "description":"Nadiswara analyses pulse through sensor by acquiring pulse at raddial artery"
                },{
                    "key":"8",
                    "title":"Acupuncture – (Reflex, Body)",
                    "imageURL":"",
                    "description":"Nadiswara analyses pulse through sensor by acquiring pulse at raddial artery"
                }
            ]   
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row m-4">
                    <div className="col-12">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h1 className="Blue">Report Interpretation</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default ReportInterpretation;