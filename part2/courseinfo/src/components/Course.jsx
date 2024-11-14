const Header = ({name}) => {
return (
    <div>
    <h1>{name}</h1>
    </div>
)
}

const Part = ({part}) => {
return (
    <li >
    {part.name} {part.exercises}
    </li>
)
}


const Content = ({parts}) => {  
return (
    <div>
    <ul>
        {parts.map(part => 
        <Part key={part.id} part={part} />
        )}
    </ul>
    </div>
)
}

const Total = ({parts}) => { 
return (
    <div>
    The total number of exercises is: {parts.reduce((sum,part) => sum+part.exercises,0)}
    </div>
)
}



const Course = ({course}) => {
return (
    <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </div>
)
}

export default Course

  