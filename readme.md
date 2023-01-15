<p align="center"><img src="https://user-images.githubusercontent.com/68524965/204993149-2701734e-9e36-4709-b208-5d212d83db7c.gif"></p>


# FaceMovie

:film_strip::clapper: FaceMovie is a social network for movie lovers.
Search, add, review and share your favorite movies!


## Badges

![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)


## Features

:paintbrush: Design and assets created in Figma; <br> 
:iphone: Mobile-First Responsive Web Design; <br>
:sunny::crescent_moon: Light mode/dark mode toggle; <br>
:mag: Search engine that works based on incomplete information; <br>
:hammer_and_wrench: OMDB and NYT (Movie Reviews) APIs


## Screenshots
<p align="middle">
<img src="https://user-images.githubusercontent.com/68524965/205730074-bd249913-c6af-43c1-a0b4-f9d8fc1fdad8.png" width="24%" height="41%">
<img src="https://user-images.githubusercontent.com/68524965/205088299-9c48b9db-0f39-4a7a-9058-bdd0a48ef292.png" width="24%" height="41%">
<img src="https://user-images.githubusercontent.com/68524965/205084293-a9679678-547d-467f-8ae0-6ba52bd1648c.png" width="24%" height="41%">
<img src="https://user-images.githubusercontent.com/68524965/205084306-99569748-12d9-440d-a546-7caf34cd82e4.png" width="24%" height="41%">
</p>

<p align="middle">
<img src="https://user-images.githubusercontent.com/68524965/205730249-8db6d909-ec22-4774-a0b9-deac60384c83.png" width="24%" height="41%">
<img src="https://user-images.githubusercontent.com/68524965/205088316-428aebfb-441e-4904-9861-5665b1cc9b90.png" width="24%" height="41%">
<img src="https://user-images.githubusercontent.com/68524965/205088326-a52c6dda-77b7-4e9d-a72e-26a3abebaf33.png" width="24%" height="41%">
<img src="https://user-images.githubusercontent.com/68524965/205088349-5ceb6082-55d7-4cde-8fba-cff27c5edb3a.png" width="24%" height="41%">
</p>


## How to access

Create your own list <a href="https://facemovie.vercel.app/" target="_blank">here</a>.

## Authors

- [@Caio Cabral](https://github.com/marcelluscaio)
- [@Sayonara Crestani](https://github.com/screstani)

## APIs used

https://www.omdbapi.com/

https://developer.nytimes.com/


## Still to come
- [X] Adjust search modal header spacing
- [X] Create animation for search list

Features
- [ ] Learn how to use Firebase (User information + Movies)
- [ ] Use Firebase to store information

-Create login using BEM. Things aer breaking
- [ ] Create login / Subscribe
    (Other page, not modal)
    (Login, Password, Confirm password, email)
    https://dev.to/felix/floating-input-placeholders-with-html-css-ej4#:~:text=First%2C%20you%20have%20to%20put,the%20input%20in%20the%20HTML.&text=This%20will%20ensure%20that%20we,can%20use%20transform%3A%20translate()%20.
   Criar login
   https://www.youtube.com/watch?v=z5-9sN4i7xE&ab_channel=TurtleCode

   Form responsivo
   https://www.geeksforgeeks.org/design-a-responsive-sliding-login-registration-form-using-html-css-javascript/



- [ ] Reestructure code to sanitize CSS and movie creation with OOP
- [ ] Create loader to wiat for api call?

- [ ] Make filter button work
- [ ] Make burger work
- [ ] Crete 404 error
- [ ] User gives his own review (limit of characters)
- [ ] User review appears on tooltip

Fix
- [ ] Align switch label with username*
- [ ] Put user controls into main/card section*
- [X] Try to fix Chrome bug with dimension set in JS
- [ ] Adjust mode switch to 4k
- [ ] Make OMDB fetch independent from NYTimes (?)
- [ ] Check if Dark mode implementation abides by these rules (https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/) *
- [ ] Check contrast*
- [ ] Should debounce be on Load movie instead of find movie? How to do it?
- [ ] Search with one-letter name doesnt work. Add director search?
- [ ] problem with viewport units in mobile devices: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
- [ ] Bug: depois que um filme é selecionado com a crítica do NY Times, mesmo que o próximo não tenha, vai puxar a do anterior

## Planning/Timeline
- [X] Create layout on Figma
- [X] Create page structure
- [X] Create add film action
- [X] Get information from OMDB API
- [X] Get information from NY Times API
- [X] Create search engine
- [X] Implement Light/Dark Mode
- [X] Create modal
   - [x] Make Modal appear and disappear on click
   - [X] Avoid body from scrolling
- [X] Search input styling
- [X] Use of mix-blend-mode to addapt to dark mode withou using new asset
- [X] Create action of card addition
- [X] Result modal styling
   - [X] On reload grid result scrolls
   - [X] Style buttons in grid result
   - [X] Give possibility of user to grade the movie
   - [X] Style range
   - [X] Change Range's Thumb Heart color on dark mode using filter
- [X] Setting card section height based on other element's size
- [X] Scrollbar and select styling
- [X] Total responsiveness

## Contributing

Contributions are always welcome!

Please read the <a href='/contributing.md'>contribution guidelines</a> first.
