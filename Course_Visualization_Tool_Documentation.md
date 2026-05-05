# Final Project - Course Visualization Tool: Documentation

**CIT 31200**  
**Matthew Martin**

---

## How LESS/SCSS was used
I used SCSS to improve the organization of the styling across the project. Variables were defined for key colors such as Purdue gold, black, and background tones, so these values could be reused throughout the stylesheet. This made it easier to maintain a consistent design and make updates. The SCSS file was then compiled into a CSS file using a preprocessor, which is what the site uses to apply the styles in the browser.

---

## How Responsiveness was Achieved
Responsiveness was achieved using Bootstrap’s grid system along with media queries. Bootstrap containers, rows, and columns were used to create a layout that automatically adjusts across different screen sizes and devices. Additional SCSS media queries were added to improve spacing, text size, and layout on smaller screens.

---

## Hamburger Menu
A responsive hamburger menu was implemented using Bootstrap’s navbar component. On larger screens, the full navigation bar is displayed, while on smaller screens it collapses into a hamburger icon. This uses Bootstrap’s collapse feature, allowing the menu to expand and close when clicked. This makes sure that navigation is accessible and user-friendly across all device sizes.

---

## Favicon
A custom Purdue favicon was created and used for the site. The favicon matches the Purdue theme used throughout the project and was added to the HTML files using a `<link rel="icon">` tag in the head section.

---

## Features of Bootstrap Used and Why
Multiple Bootstrap features were used to improve the design and functionality of this project. Cards were used to display the nine academic programs in a structured format. Modals were used to display course information when users click on “View course map.” The navbar was used for navigation and includes the responsive hamburger menu. The grid system was used to organize content and ensure responsiveness. Buttons were styled using Bootstrap classes to create consistent and interactive elements. I used these features because they helped the site’s components stay reliable, responsive, and visually consistent.

---

## How Accessibility is Integrated
Accessibility was incorporated by using semantic HTML elements and Bootstrap’s accessible components. Headings were structured to improve readability and navigation for screen readers. Form elements in the quiz include labels to clearly describe answer choices/inputs. Color contrast was also considered to ensure text is readable for all users. Bootstrap components such as the navbar and modals also include built-in ARIA attributes, which help support assistive technologies.
