# Global Loading & Error State Demo

![screenshot](./screenshot.png)

Demo: https://zzdjk6.github.io/demo-global-loading-state/build/index.html

## Theory

Refer to my [blog](https://medium.com/@zzdjk6/implement-global-loading-and-error-state-with-redux-thunk-routine-and-typescript-b278f93e99fd)

## Overview

The demo is very simple.

There are 3 buttons in the first card to simulate loading data from different sources.

> Click A (This is loading A)

> Click B (This is loading B)

> Click C (And this is loading C)

While data is loading, we can see that there are spinners appear in the second card.

This card contains a table, while the right column is the place for spinners, the left column indicates when these spinners should show up.

For example, the first spinner will always show up when we are loading some data.

> Click A, B, C one-by-one

In contrast, the second spinner will only show up when we are loading A or B, not loading C.

> Click A, B, C one-by-one

The rest 3 rows just show spinners when loading A, B, C respectively.

We can tick the checkbox to generate errors when loading data.

> Click checkbox

And the 3rd card will display error messages for corresponding sources.

> Click A, B, C one-by-one

By the way, there is no conflicts among loading data from different sources because the loading and error states are stored per routine.

So it is perfectly fine to start loading them at the same time, and the spinners are still working correctly.

> Click A, B, C at the same time / quickly

We can have a look at the structure of states in redux-dev-tools.

> Click the last action, and expend the States > Raw

> Select loading state (This is the loading state)

> Select error state (And this is the error state)

That's it.
