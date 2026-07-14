import AboutMe from "./Portafolio/Views/AboutMe"
import { Education } from "./Portafolio/Views/Education"
import Experience from "./Portafolio/Views/Experience"
import Home from "./Portafolio/Views/Home"

const App = () => {
  return (
    <div>
    {<Home/>}
    {<AboutMe/>}
    {<Education />}
    {<Experience />}
    </div>      
  )
}

export default App
