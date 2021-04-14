import React from 'react';
import './Questions.css';

class Questions extends React.Component{
      
    constructor(props){
        super(props);

        this.state ={
            questions:[{
                    "question":"How Nadiswara analyzes pulse?",
                    "answer":"Nadiswara analyses pulse through sensor by acquiring pulse at raddial artery"
                },{
                    "question":"How Nadiswara analyzes pulse?",
                    "answer":"Nadiswara analyses pulse through sensor by acquiring pulse at raddial artery"
                },{
                    "question":"How Nadiswara analyzes pulse?",
                    "answer":"Nadiswara analyses pulse through sensor by acquiring pulse at raddial artery"
                },{
                    "question":"How Nadiswara analyzes pulse?",
                    "answer":"Nadiswara analyses pulse through sensor by acquiring pulse at raddial artery"
                },{
                    "question":"How Nadiswara analyzes pulse?",
                    "answer":"Nadiswara analyses pulse through sensor by acquiring pulse at raddial artery"
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
                            <h1 className="Blue">Frequently Asked Questions</h1>
                        </div>

                    </div>

                </div>
                <div className="row">
                    {this.state.questions.map(qns =>{
                        return(
                            <div className="col-12 m-2">
                                <h4>{qns.question}</h4>
                                <p>{qns.answer}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}


export default Questions;