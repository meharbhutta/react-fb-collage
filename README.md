# react-fb-collage
Image Grid or Collage component for React

<a href="https://twitter.com/intent/follow?screen_name=meharbhutta">
    <img 
        src="https://img.shields.io/twitter/follow/meharbhutta.svg?style=social&logo=twitter"
        alt="follow on Twitter"
    >
</a>

## NPM

- stable release version: ![version](https://img.shields.io/badge/version-0.5.0-blue.svg?cacheSeconds=2592000)
- package downloads: ![downloads](https://img.shields.io/badge/downloads-22%2Fweek-brightgreen.svg?cacheSeconds=2592000)
- [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Show Case

![](https://github.com/meharbhutta/react-fb-collage/blob/main/demo.PNG)

## Getting Started

### Installation

```bash
npm i react-fb-collage --save
```

### Basic Usage

- Initialization of a react project

```bash
$ npx create-react-app AwesomeProject
```

### Note: [GUIDE](https://create-react-app.dev/docs/getting-started)

- Then, `cd AwesomeProject`

- Install library
  
```bash
$ npm i react-fb-collage
```
- Then, edit `AwesomeProject/App.js`, like this:

```typescript
import React from "react";
import FBCollage from "react-fb-collage";

function App() {
    const images = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        "https://upl/oad.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  ];

  return (
    <div className="App">
      <FBCollage
        style={{ backgroundColor: "black" }}
        images={images}
        height={720}
        width={592}
        borderRadius={40}
      />
    </div>
  );
}

export default App;
```

### Props

| parameter | type  | required | description | default |
| :--------------------- | :------------------------------------------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| images | array | yes | The array of image sources of <br> require('../image-file') <br> or <br> 'imageURL' <br> or <br> both    |  |
| imageOnPress | function<br>`(index, images) => void` | no | The callback for image on press listener | `() => {}` |
| width | number | no | The width of the view | `357` |
| height            | number                                                                                 | no       | The height of the view                                                                                                                                                                | `200`                                                     |
| borderRadius                  | number                                                                                 | no       | The border radius of the images                                                                                                                                                                                                                 | `12`                                                       |
| spacing        | number                                                  | no       | The spacing between the images and the view                                                                                                                                                                                                                 | auto                                                      |
| style         | object                                              | no       | To override the main view style                                                                                                                                                                                                      | default                                                |
| overlayStyle               | object                                              | no       | To override the text view overlay style                                                                                                                                                                                                              | default                                                |
| textStyle                 | object                | no         |       To override the text style                                                                                             | default      |
## Development pattern

### Step 1,

After clone this repo, then:

```bash
cd demo
```

### Step 2, run demo

```bash
npm install
npm start
```

#### In case of any issue follow the [GUIDE](https://facebook.github.io/react-native/docs/getting-started).

### Supported React Versions  

This project aims to support any version of React.

If you require new features or bug fixes for older versions you can fork this project.

### Credits

The idea for this modules came from facebook collage.

### Licenses

FBCollage - MIT © MeharBhutta
