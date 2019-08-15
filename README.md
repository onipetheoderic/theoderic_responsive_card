# theoderic_responsive_card

> 

[![NPM](https://img.shields.io/npm/v/theoderic_responsive_card.svg)](https://www.npmjs.com/package/theoderic_responsive_card) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save theoderic_responsive_card
yarn add theoderic_responsive_card
```

## Usage

```jsx
import React, { Component } from 'react'

import ExampleComponent from 'theoderic_responsive_card'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent>
       <div Target="_self" HoverColor="yellow" BodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem." HeaderText="Welcome yall" ImageLink="https://www.laweekly.com/wp-content/uploads/2019/05/nocturnal-wonderland-2016-arrests-759x500.jpg"></div>
        
        <div HeaderText="Welcome yall" ImageLink="https://www.laweekly.com/wp-content/uploads/2019/05/nocturnal-wonderland-2016-arrests-759x500.jpg"></div>
        
        <div HeaderText="Welcome Yall" ImageLink="https://images.pexels.com/photos/96627/pexels-photo-96627.jpeg"></div>
        
        <div HeaderText="Welcome yall" ImageLink="https://desktop-wallpaper.net/wp-content/uploads/2019/02/aurora-wallpaper-879289-768x432.jpg"></div>
        
        <div HeaderText="Welcome yall" ImageLink="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"></div>
        
        <div HeaderText="Welcome yall" ImageLink="https://cdn.pixabay.com/photo/2016/10/20/18/35/sunrise-1756274_960_720.jpg"></div>

        </ExampleComponent>
      </div>
    )
  }
}

```

## PropTypes
```
static propTypes = {
    ImageLink: PropTypes.string,
    ImageHeight: PropTypes.number,
    HeaderText: PropTypes.string,
    BodyText: PropTypes.string,
    BodyColor: PropTypes.string,
    Link: PropTypes.string,
    ImageOpacity: PropTypes.number,
    Height: PropTypes.number,
    Width: PropTypes.string,
    alternateText: PropTypes.string,
    HoverColor: PropTypes.string,
    Target: PropTypes.string,
    BodyTextFontSize: PropTypes.number,
    BodyTextColor: PropTypes.string,
    HeaderTextFontSize: PropTypes.number,
    HeaderTextColor: PropTypes.string,
    HoverBodyTextFontSize: PropTypes.number,
    HoverBodyTextColor: PropTypes.string,
    HoverHeaderTextFontSize: PropTypes.number,
    HoverHeaderTextColor: PropTypes.string,
    HoverBodyTextFontSize: PropTypes.number,
    HoverBodyTextColor: PropTypes.string
  };
  static defaultProps = {
    ReadMoreText: 'Read more',
    ReadMoreColor: 'blue',
    BodyColor: 'white',   
    ImageOpacity: 0.5,
    Height: 300,
    Link: "https://github.com/onipetheoderic",
    Width: "22%",
    ImageHeight: 200,
    HoverColor: '#008CBA',
    BodyText: "welcome to theoderic packages",
    Target: "_blank",
    BodyTextColor: "#1b2631",
    BodyTextFontSize: 12,
    HeaderTextFontSize: 20,
    HeaderTextColor: "#1b2631",
    HoverBodyTextFontSize: 12,
    HoverBodyTextColor: "#1b2631",
    HoverHeaderTextFontSize: 20,
    HoverHeaderTextColor: 'white',
    HoverBodyTextFontSize: 12,
    HoverBodyTextColor: 'white'
  }

```


## License

MIT © [onipetheoderic](https://github.com/onipetheoderic)
