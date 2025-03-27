export interface IButton {
    /** Button text */
    text: string;
    /** Indicates if the button text should be animated */
    animateText?: boolean;
    /** Function to be executed when button is clicked */
    onClick?: () => void;
    /** Indicates if the button is disabled */
    disabled?: boolean;
}
