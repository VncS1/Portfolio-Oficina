import './styles.css';

export function SkillCard({image, title = ''}) {
    return(
       <article className="skill">
            <div className="skill__image"> {image} </div>
            <h2 className="skill__title background">{title}</h2>
       </article>

    );
}