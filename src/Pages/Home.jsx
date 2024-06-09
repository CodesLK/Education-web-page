import React from "react";
import Header from "../Components/header";
import '../Pages/home.css';
import landing from '../Images/course5.jpg';
import video from '../Images/video.jpg';
import course1 from '../Images/course1.jpg';
import bg from '../Images/bg.png';
export default function Home() {
    return (
        <div className="body-container">
            <div className="header"><Header /></div>
            <div className="body">

                <div className="landing">
                    <img src={landing} alt="" srcset="" />
                    <h1>Learn with us!</h1>
                    <button className="btn-browse">Browse more</button>
                </div>
                <div className="card-container">
                    <div className="content">
                       <div className="topic"> Who are we</div>
                       <div className="paragraph">Sri Lanka Institute of Advanced Technology(SLIATE)</div>
                    </div>
                    
                    <div className="image"><img src={landing} alt="" srcset="" /></div>
                </div>
                <div className="card-container">
                    <div className="image"><img src={landing} alt="" srcset="" className="round-border width-height" /></div>
                    <div className="content">
                       <div className="topic"> About us</div>
                       <div className="sub-topic"> Mission Statement:</div>
                       <div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fuga molestias, cum aut placeat odit rem sed saepe eveniet pariatur voluptatum veritatis itaque incidunt fugiat sint laborum eos, alias modi?</div>
                    </div>
                </div>
                <div className="style-image">
                    <div><img src={bg} alt="" srcset="" /></div>
                    <div><img src={bg} alt="" srcset="" /></div>
                    <div><img src={bg} alt="" srcset="" /></div>
                    <div><img src={bg} alt="" srcset="" /></div>
                    <div><img src={bg} alt="" srcset="" /></div>
                    
                </div>
               
                <div className="card-container flex-column">
                    <h1>watch us</h1>
                    <img src={video} alt="" srcset="" className="video" />
                </div>
                <div className="card-container flex-column ">
                    <div className="card flex-column">
                        <h2 className="topic">News</h2>
                        <div className="content paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis recusandae sunt asperiores iure quos. Voluptatibus fuga, harum aspernatur possimus corrupti repellat, ipsam modi, officiis quae quasi sequi consectetur sit magnam?</div>
                        <button className="flex-end paragraph">Read</button>
                    </div>

                </div>
                <div className="card-container flex-column">
                   <h2 className="topic">Courses</h2>
                   <div className="card fl">
                        <div><img src={course1} alt="" srcset="" /></div>
                        <div><img src={course1} alt="" srcset="" /></div>
                        <div><img src={course1} alt="" srcset="" /></div>
                   </div>
                   <button className="btn-course paragraph">There's more</button>
                </div>
            </div>
            <div className="footer">

            </div>
        </div>

    )
}