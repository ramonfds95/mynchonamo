import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import Header from './HeaderComponent'
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';



function RenderCard({item, isLoading, errMess}) {
    
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else 
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );

}

function Home(props) {
    return(
        <div className="home">
            <div className= "poster">
                <div className="bg_envoltura">
                    <video id="bg" className="poster_bg" poster="./assets/images/historia1.jpg" loop="loop" muted="muted">
                        
                    </video>
                    <div className="poster_intro">
                        <div className="poster_video_start"></div>
                        <p className="poster_sub">¡Pronto!</p>
                        <p className="poster_sub">La historia de la resistencia del primer héroe de Malabrigo será rebelada</p>
                        <div className="row align-items-start"> 
                        </div>
                    </div>
                    
                </div>
                                
            </div>
            
        </div>
    );
}

export default Home;