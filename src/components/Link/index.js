import './styles.css';

export function Link({ title = 'Email', link = '#' }) {
    return(
        <a href={link} rel="noreferrer" className="link">
            {title}
        </a>
    );
}