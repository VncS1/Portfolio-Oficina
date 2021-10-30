import './styles.css';

import { Link } from '../Link';
import { Heading } from '../Heading';

export function Footer(){
    return(
        <footer className = "footer">
            <Heading>Reach me Out</Heading>
 
            <div className = "footer__link">
                <Link link="mailto:viniciusmachioni11@gmail.com" title="Email"/>
                <Link link="https://www.linkedin.com/in/vinicius-machioni/" title="Linkedin"/>
                <Link link="https://github.com/VncS1" title="Github"/>
                <Link link="https://www.instagram.com" title="Instagram"/>
            </div>
        </footer>
    );
}