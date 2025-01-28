
<div <div style="display: flex; gap: 20px; align: center;">
    <div class="column">
    <h4>CI Build</h5>
    <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/juanjo-ga/core-blockhouse/ci.yml">
    </div>
    <div class="column">
    <h4>Android Build</h5>
    <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/juanjo-ga/core-blockhouse/android-build.yml">
    </div>
    <div class="column">
    <h4>IOS Build</h5>
    <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/juanjo-ga/core-blockhouse/ios-build.yml">
    </div>
</div>


## Blockhouse Assesment  
  

### Contents

- [Project Setup](#project-setup)
- [CI/CD Workflows](#cicd-workflows)
- [Scalability of Workflows](#scalability-of-workflows)


### Introduction

*My name is Juan Garcia a Computer Engineer student at Florida State University, I am passionate about Hardware and Software engineering, I have always had a hobby for making mobile application hence I was drawn into React Native, I usually put my everything into my projects and have had great teaching lessons, I hope i can become part of the team!*


#### Getting Started

1. Clone the repo `https://github.com/juanjo-ga/core-blockhouse.git` & `cd core-blockhouse`
2. Install nodejs 
4. Building for each Platform:
    _Expo allows for web, android, ios builds_
    ##### Android
    1. Set up JDK 17
    2. Set up Expo
    3. Set up Android SDK
    4. Install Dependencies: 
    - **Yarn** (Recommended)
    ``yarn install``
    5. Use expo to do `expo build:android` and `yarn run android`
    
    ##### IOS
    1. Set up XCode Tools
    2. Set up Expo
    4. Install Dependencies: 
    - **Yarn** (Recommended)
    ``yarn install``
    5. Use expo to do `expo build:ios` and `yarn run ios`

    ##### Web
    1. Set up Expo
    2. Install Dependencies: 
    - **Yarn** (Recommended)
    ``yarn install``
    3. Use expo to do `expo build:web` and `yarn run web`
    
---    

### Project Setup

Picking the stack for this project was relativily easy due to the time sensitity nature of of the project, However with that in mind no part of the stack is something that is not used in a production grade level.


### Tech Stack

#### Frontend
**React**: A JavaScript library for building user interfaces.
**TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
#### State Management
**Redux**: A predictable state container for JavaScript apps.
**React-Redux**: Official React bindings for Redux.
**Redux Thunk**: Middleware that allows writing action creators that return a function instead of an action.
#### Form Handling & Validation
**React Hook Form**: Performant, flexible, and extensible forms with easy-to-use validation.
**Zod**: TypeScript-first schema declaration and validation library.
**@hookform/resolvers**: Allows using external validation libraries like Zod with React Hook Form.
#### Styling
**Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
**NativeWind**: Tailwind CSS-in-JS for React Native (if applicable).
**React Native SVG**: SVG support for React Native (if applicable).
#### Testing
**Jest**: A delightful JavaScript Testing Framework with a focus on simplicity.
**React Testing Library**: Simple and complete React DOM testing utilities.
**@testing-library/jest-dom**: Custom Jest matchers to test the state of the DOM.


---

#### CI/CD Workflows

**Workflow Triggers**: The CI/CD workflows are configured to run automatically on push requests to the main branch. This ensures that every change pushed to the main branch undergoes the build and testing processes before being integrated into the production environment.

**Automated Builds**: Upon successful completion of tests, the workflows initiate the building of iOS and Android executables using EAS by Expo. This automation facilitates immediate availability of executable builds, streamlining the deployment process.

**Leveraging EAS**: Given the nature of the tech stack, EAS by Expo is utilized to handle the building of executables on Expo's infrastructure. This approach offloads the resource-intensive build processes from GitHub Actions runners to Expo's optimized build machines, ensuring efficient and reliable build executions.

**Generating Expo Token**
If you wish to build with Expo EAS you must head to their website and log in to your account in order to make a token:

https://expo.dev/accounts/[account]/settings/access-tokens

You must then add this to your workflow as a secret in your github account in order to leverage EAS for a build.


#### CI/CD Expansions

To automate the deployment process, integrate deployment steps into your CI/CD workflows. This ensures that once the build process is successful, the application is automatically deployed to the desired platforms or services.

**Example:** Deploying to Expo from already linked EAS built instance

```yml 
- name: Build Android app
        run: eas build --platform android --profile preview --local --output ${{ github.workspace }}/app-release.apk
```

Removing `--local` will build from your EAS already linked built.


**Integrate Type-Checking**:

```yml

- name: Type Check
  run: yarn type-check
```




