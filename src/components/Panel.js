import classNames from "classnames";

function Panel({ children, className, ...rest}) {
    const panelClassNames = classNames('border rounded p-3 shadow bg-white w-full')
  return (
    <div {...rest} className={panelClassNames} >{children}</div>
  );
}

export default Panel;