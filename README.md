# Full Stack NSCC App

## Steps
1. Download the zipped up template
2. run > npm install
3. Go to the Google Firebase console and navigate around until you find your firebase config (;t's in settngs)
4. Update the firebase config
5. run >npm start

## Steps for Tailwindcss
1. npm install -D tailwindcss
2. npx tailwindcss init (to create tilwind.config.js file)
3. configure the config.js file. In contents - "./src/**/*.{html, js}"
4. add tailwind directive to your default css file. 
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
5. Start tailwind CLI build process. 
   npx tailwindcss -i ./src/default.css -o ./dist/output.css --watch
6. Start using tailwind in your html
    under head; <link href "/dist/output.css rel="stylesheet">

This section has moved here: [httfy](htfy)
