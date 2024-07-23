/** Function used to smoothly scroll into a specific section inside the current page using its section id */
export const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};
