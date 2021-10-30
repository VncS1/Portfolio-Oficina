import './styles.css';

import { Heading } from '../Heading';

export function ServiceCard({image, title = '', description = ''}){
    return(
        <article className="service">
            {image}

            <Heading size="small"> { title } </Heading>
            <p className = "service__description">{description}</p>
        </article>
    );
}