# blockTracker - A Crypto Tracking Application

### Deployed Site

[Visit blockTracker here!](https://block-tracker.vercel.app/)

## Table of Contents

1. [Introduction](#introduction)
2. [Instructions](#setup-instructions)
3. [How-To](#using-blockTracker)
4. [Learning Goals](#learning-goals)
5. [Challenges & Wins](#challenges-&-wins)
6. [Reflections](#reflections)

## Introduction

  The task was to build an app that reaches a niche audience, consuming an API of our choice. Given growing interest in the crypto currency space, I have created an app that allows users to view the top crypto-currencies. Users are also able to add their favorite cryptos to a watchlist. Please follow the [setup instructions](#setup-instructions) below on how to begin!

## Setup Instructions

  1. Fork this repo - on the top right corner of this page, click the **Fork** button.
  2. Once forked, `git clone [ssh key]` in your terminal, to add this repo locally.
  3. Run `npm install` to install all of this projects dependencies.

[Back to Top of Page](#table-of-contents)

### Testing

This application uses the Cypress test suite for end-to-end testing. To run these tests, run the command `npx cypress open` and select the test file you would like to run.


### Technologies Used

- React
- React Hooks
- React Router
- Sass
- Github & Github Projects
- End-to-end testing
- Local Storage
- Cypress
- Prop Types


[Back to Top of Page](#table-of-contents)

## Using blockTracker

### Login Page

On page load, you are greeted by a login page. This is currently designed to create a user account on their local device. If a user does not have an account, they are able to enter a username and password and select Create Account. This will save the users profile to local storage and take the user to the dashboard page. Existing users are able to enter their username and password and select Login to be taken to the dashboard to view their favorited coins on their watchlist in addition to all other top cryptocurrencies.

![login page example gif](https://media.giphy.com/media/eFO7SNNmSwlUK0vKcW/giphy.gif)

### Header

The navigation bar will remain along all sections of the page, its allows users to logout upon login.


### Dashboard Page

Once a user has logged in, the dashboard page will display a list of top crypto-currencies. Each currency has a 'Watch' button that will move the coin to the watchlist section that appears before other cryptos. Once a coin has been added to the watchlist, it can then be removed by selecting the 'Unwatch' button.

![dashboard favoriting](https://media.giphy.com/media/AnCxg8JsnoOQgLmFyd/giphy.gif)

Users are able to change the currency being displayed in the coin data.

![currency selection](https://media.giphy.com/media/7Qoi3R4Bx1LiMRDAtg/giphy.gif)

Future Iterations:
- Add crypto news.
- Add helpful pop-ups that will explain aspects of the coin data that may be unfamiliar to those new to the crypto space.

[Back to Top of Page](#table-of-contents)

## Learning Goals

- For this project, I really wanted to push myself to focus on following a professional workflow . To accomplish this, I remained conscious of the idea that somebody may need to follow the entire evolution of the project from start to finish. By keeping this in mind, I wrote more descriptive pull requests than I had in the past, and made sure to atomize my commits, and use clear and concise messages.

- Additionally, I wanted to spend extra time focusing on code outside the scope of core functionality. This includes writing tests that were as in-depth as possible, and implementing prop type checks and stricter input checks. I tend to focus too much on adding additional features, and certain foundational practices will be neglected in the process. By slowing my workflow, and focusing on solid fundamentals, I feel confident that my code is clearer and less prone to issues.

[Back to Top of Page](#table-of-contents)

## Challenges & Wins

### Challenges

- **Reaching an audience:** selecting a specific target audience can be tricky. For this project, I went back and forth between several audiences I wanted to reach. I ultimately landed on cryptocurrency due to its rising widespread interest.

- **React Routes:** Proper implementation of React router, specifically redirects and persistent data when refreshing the page proved to be more challenging than anticipated..
- **Testing:**  Ensuring full end-to-end testing can be tedious, but ultimately, ensuring that every aspect of your application is being checked is rewarding.

### Wins

- **Modularity** I wanted to ensure that the file structure of this project was properly broken up and modular to allow for easier code navigation.
- **Project Documentation** I took care to stay up on top of my project board/issues, along with atomized commits. These allow the evolution of the project to be tracked, and decision points for new feature implementation to be easily tracked.

[Back to Top of Page](#table-of-contents)

### Reflections

- **Use Context** I encountered several problems during this project that could have been greatly simplified by using a context provider. It helped me gain a better understanding of the practical applications of useContext, and is something I plan on furthering my knowledge/proficiency of in the future.
- **Cypress Testing** I was able to gain more experience and knowledge using the Cypress testing suite, and plan on digging in to some of the more advanced concepts going forward. I was also able to gain a greater understanding and appreciation of end-to-end testing.
- **Time Management** Due to the short time-frame of this project, I was able to gain a greater understanding of how I am able to work more effectively. Specifically, I learned that walking away from the project later at night and getting rest can be much more beneficial than struggling with an issue until it is resolved. Normally, I would step away when I encountered a problem. Because of the short time-frame, I initially started this project without getting enough rest. This was a valuable lesson to take into the future, allowing me to more effectively approach projects with short turnarounds.

[Back to Top of Page](#table-of-contents)

### Contributors

<table>
  <tr>
    <td> Jeff Kersting <a href="https://github.com/JeffKersting">GH</td>
  </tr>
 <td><img src="https://avatars.githubusercontent.com/u/69732297?s=460&u=00030864e625ff24c4d8f902473b89e6f0c450ac&v=4" alt="Jeff Kersting"
 width="150" height="auto" /></td>
</table>


[Back to Top of Page](#table-of-contents)
