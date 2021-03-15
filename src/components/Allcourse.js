import { useState } from 'react'
import Course from "./Course"

const Allcourse = () => {
    const [courses, setCourses] = useState([
     {title:"ReactJS", subtitle:"easy to learn", text:"one of the powerful libriry to start leaning"},
     {title:"Django course", subtitle:"easy to learn", text:"one of the powerful FRAMEWORK to start leaning"},
     {title:"Spring boot course", subtitle:"learn", text:"one of the powerful FRAMEWORK to start leaning"},   
    ]);
    return(
        <div>
            <h1>All Courses</h1>
            <p>List of courses</p>
            {courses.length>0 ? courses.map((item) => 
                <Course course={item}/>
                ) : "No course" }
        </div>
    )
}
export default Allcourse;