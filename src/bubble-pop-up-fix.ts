function hideElementsUntilBubbleCard() {
    const intervalId = setInterval(function() {
        const selector = "body";
        const root = document.querySelector(selector);
        const bubbleCard = customElements.get("bubble-card");

        if (bubbleCard) {
            clearInterval(intervalId);
            root.style.transition = "opacity 0.5s";
            root.style.opacity = "1";
        } else {
            root.style.opacity = "0";
        }
    }, 0);
}

hideElementsUntilBubbleCard();

console.info(
    `%c Bubble Card %c Pop-up fix `,
    'background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)',
    'background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)'
);