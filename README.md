# `useKeyEvent`

![CI Status](https://github.com/webmail/use-last-fm/workflows/CI/badge.svg)
![Stars](https://img.shields.io/github/stars/filippo-fonseca/use-key-event)
![Twitter](https://img.shields.io/twitter/url?style=social)

⌨️ A lightweight, zero-dependency React hook for detecting dynamic keyboard events. Written in TypeScript.

## Installation

```bash
yarn add use-key-event
# or
npm i use-key-event
```

## Usage

**Example:**

```tsx
import useKeyEvent from "use-key-event";

const Home = () => {

  const handleEvent = () => {
    console.log("The enter key has been pressed.");
  };
  
    useKeyEvent("Enter", handleEvent);

  return (
    <p>
      Press the enter key and check your console!
    </p>
  );
};

export default Home;
```

## TypeScript

`useKeyEvent` is written in TypeScript and comes with type definitions out-of-the-box, so using it with TypeScript in your application will be seamless and integrated.

## Contributing

PR's, issues, and contributions are welcome! You can read the code of conduct [here](https://github.com/filippo-fonseca/use-key-event/blob/main/CODE_OF_CONDUCT.md).

<hr /> 

Created and maintained with ❤️ by [**@FilippoFonseca**](https://www.twitter.com/FilippoFonseca).

