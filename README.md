# Code Editor Web App
A simple web-based code editor that allows you to write and run HTML, CSS, and JavaScript code in real-time. This code editor provides basic code editing features, code compilation, copying the output, and locking/unlocking the editor.
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Features
# Code Editing:
  Edit HTML, CSS, and JavaScript code in dedicated text areas.

# Code Compilation: 
  Click the "RUN" button to compile and execute your code in real-time. The output is displayed in an iframe on the right side.

# Copy Output: 
  Click the "COPY" button to copy the output displayed in the iframe to your clipboard.

# Lock/Unlock Editor: 
  Toggle between locking and unlocking the code editor. When locked, you cannot run or edit the code.

# Save Code: 
  Click the "SAVE" button to download the code as a text file. The downloaded file contains your HTML, CSS, and JavaScript code.
  

# Usage
Enter your HTML code in the "HTML" text area.

Enter your CSS code in the "CSS" text area.

Enter your JavaScript code in the "JAVASCRIPT" text area.

Click the "RUN" button to see the output in the right-side iframe.

Click the "COPY" button to copy the output to your clipboard.

Click the "LOCK" button to prevent further edits, and "UNLOCK" to allow editing again.

Click the "SAVE" button to download the code as a text file.

# Technologies used
React: This code editor is built using React, a popular JavaScript library for building user interfaces.

JavaScript: The editor compiles and runs JavaScript code in an iframe.

# Installation
1. Clone this repository to your local machine.
   git clone <repository-url>
   
2. Navigate to the project directory.
   cd code-editor-web-app
   
3. Install the required dependencies.
   npm install

4. Start the development server.
   npm start
   
5. Open your web browser and access the app at http://localhost:3000.

# License
This project is licensed under the MIT License - see the LICENSE file for details.

# Author
Kumar Sharad
github url- https://github.com/KnightRiderSharad/Code-Editor







Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
