import React from 'react';
import {Card,CardImg,CardImgOverlay,CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';



function RenderHistoryItem({story}){
    return(
        <Card key={story.id}>           
            <CardImg width="100%" src={baseUrl + story.image} alt={story.name} />
            <CardImgOverlay>
                <CardTitle>{story.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}
const History = (props) => {
    const history = props.stories.stories.map((story) => {
        return (
          <div  className="">
            <RenderHistoryItem story={story} />
          </div>
        );
    });

    if (props.stories.isLoading) {
        return(
            <div className="storypage">
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            </div>
            
        );
    }
    else if (props.stories.errMess) {
        return(
            <div className="storypage">
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.stories.errMess}</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else
        return (
            <div className="storypage">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <hr />
                        </div>                
                    </div>
                    <div className="">
                        {history}
                    </div>
                </div>
            </div>
            
        );
}


    


export default History;