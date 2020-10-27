import React from "react";
// semantic ui
import { Container, Segment, Image } from "semantic-ui-react";
// images
import snow_cat from "../../images/profile/cup.svg";

class Profile extends React.Component{
    render(){
        return (
            <div className="profile">
                <Container>
                    <Segment className="segment">
                        <Image className="" src={snow_cat} size="small" circular  centered/>
                    </Segment>
                </Container>
            </div>
            
        )
    }
}
export default Profile;