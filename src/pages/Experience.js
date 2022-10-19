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
                    date="2016-2022 (5 years 7 month)"
                    icon={<IconWork />}
                    iconStyle={{ background: "royalblue", color: "#fff"}}
                >
                    <h3 className="vertical-timeline-element-title"> Synergetech Co., Ltd.,Nonthaburi, Thailand </h3>
                    <p> Role : Automation Engineer </p>
                    <p> Responsibilities : Design, Develop, Test, Deploy, Commissioning </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;