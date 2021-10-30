import './styles.css';

import { Heading } from '../Heading';

export function ProjectCard({title = '', description = '', link = '#'}){
    return(
        <a href={link} rel="noreferrer">
            <article className="card__content">
                <Heading size="small">{title}</Heading>
                <p className="card__description">{description}</p>
            </article>
        </a>
    );
}