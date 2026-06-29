/* ============================================
   STYLES.CSS - MODULAR REFERENCE GUIDE
   
   This file has been split into modular CSS files.
   See the structure below:
   ============================================ */

/* 
  IMPORT ORDER (as they appear in index.js):
  
  1. reset.css              - CSS resets and browser defaults
  2. base.css               - Global styles, typography, colors
  3. layout.css             - Grid layout, flexbox utilities
  4. header.css             - Header and navigation styling
  5. footer.css             - Footer styling
  6. sidebar.css            - Project list sidebar styling
  7. forms.css              - Form inputs and buttons
  8. components.css         - Task checkboxes and interactive elements
  9. card.css               - Card template styling (page-specific)
  10. popUpForm.css         - Popup modal styling (page-specific)
*/

/* FILE ORGANIZATION:

base.css
  - body { ... }
  - Global typography and background

layout.css
  - .grid-layout { ... }
  - .features { ... }
  - .feature { ... }
  - aside { ... }

header.css
  - header { ... }
  - header .logo { ... }
  - header nav ul { ... }
  - header nav a { ... }

footer.css
  - footer { ... }
  - footer .socials { ... }

sidebar.css
  - .sidebar { ... }
  - #projectsDiv { ... }
  - #projectsDiv button { ... }

forms.css
  - .inputGroup { ... }
  - .taskHeader { ... }

components.css
  - .checkboxDiv { ... }
  
*/

/* BENEFITS OF THIS STRUCTURE:

1. Separation of Concerns
   - Each file handles a specific section of the app
   - Easier to locate and modify styles
   
2. Scalability
   - Easy to add new components/pages
   - Simple to maintain large projects
   
3. Reusability
   - Generic classes (.inputGroup, .feature) can be reused
   - Base styles provide consistent styling foundation
   
4. Performance
   - Can lazy-load specific CSS if needed
   - Better organization for minification/optimization
   
5. Collaboration
   - Multiple developers can work on different CSS files
   - Reduces merge conflicts
   
*/
