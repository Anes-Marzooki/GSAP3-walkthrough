# Staggering

When dealing with multiple targets, we can use the awesome `stagger` property to offset the start time on the targets in one single tween.

_Here will have a 0.2 seconds between the start of each target. we can pass a negative value to start from the last target backwards._

```
gsap.to(".container .box", { x: 200, stagger: 0.2 });
```

`stargger` accepts an object that can have many properties for more control like from where to start and the timing of the stagger is dispersed.

```
gsap.to(".container .box", { x: 200, stagger:{ each: 0.2, from:'center' }});
```

- `each:0.2` means will have a `0.2` seconds between the start of each animation.
- `from:'center` means will start the stagger from the center.

We can start from `edges`, `center`, `end` and more.

## Notes:

When working with a grid is a good idea to check the documentation for the `grid` property of `stagger`.

## Links and resources:

Staggers docs: https://greensock.com/docs/v3/Staggers
