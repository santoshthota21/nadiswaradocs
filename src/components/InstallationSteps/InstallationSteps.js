import React from 'react';
import './InstallationSteps.css';
import loginPhone from '../../images/phone/login.png';
import loginEmail from '../../images/emailLogin2.PNG';
import enrollDevice from '../../images/enrollDevice.jpeg';
import enrollDeviceBarcode from '../../images/enrollDeviceBarcode.jpeg';

import Vidoes from '../videos/videos';
class InstallationSteps extends React.Component{

    constructor(props){
        super(props);
        this.state={
            winwidth:0,
            height:0,
            steps:[{
                key:"1",
                className:"active",
                content:this.installationForm(),
                status:true
            },{
                key:"2",
                className:"deactive",
                content:this.apkInstallation(),
                status:false
            },{
                key:"3",
                className:"deactive",
                content:this.loginCredentials(),
                status:false
            },{
                key:"4",
                className:"deactive",
                content:this.enrollDevice(),
                status:false
            },{
                key:"5",
                className:"deactive",
                content:this.successMsg(),
                status:false
            }
        
        ]
        
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }

    componentDidMount=()=> {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount=()=> {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions=()=> {
        console.log("####")
        console.log(window.innerWidth)
        this.setState({ winwidth: window.innerWidth, height: window.innerHeight });
    }


    enrollDevice=()=>{
        return(
        <div className=" mt-4">
            <div className="row">
                <div className="col-12  text-center">
                    <h3>Enroll Device</h3>
                </div>
                <div className="col-12 p-4">
                    <p>Once you logIn Nadiswara, Click on top left three bars and select Enroll Device option and Enter the barcode present on the <strong>WARRENTY CARD</strong> in Nadiswara Application as shown below. </p>
                </div>
            </div>
            
            <div className="row">
                <div className="col-6 text-center">
                    <img   width="120px" src={enrollDevice} alt="loginPhone" />
                    <figcaption className="text-center">Nadiswara App</figcaption>
                </div>
                <div className="col-6 text-center">
                    <img width="140px" src={enrollDeviceBarcode} alt="loginEmail" />
                    <figcaption className="text-center">Warranty Card</figcaption>
                </div>
            </div>
        </div>
        )
    }

    successMsg=()=>{
        return(
        <div className="row mt-4">
            <div className="col-12 text-center">
                <h3>Sucessfully Enrolled to Nadiswara</h3>
            </div>
            <div className="col-12 p-4">
                <p>You have sucessfully enrolled to Nadiswara</p>
            </div>
            <div className="col-12 CenterItem">
                <i style={{fontSize:"90px",color:"blue"}} class="fa fa-thumbs-up"></i>
            </div>
            <div className="col-12 mt-4">
                <h5>Suggestions</h5>
                <div>
                    <p>videos thumbnail in row </p>
                    <Vidoes></Vidoes>
                </div>
            </div>
        </div>
        )
    }

    loginCredentials=()=>{
        return(
        <div  className="mt-4">
            <div className="row">
                <div className="col-12  text-center">
                    <h3>Login Credentials</h3>
                </div>
                <div className="col-12 p-4">
                    <p>After installing Nadiswara application in your mobile, Use username and password received in your given <strong>MAIL</strong> account to LOGIN. Once you Login sucessfully go-to step 4 to enroll Nadiswara</p>
                </div>
            </div>
    
            
            <div className="row">
                <div className="col-6 text-center">
                    <img width="120px" src={loginPhone} alt="loginPhone" />
                    <figcaption className="text-center">Nadiswara App</figcaption>
                </div>
                <div className="col-6 pt-2 text-center">
                    <img width="120px" style={{border:"2px solid black",borderRadius:"5px"}} src={loginEmail} alt="loginEmail" />
                    <figcaption className="text-center">Your Mail</figcaption>
                </div>
            </div>
        </div>
        )
    }

    downloadApplication=()=>{
        //const url="https://drive.google.com/file/d/1rp184c2-us35dsqOGWin6EL-3aKJEUeq/view?usp=drivesdk"
        const url = "https://drive.google.com/uc?export=download&id=1rp184c2-us35dsqOGWin6EL-3aKJEUeq"
        this.onItemClick("2");
        window.open(url, '_blank');
    }

    downloadInstallationPDF=()=>{
        //const url="https://drive.google.com/file/d/1Jlpgqj4I8eupsuOKA-j6lV3qTUVxcCTw/view?usp=sharing"
        const url = "https://drive.google.com/uc?export=download&id=1Jlpgqj4I8eupsuOKA-j6lV3qTUVxcCTw"
        this.onItemClick("2");
        window.open(url, '_blank');
    }
    
    downloadReportPDF=()=>{
        //const url="https://drive.google.com/file/d/1qAHgR2SujmsDs8Mtk3PR9_yKvxSGZbxo/view?usp=sharing"
        const url = "https://drive.google.com/uc?export=download&id=1qAHgR2SujmsDs8Mtk3PR9_yKvxSGZbxo"
        this.onItemClick("2");
        window.open(url, '_blank');
    }

    
    
    installationForm=()=>{
        //console.log(this.state.winwidth)
        
        return(
            <div className="row mt-4">
                {/* <div className="col-12  text-center">
                    <h3>Fill the Following Form</h3>
                </div>
                <div className="col-12 p-4">
                    <p>Click the below link to enter your details. Once form filled go-to step 2 to install Nadiswara Application</p>
                    <div className="CenterItem">
                        <a onClick={()=>{this.onItemClick("2")}} href="https://forms.gle/NCSzv7fYVeW1EJR99" target="_blank">Click me!</a>
                    </div>
                </div> */}
                
                <div  className="row m-auto">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfxBuH1SyJl1joJq0Rg7aRSH_n05Zx2M6cDOsyrgCq2Cszu_A/viewform?embedded=true"
                        width={window.innerWidth -60} 
                        height="5150" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                </div>
            </div>
        )
    }

    apkInstallation=()=>{
        return(
            <div className="row mt-4">
                <div className="col-12  text-center">
                    <h3>Nadiswara Application</h3>
                </div>
                <div className="col-12 p-4">
                    <p className="text-center">Click the below button to download Nadiswara application in <strong>ANDROID</strong> mobile.</p>
                    <div className="CenterItem">
                        <button className="shadow Download" onClick={this.downloadApplication}><i class="fa fa-download"></i> Download App</button>
                    </div>
                </div>
            
                <div className="col-12 mt-4 text-center">
                    <h3>Documents</h3>
                </div>
                <div className="row p-4">
                    <p className="text-center">Click the below buttons to download Nadiswara <strong>Documents</strong>. Once downloaded both the documents go-to step 3</p>
                    
                    <div className="col-6 m-0 CenterItem MarginZero">
                        <button className="shadow Download" onClick={this.downloadInstallationPDF}><i class="fa fa-file-pdf-o"></i> Installation</button>
                    </div>
                    <div className="col-6 m-0 CenterItem MarginZero">
                        <button className="shadow Download" onClick={this.downloadReportPDF}><i class="fa fa-file-pdf-o"></i> Report</button>
                    </div>
                </div>


                
            </div>
        )
    }
    onItemClick=(id)=>{
        //alert("adfs"+event.currentTarget.dataset.id );
        //console.log(event)
        let items=this.state.steps.map(step=>{
            if(step.key===id){
                let obj={...step};
                obj.status=true;
                obj.className="active"
                return obj;
            }else{
                let obj={...step};
                obj.status=false;
                obj.className="deactive"
                return obj;
            }

        })

        this.setState({steps:items});
    
    }

    render(){
        console.log(this.state.steps)
        return(
            <div id="installationStepsId" className="container mb-5">
                <div className="row m-4">
                    <div className="col-12">
                        <div className=" text-center d-flex flex-column justify-content-center align-items-center">
                            <h1 className="Blue">Welcome To NADISWARA Installation Steps</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="InstallationSteps">
                            <ul className="CenterItem">
                                {this.state.steps.map(step =>{ 
                                return(
                                    <li key={step.key} data-id={step.key} className={step.className} onClick={(event)=>{this.onItemClick(event.currentTarget.dataset.id)}}>{step.key}</li>
                                )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 Hieght80vh">
                        <div>
                            {this.state.steps.map(step =>{
                                if(step.status){
                                    return(
                                    <div key={step.key} className="col-12 m-2">
                                        {step.content}
                                    </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
                
            
            </div>
        )
    }
}

export default InstallationSteps;