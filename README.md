# `useKeyEvent`

![CI Status](https://github.com/webmail/use-last-fm/workflows/CI/badge.svg)

⌨️ A lightweight, zero-dependency React hook for detecting dynamic keyboard events.

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
  useKeyEvent("Enter", handleEvent);

  const handleEvent = () => {
    console.log("The enter key has been pressed.");
  };

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

PR's, issues, and contributions are welcome!

<hr />

Created and maintained with ❤️ by [**@FilippoFonseca**](https://www.twitter.com/FilippoFonseca).

