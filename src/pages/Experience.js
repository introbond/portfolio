import React from "react";
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import IconSchool from "@material-ui/icons/School"
import IconWork from "@material-ui/icons/Work"

const Experience = () => {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement 
                    className="vertical-timeline-elemt--education"
                    date="2009-2012"
                    icon={<IconSchool />}
                    iconStyle={{ background: "#3e497a", color: "#fff"}}
                >
                    <h3 className="vertical-timeline-element-title"> Benchama Maharat Ubon Ratchatani </h3>
                    <p> High School Diploma : Sci-Math</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-elemt--education"
                    date="2012-2016"
                    icon={<IconSchool />}
                    iconStyle={{ background: "#3e497a", color: "#fff"}}
                >
                    <h3 className="vertical-timeline-element-title"> King Mongkut's Institute of Technology Ladkrabang </h3>
                    <p> Bachelor's Degree : Automation Engineering </p>
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
                    <p> &emsp; - Schneider Electric automation: Unity Pro series </p>
                    <p> &emsp; - AVEVA: Wonderware SystemPlatform, InTouch & InBatch </p>
                    <p> &emsp; - VMware: ESXi server edition </p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement 
                    className="vertical-timeline-elemt--education"
                    date="Jan 2022 - Present"
                    icon={<IconWork />}
                    iconStyle={{ background: "royalblue", color: "#fff"}}
                >
                    <h3 className="vertical-timeline-element-title"> Software development self learning </h3>
                    <p> Q2: </p>
                    <p> &emsp; - Traditional system programming practice JS. </p>
                    <p> &emsp; - Laser focus on data structure & algorithms. </p>
                    <p> &emsp; - Blockchain's API mobile app monitoring using Google cloud. </p>
                    <p> Q3: </p>
                    <p> &emsp; - Start using git & GitHub. </p>
                    <p> &emsp; - Start learing tools, libraries & frameworks. </p>
                    <p> Q4: </p>
                    <p> &emsp; - Become an advance backend developer. </p>
                    <p> &emsp; - Making more open source projects & keep learning. </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;