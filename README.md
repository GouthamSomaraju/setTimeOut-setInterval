# SetTimeOut & setInterval New Year Countdown

This project showcases a simple New Year countdown using JavaScript's `setTimeout` and `setInterval` methods. The page features a countdown timer that starts from 10 seconds and displays a message when the countdown reaches zero. After the countdown ends, a "Happy New Year!" message is shown, followed by a wishing message after a brief delay.

## Features

- **Countdown Timer**: Displays a countdown from 10 seconds to 0.
- **Dynamic UI**: The page has a gradient background and a card-like container that adjusts to the countdown.
- **Message Display**: Once the countdown ends, a "Happy New Year!" message appears, followed by an additional message after a short delay.

## Technologies Used

- **HTML**: For structuring the content.
- **CSS**: For styling the page and creating the gradient background and card.
- **JavaScript**: For the countdown functionality and dynamic message updates.
- **Bootstrap**: For additional styling and responsiveness.

## How It Works

1. **HTML Structure**: The page has a card container with a countdown timer and message placeholders.
2. **JavaScript Logic**:
   - The countdown starts at 10 and decrements by 1 every second using `setInterval`.
   - When the countdown reaches zero, the countdown is hidden and a "Happy New Year!" message appears using `setTimeout`.
   - After 3 seconds, an additional message appears wishing the user a fantastic year ahead.
3. **CSS Styling**: The background is created using a linear gradient, and the card is styled with rounded corners, shadow effects, and centered text.

