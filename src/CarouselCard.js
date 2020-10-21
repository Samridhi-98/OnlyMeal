import React from "react";
import Carousel from "semantic-ui-carousel-react";
import { Image,Header } from "semantic-ui-react";

//CSS
import './css/master.css';

//Image
import minion_luv from "./images/minion_luv.svg";
import minion_gane from "./images/minion_gane.svg";
import minion_graph from "./images/minion_graph.svg";
import minion_join from "./images/minion_join.svg";
import minion_work from "./images/minion_work.svg";
import food1 from "./images/food1.jpg";

const CarouselCard = () => {
    let elements = [
        {
            render: () => {
                return (
                    // <Image className="image" src={minion_luv} />
                    <Header>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Header>
                );
            }
        },
        {
            render: () => {
                // return <Image className="image" src={minion_graph} />;
                return(
                    <Header>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Header>
                );
            }
        },
        {
            render: () => {
                return (
                    // <Image className="image" src={food1} />
                    <Header>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Header>
                );
            }
        },
        {
            render: () => {
                return (
                    // <Image className="image" src={minion_join} />
                    <Header>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Header>
                );
            }
        },
        {
            render: () => {
                return (
                    // <Image className="image" src={minion_work} />
                    <Header>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Header>
                );
            }
        }
    ];
    return (
        <div className="carousel-card">
            <Carousel
                elements={elements}
                duration={3000}
                animation="zoom"    //try othereffects like scale,bounce,glow,flash,jiggle,swipe,slide,flip
            />
        </div>
    );
};
export default CarouselCard;
