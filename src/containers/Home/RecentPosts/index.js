import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={"https://www.mybloggerclub.com/wp-content/uploads/2019/06/Driving-Your-Dream-Vehicle-with-Car-Rental-Services.jpg"} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span></span>
                <h2>Why book with us Only?</h2>
                <span></span>
                <p>Easy & Fast - Book a car in 60 seconds</p>
<p>No credit card or booking fees</p>
<p>Convenient to view or cancel reservations</p>
<p>Coupons and deals</p>
<p>Special prices available here</p>
 

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts