# Global Loading & Error State Demo

![screenshot](./screenshot.png)

## Theory

Refer to my [blog](https://medium.com/@zzdjk6/implement-global-loading-and-error-state-with-redux-thunk-routine-and-typescript-b278f93e99fd)

## UI Overview

This is a very simple demo to show how to implement the global loading and error state.

We have 3 cards in the screen.

The 1st card contains 2 buttons which allow us to simulate loading data from different sources: A or B.
There is check box to allow us simulate error while loading data.

The 2nd card has a table in it.
It will show spinners when loading happens for corresponding sources.

The 3rd card displays errors for A and B in a table as well.

## Instructions

If we click button A, we will see there is a spinner next to A show in the 2nd card.<br/>
And if we click button A and B at the same time, we will spinners for both A and B show at first,
and then the spinner for A disappears because loading A is faster than loading B.<br/>
Whenever we are loading something, spinner next to Any always shows.<br/>

Now we tick the checkbox to make errors when loading data.<br/>
We expect the same behavior of displaying loading spinners, but there should be errors after loading.<br/>
We also expect when click the button again, the error message for corresponding source should be cleared.

## Conclusion

According to the demo, we could see this implementation of global loading and error state gives us a lot of flexibility when use them.
Also, as we centralize the logic of handling loading and error states, we can expect that there should be much less boilerplate to deal with these states in our code.
