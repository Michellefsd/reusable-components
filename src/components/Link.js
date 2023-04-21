import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation();

    const classes = classNames(
      currentPath === to && activeClassName,
      className, 
      'text-blue-500 p-2 mx-1 mb-3'  
    );

//esto supuestamente hace q se abra 
// otra ventana en vez de cambiar el contenido de la mism en la q se clicko
    const handleClick = (e) => {
      if(e.metaKey || e.ctrlKey) {
        return;
      }
        // e.preventDefault();
        navigate(to)
    };

  return <a className={classes} href={to} target="blank" onClick={handleClick}>{children}</a>
}

export default Link;