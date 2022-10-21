import React from "react";
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import IconSchool from "@material-ui/icons/School"
import IconWork from "@material-ui/icons/Work"
import IconInt  from "@material-ui/icons/LocalLibraryOutlined"
import IconBorn from "@material-ui/icons/FavoriteBorder"

const Experience = () => {
    const born = new Date("02/03/1994");  
    const ageMonth = Date.now() - born.getTime();  
    const ageDay = new Date(ageMonth);   
    const ageYear = ageDay.getUTCFullYear();  
    const age = Math.abs(ageYear - 1970);

    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement 
                    className="vertical-timeline-elemt--education"
                    date="Feb 1994"
                    icon={<IconBorn />}
                    iconStyle={{ background: "#3e497a", color: "#fff"}}
                >
                    <h3 className="vertical-timeline-element-title"> Born in Ubon Rachatani, Thailand </h3>
                    <p> Age: {age} years old</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-elemt--education"
                    date="2009 - 2012"
                    icon={<IconSchool />}
                    iconStyle={{ background: "#3e497a", color: "#fff"}}
                >
                    <h3 className="vertical-timeline-element-title"> Benchama Maharat Ubon Ratchatani </h3>
                    <p> High School Diploma: Sci-Math</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-elemt--education"
                    date="2012 - 2016"
                    icon={<IconSchool />}
                    iconStyle={{ background: "#3e497a", color: "#fff"}}
                >
                    <h3 className="vertical-timeline-element-title"> King Mongkut's Institute of Technology Ladkrabang </h3>
                    <p> Bachelor's Degree: Automation Engineering </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-elemt--education"
                    date="Jul 2016 - Jan 2022 (5 years 7 months)"
                    icon={<IconWork />}
                    iconStyle={{ background: "royalblue", color: "#fff"}}
                >
                    <h3 className="vertical-timeline-element-title"> Synergetech Co., Ltd.,Nonthaburi, Thailand </h3>
                    <p> Role: Automation System Engineer </p>
                    <p> Designed, developed, tested, and commissioned many projects <br/>(especially "batching control system")</p>
                    <p> Working with: </p>
                    <p> &emsp; - PLC (Low code platform for device controller) </p>
                    <p> &emsp; - HMI & SCADA (UI for industrial automation stuff) </p>
                    <p> &emsp; - Database for ERP communication purpose</p>
                    <p> &emsp; - 3rd party communication protocols</p>
                    <p> &emsp; - Low-voltage analog signal </p>
                    <p> Product Speacialist: </p>
                    <p> &emsp; - Rockwell Automation </p>
                    <p> &emsp; - Schneider Electric Automation: Unity Pro series </p>
                    <p> &emsp; - AVEVA: Wonderware SystemPlatform, InTouch & InBatch </p>
                    <p> &emsp; - VMware: ESXi server edition </p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement 
                    className="vertical-timeline-elemt--education"
                    date="Jan 2022 - Present"
                    icon={<IconInt />}
                    iconStyle={{ background: "#3e497a", color: "#fff"}}
                >
                    <h3 className="vertical-timeline-element-title"> Self-learning: Software Development </h3>
                    <p> Q2: </p>
                    <p> &emsp; - Traditional system programming practice (JS ES6). </p>
                    <p> &emsp; - Laser focus on logic, loop, data structure & algorithm. </p>
                    <p> &emsp; - Blockchain's API mobile app monitoring using Google cloud. </p>
                    <p> Q3: </p>
                    <p> &emsp; - Start using git & GitHub. </p>
                    <p> &emsp; - Start learning tools, libraries & frameworks. </p>
                    <p> Q4: </p>
                    <p> &emsp; - Become an advance backend developer. </p>
                    <p> &emsp; - Making more open source projects & keep learning. </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;