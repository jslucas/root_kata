# Root Coding Problem

## Getting Started

This solution was written and tested using Node.js v12.18.3, the current LTS release. It has not been tested on any other versions.

## Prerequisites

Check to make sure you have Node.js installed and are running v12.18.3.

```
node -v
```

If you're on a different version, you can use a version manager such as `n`.
To install:

```
npm install -g n
```

To use:

```
n 12.18.3
```

## Dependencies

After you're running Node.js v12.18.3, run the following from the root of the project to install dependencies.

```
npm install
```

## Running

This solution takes the path to a file as an argument, you can run it like this:

```
node src/index.js ./path/to/file.txt
```

## Running the tests

```
npm test
```

```
npm run test-watch
```

## Thoughts

From the problem statement I saw this solution as having three main units of work: parsing input, calculating, and reporting (formatting). Knowing that I figured I would end up with a function composition looking roughly like `input => parse => calculate => report` in my `index.js`. This problem was approached using TDD and is mostly Functional in nature. Most of the solution uses the native `.map()`, `filter()`, and `.reduce()` although a couple areas utilize [`Ramda`](https://ramdajs.com/)'s Functional library.

I tried to keep the solution simple but still logically separate concerns. I'll do a quick walkthrough of each piece, showing their return, with the following input:

```
Driver Dan
Trip Dan 07:15 07:45 17.3
```

`inputParser` handles ingesting and parsing the input, returning objects representing a driver and their trips.

```
=> [ { name: "Dan", trips: [ { start: [object Moment], end: [object Moment] } ]} ]
```

`tripCalculator` houses the business logic like filtering out trips above or below the mph threshold and calculating the properties needed for the report.

```
=> [ { name: "Dan", distance: 17.3, averageMph: 34.6 } ]
```

`reportGenerator` only has the responsibility of sorting and formatting data.

```
=> Dan: 17.3 miles @ 34.6 mph
```

### Testing

I focused on behavioral testing as this solution focuses on immutability and pure functions-- this lets us avoid testing for side-effects and instead just focus on input and output. This helped me to continually break apart my functions so that each (exported) unit is primarily concerned with composition which I think helps keep things quickly readable.

## Assumptions

- A driver will be registered before a `Trip` is entered for them. If a trip is entered for a driver that doesn't exist yet
  it will be ignored.
- Commands are normalized-- `Driver` will not come
  in as `DRIVER` or `driver`
