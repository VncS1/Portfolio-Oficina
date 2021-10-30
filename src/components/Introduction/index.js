import './styles.css';

import { Heading } from '../Heading';
import { Link } from '../Link';

export function Introduction(){
    return(
        <section>
            <Heading size="normalent">
                Hi, I'm Vinicius <br />
                I love to build amazing apps.
            </Heading>
            <div className="introduction__description">
                <p>Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet</p>
            </div>

            <Link title="Work with me" link="mailto:viniciusmachioni11@gmail.com" />
        </section>
    );
}