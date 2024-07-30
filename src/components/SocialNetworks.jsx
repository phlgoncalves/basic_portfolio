import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.scss";

const socialNetworks = [
    { name: 'linkedin', icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/pedrohlgoncalves/' },
    { name: 'github', icon: <FaGithub />, href: 'https://github.com/phlgoncalves/' },
    { name: 'instagram', icon: <FaInstagram />, href: 'https://instagram.com/' },
]

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.href} target="_blank" className="social-btn" id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    )
}

export default SocialNetworks