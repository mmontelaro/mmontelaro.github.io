import Project from "./Project.jsx"

export default function ProjectList({projects}) {
    return (<div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
        {projects.map((p, i) => {return <Project key={i} project={p} />})}
    </div>)
}