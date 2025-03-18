interface Props {
    bgColor: string,
    text: string,
    textColor: string,
    filled: boolean,
    onClick: () => void
}

function Button(props: Props) {

    const { bgColor, text, textColor, filled, onClick } = props

    return (
        <button className={`${bgColor} text-${textColor} ${filled ? 'bg-opacity-100' : 'bg-opacity-0'} px-6 py-2 rounded-4xl`} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
