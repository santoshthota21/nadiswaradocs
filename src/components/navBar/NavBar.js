import React from 'react';
import './NavBar.css';

class NavBar extends React.Component{

    constructor(props){
        super(props);
    
        this.state={
            navState:"navbar fixed-top navbar-expand-lg navbar-light justify-content-between bg-light"
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, false);
    }

    handleScroll= () => {
        if (window.pageYOffset < 140) {
            this.setState({ navState: "navbar fixed-top navbar-expand-lg navbar-light justify-content-between bg-light sticky-top" });         
        }else{
            this.setState({ navState: "navbar fixed-top navbar-expand-lg navbar-light justify-content-between bg-light" });
        }
    }
    
    render(){
        return(
            <div className="container-fluid" >

                <nav  className={this.state.navState}>
                    <span className="navbar-brand mb-0 h1">Nadiswara</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a  className="nav-link" href="#patternDescSection">Pattern <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link" href="#installationStepsId">Installation</a>
                            </li>
                        </ul>
                    
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;