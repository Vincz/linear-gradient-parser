# linear-gradient-parser
Converts a linear gradient SVG String / Json rep into CSS background property

## Installation

```
npm i linear-gradient-parser
```

[Live Demo](https://stackblitz.com/edit/linear-gradient-parser?file=index.js)

## Usage
Linear gradient parser comes in handy when you need get a svg linear gradient as background.
It can accepts both SVG linearGradient string / Json as input in order to produce it's background.

```js
import parser from 'linear-gradient-parser';

// SVG String input
const linearGradientString = `
<linearGradient xmlns="http://www.w3.org/2000/svg" gradientUnits="userSpaceOnUse" x1="17.5001" y1="32" x2="17.5001" y2="2.9711">
    <stop offset="0" style="stop-color:#FCB3A4"/>
    <stop offset="1" style="stop-color:#DA5899"/>
</linearGradient>
`

const stringResult = parser.getBackground(linearGradientString);

console.log(stringResult) 
//outputs : {angle: 360, background: "linear-gradient(360deg, rgb(252, 179, 164) 0%, rgb(218, 88, 153) 100%)"}

// JSON input
const linearGradient = {
    x1: '17.5001',
    y1: '32',
    x2: '17.5001',
    y2: '2.9711',
    stops: [
        { color: '#FCC3A4', offset: '0', opacity: 0.5 },
        { color: '#AAA899', offset: '1' }
    ]
};

const jsonResult = parser.getBackground(linearGradient);

console.log(jsonResult) 
//outputs : {angle: 360, background: "linear-gradient(360deg, rgb(252, 179, 164) 0%, rgb(218, 88, 153) 100%)"}
```

### Methods

#### getBackground
| Name | Type | Default Value | Required? | Description
|-|-|-|-|-
| `linearGradient` | `String|LinearGradient` | `undefined` | Yes | The linear gradient to parse

Returns: { angle: Number , background: String } 
