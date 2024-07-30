import AboutContainer from './AboutContainer'
import ProjectsCotainer from './ProjectsCotainer'
import TechnologiesContainer from './TechnologiesContainer'

import '../styles/components/maincontent.scss'

const MainContent = () => {
    return (
        <main id='main-content'>
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectsCotainer />
        </main>
    )
}

export default MainContent