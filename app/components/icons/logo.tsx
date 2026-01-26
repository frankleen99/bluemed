export const Logo =({className = "", ...rest}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
            className={className}
            {...rest}
        >
            <circle cx="50" cy="50" r="50" fill="#4F46E5" />
            <path
                d="M30 70 L50 30 L70 70 Z"
                fill="white"
            />
        </svg>  
    )
}