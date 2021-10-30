import cx from 'classnames';

import './styles.css';

export function Heading({ children, lineBottom = false, size = 'normal', id= "" }) {
    return(
        <div className={cx({ 'heading--bottom' :  lineBottom})}>  {/* Se lineBottom for falso, ignora a classe, se for verdadeiro aplica ela */}
            <h2 id={id} className={ cx({ [size]: true, 'line--bottom' : lineBottom }) }> {children} </h2>
        </div>
    );
}