export const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

export const scrollToElement2 = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}