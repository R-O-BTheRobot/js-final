interface PopupButtonProps {
    name: string,
    onClick: () => void,
}

export default function PopupButton({onClick, name}: PopupButtonProps) {
    return (
        <a className="hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1.5"
            href={'#'} onClick={onClick}>
            {name}
        </a>
    )
}