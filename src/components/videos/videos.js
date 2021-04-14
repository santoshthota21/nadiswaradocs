import React from 'react';
import './videos.css';

class Videos extends React.Component{

    constructor(props){
        super(props);
        this.state={
            videos:[
                {
                    key:"1",
                    videoId:"qXpYPMxUuQM"
                },
                {
                    key:"2",
                    videoId:"tra2tftqy_Q"
                },
                {
                    key:"3",
                    videoId:"HLhKNmcsf5M"
                },
                {
                    key:"4",
                    videoId:"TfjbWGJ3Z3U"
                }
            ]
        }
    }

    render(){
        return(
            <div className="container-fluid VideoSection" >
                {this.state.videos.map(video=>{
                    return(

                        <div className="video mt-4" id={video.id}
                        style={{
                            position: "relative",
                            paddingBottom: "56.25%" /* 16:9 */,
                            paddingTop: 25,
                            height: 0,
                            backgroundColor: "rgba(247, 250, 252, 1)"
                        }}
                        >
                        <iframe
                            style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                            }}
                            src={'https://www.youtube.com/embed/'+video.videoId}
                            frameBorder="0"
                        />
                    </div>

                    )
                })}
                
            </div>
        )
    }
}

export default Videos;