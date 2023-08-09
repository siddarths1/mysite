import React from 'react'
import './Education.css';
import {VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';

function Education() {
  return (
    <div className='education-container'>
      <h2>About Education</h2>

      <VerticalTimeline lineColor='black'>
        <VerticalTimelineElement
          className='vertical-timeline-element'
          date='2020-2024'
          iconStyle={{background: "black" , color:"white"}}
        >
           <h4 className='vertical-timeline-element-title'>Bachelor's Degree</h4>
          <p>Currently Pursuing Bachelor's Degree in Computer Science and Engineering</p>
            <p>Kongu Engineering College - Erode</p>
        </VerticalTimelineElement>
      </VerticalTimeline> 
        
        
      <VerticalTimeline lineColor='black'>
        <VerticalTimelineElement
          className='vertical-timeline-element'
          date='2020'
          iconStyle={{background: "black" , color:"white"}}
        
        >
           <h4 className='vertical-timeline-element-title'>HSC</h4>
          <p>Higher Secondary Certificate</p>
          <p>Holy Cross Matriculation Higher Secondary School - Salem</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <VerticalTimeline lineColor='black'>
        <VerticalTimelineElement
          className='vertical-timeline-element'
          date='2018'
          iconStyle={{background: "black" , color:"white"}}
        
        >
           <h4 className='vertical-timeline-element-title'>SSLC</h4>
          <p>Higher Secondary Certificate</p>
          <p>Golden Gates Matriculation Higher Secondary School - Salem</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
     </div>
  )
}

export default Education