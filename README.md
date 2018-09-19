# resumeGenerator
Generate a pdf resume from your linkedin profile's data

1. Install dependencies: `npm install`
2. Start the bot: `npm start`
3. Follow the prompts
4. Get your pdf resume from root directory (it will be called "resume.pdf")

##Please feel free to add themes (and make a PR :)

Easy way to develop new themes: 
1. Run the app. You will now have an html file in the "blackGold" theme
2. Install live-server: `npm install -g live-server`
3. Copy blackGold theme directory to new directory with your theme's name, rename your files accordingly
4. In your new theme's directory run `liver-server`
5. Edit the CSS / LESS files to make your new theme
6. In "constants.js" change the "theme" property to reflect the **exact** name of your theme (should be the same as the directory name and CSS file)

####Note:
If you want to see what is going on in the browser, you can change the "headless" property in constants.js to "false". **Be aware:** actually printing a pdf **must** be done in *headless* mode.