import React from 'react';
import './Card.css';

class Card extends React.Component{

    constructor(props){
        super(props);
        this.state={
            items:[
                {
                    name:"Nadiswara",
                    img:"https://i.pinimg.com/280x280_RS/25/bd/75/25bd75af23203c28f6ce7445be158c7f.jpg",
                    link:"",
                },{
                    name:"Installation",
                    img:"https://i.pinimg.com/280x280_RS/25/bd/75/25bd75af23203c28f6ce7445be158c7f.jpg",
                    link:""
                },{
                    name:"Broucher",
                    img:"https://i.pinimg.com/280x280_RS/25/bd/75/25bd75af23203c28f6ce7445be158c7f.jpg",
                    link:""
                },{
                    name:"Application",
                    img:"https://i.pinimg.com/280x280_RS/25/bd/75/25bd75af23203c28f6ce7445be158c7f.jpg",
                    link:""
                },{
                    name:"Video",
                    img:"https://i.pinimg.com/280x280_RS/25/bd/75/25bd75af23203c28f6ce7445be158c7f.jpg",
                    link:""
                },{
                    name:"Report",
                    img:"https://i.pinimg.com/280x280_RS/25/bd/75/25bd75af23203c28f6ce7445be158c7f.jpg",
                    link:""
                }
            ]
        }
    }

    render(){
        return(
            <div className="container" >
                <div className="row m-4">
                    <div className="col-12">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h1 className=" text-center Blue">Nadiswara Docs</h1>
                        </div>

                    </div>

                </div>
                <div className="row">
                    <div className="col-12 d-flex flex-row flex-wrap justify-content-center align-items-center">
                        {this.state.items.map(item=>{
                            return(
                            <div className="d-flex flex-row">
                                <div className="ProductDet">
                                    <div className="ProductImg">
                                        <img width="100px" height="100px" src={item.img} />
                                    </div>
                                    <div className="ProductName p-0">
                                        {/* <a href="#installationSteps" >{item.name}</a> */}
                                        <h6>{item.name}</h6>
                                    </div>
                                </div>
                            </div> 
                            ) 
                        })}
                    </div>
                    
                </div>
            </div>       
        )
    }
}

export default Card;