import className from "classnames";

function Button({
    children,
    primary,
    secondary,
    success, 
    warning, 
    danger,
    darkMode,
    black,
    rounded,
    outline,
    ...rest
}) {
    const classes = className('px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-600 bg-green-600 text-white': success,
        'border-red-500 bg-red-500 text-white': danger,
        'border-yellow-400 bg-yellow-400 text-slate-900': warning,
        'border-black-700 bg-black-700 text-white': black,
        'border-gray-200 bg-gray-200 text-black': darkMode,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-900': outline && warning,
        'text-red-500': outline && danger,
    })
    return <button className={classes} { ...rest }>{children}</button>;
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger, black, darkMode }) => {
        const count =
         Number(!!primary) +
         Number(!!secondary) +
         Number(!!success) +
         Number(!!warning) +
         Number(!!danger) +
         Number(!!black) +
         Number(!!darkMode);

        if(count > 1) {
            return new Error(
                'Invalid Props, apparently you are using two styles of Button who changes the same values'
            );
        }
    },
};

export default Button;
