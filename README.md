# HOLIDAY ENJOYMENT

## Authors

- [@saikrishna]

# Project Title


- Created a movie recommendation system for "Microsoft Mentee Program". Built the whole app in React Js.This is an movie,trending , tv series and search web app. you can watch trailers and get overview of specific movie or tv series. Also you can get similar movie or tv series.This project is created with React JS and the help of [TMDB](https://www.themoviedb.org/) API. Also i have used Material UI .

## API Reference

## How to get the API key?

Create an account in https://www.themoviedb.org/
click on the API link from the left hand sidebar in your account settings and fill all the details to apply for API key.

If you are asked for the website URL, just give "NA" if you don't have one. You will see the API key in your API sidebar once your request is approved.

```http
  GET /api/data/movies
```

| Parameter | Type | Description |
| `api_key` | `movies` | https://api.themoviedb.org/3/discover/movie?api_key=74f5938285ff4cb9d571ebcf8646ab9c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL} |

```http
  GET /api/data/trending
```

| Parameter | Type       | Description                                                                             |
| :-------- | :--------- | :-------------------------------------------------------------------------------------- |
| `api_key` | `trending` | https://api.themoviedb.org/3/trending/all/week?api_key=74f5938285ff4cb9d571ebcf8646ab9c |

```http
  GET /api/data/Tv series
```

| Parameter | Type | Description  
| `api_key` | `Tv series` | https://api.themoviedb.org/3/discover/tv?api_key=74f5938285ff4cb9d571ebcf8646ab9c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL} |

```http
  GET /api/data/search
```

| Parameter | Type     | Description                                                                                                                                                               |
| :-------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `api_key` | `search` | https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=74f5938285ff4cb9d571ebcf8646ab9c&language=en-US&query=${searchText}&page=${page}&include_adult=false |

## Installation

- For creating a project we have to create a folder in a Local disk (data).After we have to open the visual studio in that go to file then go to open folder open which you created in a local disk.Then open the New Terminal start the Installation process

- Install "node.js " using Terminal command.
- we have to create a new project for that we have to type command"npx create-react-app-name"(name means the name what u want to create like enjoyment).It will go to create a app reprojectry and it will take all of the things that are requried for creating the new react app and it going to bring all of this things in this folder.
- Now type the command "cd Enjoyment "
- Again type the command "npm start"
  Runs the app in the development mode.Open http://localhost:3000 to view it in the browser.The page will reload if you make edits.You will also see any lint errors in the console.

The page will reload if you make edits.
You will also see any lint errors in the console.

- Install material-ui/core using Terminal command: " npm install @material-ui/core"
- Install material-ui/icons using Terminal command:" npm install @material-ui/icons"
- Install material-ui/lab using Terminal command:"npm i @material-ui/lab"
- Install material-ui/axios using Terminal command:"npm install axios"
- Install Router-dom using Terminal command:"npm install react-router-dom@5.2.0"
- Install Carousel using Terminal command:"npm i react-alice-carousel"
- Install material-ui\icons\utils using Terminal command :"npm install @material-ui\icons\utils"

## Technologies Used

- HTML
- CSS
- Java Script
- React Java Script

## Features

- Light/dark mode toggle
- Fullscreen mode and we change the screen mode also
- Cross platform
- Search Discover Movies and Tv Series
- Watch the trailer
- we can see the discription of the movies and Tv Series
- See images related to movie and TV Series
- It is a auto play mode it stop as soon as we hover on it.
- Provide every season episode info
- we having the pagination components by that we can expoise more and more movies and TV series.
- By using genres we can select different movies by clicking single genres or multiple genres
- It is adapting to different different screen size and model converts to landscape mode and to the portrait mode according to the screen size.
- simple material-ui

## Badges

- [![Movie Icon][("https://mui.com/material-ui/material-icons/?query=trendi&selected=whatshot")]
- [!Trending Icon][ ("https://mui.com/material-ui/material-icons/?query=trending&selected=whatshot")]
- [!Tv Icon][("https://mui.com/material-ui/material-icons/?query=tv&selected=tv")]
- [!Search Icon][("https://mui.com/material-ui/material-icons/?query=search&selected=search")]

## Color Reference

| Color            | Discripition                |
| ---------------- | --------------------------- |
| chocolate Color  | For Header and Main Nav bar |
| white Color      | For Text                    |
| tear Color       | For poster                  |
| Fire Brick Color | For app                     |

## Documentation

## Components

- I created a new folder name "components" in that i created a four folder i.e"Carousel,ContentModal,Pagination,SingleContent".In that Carousel folder i created a two new files Carousel.css and Carousel.js.In that Carousel.css for styling and Carousel.js for writing the code for image which is related to program if the image is not there it will show the "no picture"

- For ContentModal i have created a new files of ContentModal.css and ContentModal.js.In that ContentModal.css for the stylingthe title,description,about,portrait,media,webkit-scrollbar and landscape.And ContentModal.js in that i written the code for while u click the poster in trending or movies or series it will show us the "watch the Trailer".By click it it will goes to the youtube i wll run the Trailer by the code written in the ContentModal.js.

- In the Pagination folder i created a file name CustomPagination.In that i written a code for styling and Pagination ,how many pages.

- In the SingleContent folder i created a two files SingleContent.css and SingleContent.js .In that SingleContent.css for styling the poster,title,subtitle,media.And in the SingleContent.js i written code for how to make the poster ,title,subtitle,data,rating,Tv seriesor movies and it show the poster which was not there it will like as not avaliabe.

## Genres

- Genres is used in Tv series and movies for which type of movies or series u want we can select the no of genres and also we can delete the selected genres.

## Header

- Header.css is used for styling the header like background color,font family,font size,color,boxshadow,cursor,display....etc.Header.js in that i written the code for header i.e "HOLIDAY ENJOYMENT".and if u goes to the bottom part if u want to come first poster by click in the header("HOLIDAY ENJOYMENT") u can directly goes to first poster.
- MainNav.js is used for SimpleBottomNavigation

## Config

- In the config folder we created a new file config.js in that it will show the size of image and links as shown in below.
- //image sizes for tmdb
  export const img_300 = "https://image.tmdb.org/t/p/w300";
  export const img_500 = "https://image.tmdb.org/t/p/w500";

- // contentModal and singleContent
  export const unavailable =
  "https://www.movienewz.com/img/films/poster-holder.jpg";

- // contentModal
  export const unavailableLandscape =
  "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg";

- // For Carousel
  export const noPicture =
  "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";

## Pages

- In that we having the foldernames like Movies,Series,Trending,Search. In the Movies i written code for which type of content it will hold and the through the API KEY we are taken the movies which was stored in it.In the search i written code for which type of content it will hold and the through the API KEY we are taken the search which was stored in it.And wile we are searching the movies or series which was there it will shown as will as while i was seraching which was not there it will shown that "No movies found" ad "No series found".In the Series i written code for which type of content it will hold and the through the API KEY we are taken the Series which was stored in it.In the Trending i written code for which type of content it will hold and the through the API KEY we are taken the Trending which was stored in it.

## APP

- In that we written the styling for the app in app.css.And in app.js we written route for the changing the one route to another route without the refresh page.
## Running the app
- while running the frist we have to give the commnad "cd enjoyment".then we have to type npm start.
