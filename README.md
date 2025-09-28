# COUNTER
Counter on React that increases the number by 1 when you press the `Плюс +` button, and decreases it when you press te `Минус -` button.

## How to install
1. Download the repository: `git clone 'https://github.com/Aw1ks/first-react-project.git'`
2. Go to folder: `cd first-react-project`
3. Run the command: `npm start`

## How to edit 
### Files
 - package.json: The project configuration file that contains information about project dependencies, scripts, settings, and other project metadata. 

 - package-lock.json (or yarn.lock): This file commits Exact versions of all installed packages in the project. It is used to ensure reproducibility package installations when working in a team and when deploying the project to other servers. 

 - node_modules/: A directory containing all Defined dependencies for the project. When you run the npm install or yarn install command, that's it The necessary packages are installed in this directory. 

 - public/: Directory containing static files, which will be accessible from the root of your app. In it usually contains HTML, favicon, global CSS styles and other static resources. 

 - src/: The main directory of your application, which contains React source files. It usually Components, styles, scripts, and other files are found associated with your app.

 - index.js: The main JavaScript file, which is entry point for your React app. In it, The root component is rendering applications to the HTML element on the page. 
 
 - App.js: A file containing a major component of your Application. Usually, routes and The components you want to display on the page.

 - App.css: The style file for the App.js component, Contains CSS rules that are applied to the component. 
 
 - index.css: A file with styles for the root element, in which renders the application.

 - logo.svg: An example of an image file that by default is included in the demo project Create React App. 
 
 - serviceWorker.js: File responsible for registration service worker who allows the app to run offline (caching content, etc.)
 
 - setupTests.js: A file containing the settings for running tests of the application.

### Variables
1. Variable `let [count, setCount] = useState(0)` is responsible for increasind and recreasing the counter value.
