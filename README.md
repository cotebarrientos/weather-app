# Weather App

**Weather-App** is my second project using react, and this App is able to give the weather forecast up to a week, and it is updated every hour thanks to the information provided by the [OpenWeather API](https://openweathermap.org/). 

This project is part of the exercises performed in my specialization course about React JS and Redux on [Udemy](https://www.udemy.com/course/react-js-redux-es6-completo-de-0-a-experto-espanol/).

**You can visit this project by clicking [here](https://weather-app-react-udemy.herokuapp.com/)**

## Technologies Used
### Languages
- HTML 5
- CSS 3
- JavaScript
- JSX

### Libraries and APIs
- [React JS 17.0.2](https://reactjs.org/)
- [Google Fonts](https://fonts.google.com/)
- [Vanta JS 0.5.21](https://www.vantajs.com/)
- [Recharts 2.0.10](https://recharts.org/en-US/)
- [Moment JS 2.29.1](https://momentjs.com/)
- [Convert Units 2.3.4](https://www.npmjs.com/package/convert-units)
- [Material UI 4.12.2](https://mui.com/getting-started/installation/)
- [OpenWeather API](https://openweathermap.org/)


### Tool Used
- [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [StoryBook UI](https://storybook.js.org/)
- [Heroku](https://dashboard.heroku.com/)

## Deployment

### Clone Project from GitHub

**1.** Follow this link to the [Project GitHub repository](https://github.com/cotebarrientos/weather-app).

**2.** Scroll to the top of this repository and click on the "clone or download button".

**3.** Decide whether you want to clone the project using HTTPS or an SSH key and do the following:
- HTTPS: click on the checklist icon to the right of the URL.
- SSH key: first click on 'Use SSH' then click on the same icon as above.

**4.** Open the 'Terminal'.

**5.** Choose the location for the cloned directory.

**6.** Type `git clone`, and then paste the clone URL.
- `git clone https://github.com/USERNAME/REPOSITORY`

**7.** Press 'Enter' to create your local clone.

### Local Deployment

For local deployment you must have an IDE, like for example **VS Code**

**1.** After cloning this project, navigate to the correct file location after unpacking the files.
- `cd <path to folder>`

**2.** Then run the following command in the terminal, in order to run this project locally.
- `npm start`

**3.** After that, this React project should be running on `http://localhost:3000/`

### Deploy using Heroku

**1.** In Heroku, create an app. The app must have a unique name.

**2.** Link that app to the GitHub repository by going to the "Deploy" tab in the main app menu.

**3.** In the Settings tab, add the corresponding Configuration Variables which are the same that are present in the local development:

    REACT_APP_WEATHER_API_KEY = 'your OpenWeather API key here'

**4.** Then in the Settings tab, press the **Add buildpack** button and add the following link: `https://github.com/mars/create-react-app-buildpack`

**5.** Go to the Deploy tab, and press the **Deploy Branch** button, wait until your app finish the process.

## Credits

### Code
Part of coding written for this project was based on the source code provided by [weather-app-2020](https://github.com/correooke/weather-app-2020), which is part of the specialization course called [React JS + Redux + ES6. Completo ¡De 0 a experto! (español)](https://www.udemy.com/course/react-js-redux-es6-completo-de-0-a-experto-espanol/). 

The buildpack used for the heroku deployment, you can find it in the **[mars](https://github.com/mars/create-react-app-buildpack)** GitHub repository

### Media
All images obtained for this project were consulted from [Iconfinder](https://www.iconfinder.com/).

### Acknowledgements
I would like to thank the following people who encouraged me to continue specializing in the IT area.
- My boyfriend.
- My family and friends

I also want to thank the engineer [Emiliano Ocariz](https://github.com/correooke), for doing the specialization course about React and Redux, which was very practical when teaching and exposing everything, also part of the code used is of his authorship. 

---

> **Disclaimer:** The content of this mini project is for educational purposes only.