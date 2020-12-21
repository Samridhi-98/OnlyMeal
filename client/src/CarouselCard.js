import React from "react";
import Carousel from "semantic-ui-carousel-react";
import { Header } from "semantic-ui-react";

//CSS
import './css/master.css';

//Image


const CarouselCard = () => {
    let elements = [
        {
            render: () => {
                return (
                    // <Image className="image" src={minion_luv} />
                    <Header textAlign='center'>Bananas, cucumbers, kiwis are all classed as berries. Strawberries, blackberries and raspberries are not.</Header>
                );
            }
        },
        {
            render: () => {
                // return <Image className="image" src={minion_graph} />;
                return(
                    <Header textAlign='center'>A hard one to wrap your head around. Before 2011,beer and any alcoholic beverage under 10% ABV was classified as a soft drink.</Header>
                );
            }
        },
        {
            render: () => {
                return (
                    // <Image className="image" src={food1} />
                    <Header textAlign='center'>Around 4% of ALL the cheese made in the world gets stolen, There's even a black market of stolen cheeses,but we didn't tell you that.</Header>
                );
            }
        },
        {
            render: () => {
                return (
                    // <Image className="image" src={minion_join} />
                    <Header textAlign='center'>Lobsters are quite literally sea insects that were a hard sale back in the day and used to be chucked back in the sea.</Header>
                );
            }
        },
        {
            render: () => {
                return (
                    // <Image className="image" src={minion_work} />
                    <Header textAlign='center'>Brussels sprouts may be the most hated vegetable, but it’s among the most nutritious veggies. It’s packed full of vitamins and minerals.</Header>
                );
            }
        }
    ];
    return (
        <div className="carousel-card">
            <Carousel
                elements={elements}
                duration={3000}
                animation="scale"    //try othereffects like scale,bounce,glow,flash,jiggle,swipe,slide,flip
            />
        </div>
    );
};
export default CarouselCard;
