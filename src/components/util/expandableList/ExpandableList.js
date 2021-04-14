import React from 'react';
import './ExpandableList.css';


class ExpandableList extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            items:[{key:"1",pattern:"Spleen",subpattern:["Spleen Qi deficency","Spleen Qi Excess"],state:true},
            {key:"2",pattern:"Liver",subpattern:["Liver Qi deficency","Liver Qi Excess"],state:false}]
        }
    }

    handleClick=(key)=>{
        alert(key);
    }
    render(){
        return(
            <div>
                <ol>
                {this.state.items.map(item =>{
                    var data =null;
                    var sublist=null;
                    if(item.state){
                        data = item.subpattern.map(pattern =>{
                            return(
                                <li >{pattern}</li>
                            )
                        })


                        sublist=(
                            <div className="Sublist">
                                <ul>
                                    {data}
                                </ul>
                            </div>
                        )
                    }
                    
                    return(
                        <div>
                            <li onClick={()=>this.handleClick(item.key)}>{item.pattern}</li>
                            {sublist}
                        </div>
                    )
                })}
                </ol>
            </div>
        )
    }

}
export default ExpandableList;