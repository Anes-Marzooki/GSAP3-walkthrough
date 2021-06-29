# Tween Controlss

Tweens have different methods for controlling playback like `play()` and `pause()`.

In order to control the tween we need a reference. `const myTween = gsap.to(...);`

By default a tween will play automatically, so in order to control it we can set a property `paused` to `true`.

```
const myTween = gsap.to(".tmux", { x: 200, paused:true });
```

And then we can use the control methods like `play()` to play the animation.

```
myTween.play();
```

Appart from `play()` we can also use `pause()`, `restart()`, and `reverse()`.

## Notes:

In GSAP when a tween's playhead gets to the end it doesn't restart.

## Links and resources:

- Paused property docs: https://greensock.com/docs/v3/GSAP/Tween/paused().
- Play method docs: https://greensock.com/docs/v3/GSAP/Tween/play().
- Pause method docs: https://greensock.com/docs/v3/GSAP/Tween/paused().
- Restart method docs: https://greensock.com/docs/v3/GSAP/Tween/restart().
- Reverse method docs: https://greensock.com/docs/v3/GSAP/Tween/reverse().
- Tween's methods and properties: https://greensock.com/docs/v3/GSAP/Tween.
