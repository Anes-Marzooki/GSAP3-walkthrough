# The from and fromTo tweens

The **`gsap.from()`** tween animates _backword_ the target **from** the values specified back **to** its current values.

```
gsap.from(".tmux", {x:400, y:400});
```

The **`gsap.fromTo()`** tween gives more control to animate a target from a starting value to an ending value.

```
gsap.fromTo(".tmix", {x:400, y:400}, {x:200, y:200});
```

## Notes:

_To achieve the best results from `fromTo` tween_, **_make sure that the `from` vars and the `to` vars have the same properties._**

## Links and resources:

- The **`gsap.fromTo()`** docs: https://greensock.com/docs/v3/GSAP/gsap.fromTo().

- The **`gsap.from()`** docs: https://greensock.com/docs/v3/GSAP/gsap.from().
