import './styles.css';

export function Menu(){
    return(
        <menu className="menu">
            <div className="menu__logo">Alo</div>
            <nav>
                <a className="menu__link" href="#projects">Projects</a>
                <a className="menu__link" href="#services">Services</a>
                <a className="menu__link" href="#skills">Skills</a>
            </nav>
        </menu>
    );
}