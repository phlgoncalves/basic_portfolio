import SocialNetworks from './SocialNetworks'

import Avatar from '../img/me.jpeg'

import '../styles/components/sidebar.scss'
import InformationContainer from './InformationContainer'


const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Pedro Goncalves" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            {/* <a href="#" className="btn">Download currículo</a> */}
        </aside>
    )
}

export default Sidebar
