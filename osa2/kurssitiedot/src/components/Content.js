import Part from './Part'

const Content = ({ course }) =>
    <li>
    {course.parts.map(part => 
    <Part key={part.id} part={part} />
    )}
    </li>

  export default Content