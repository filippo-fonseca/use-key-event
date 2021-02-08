# `useKeyEvent`

###### v0.0.3-alpha | STABLE

![CI Status](https://github.com/webmail/use-last-fm/workflows/CI/badge.svg)
![Stars](https://img.shields.io/github/stars/filippo-fonseca/use-key-event)
![LICENSE](https://img.shields.io/github/license/filippo-fonseca/use-key-event)
![SIZE](https://img.shields.io/bundlephobia/minzip/use-key-event)

⌨️ A lightweight, zero-dependency React hook for detecting dynamic keyboard events. Written in TypeScript. 

## Installation

```bash
yarn add use-key-event
# or
npm i use-key-event
```

`use-key-event` is lightweight and carries no extra dependencies, making it perfect for building production applications and dkeeping them light.

## Usage

**Example:**

###### Home.tsx
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

`use-key-event` is written in TypeScript (statically-typed) and comes with type definitions out-of-the-box, so using it with TypeScript in your application (even in production-grade environments) will be seamless and integrated.

## Contributing

PRs, issues, and contributions are welcome! You can read the code of conduct [here](https://github.com/filippo-fonseca/use-key-event/blob/main/CODE_OF_CONDUCT.md).

<hr /> 

Created and maintained with ❤️ by [**@FilippoFonseca**](https://www.twitter.com/FilippoFonseca).

