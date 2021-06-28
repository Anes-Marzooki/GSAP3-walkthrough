# delay and repeat properties

The configuration object (vars object) have some _optional_ **special** properties like `delay` and `repeat`.

- **`repeat`** propperty represents how many times the animation should repeat.
  So a `repeat` with value `1`, would play the animation **two** times.

  ```
  gsap.to(".tmux", {x:200, repeat: 1});
  ```

- **`delay`** property represents the amount of delay(in seconds) before the animation should start. So an animation with `delay` set to `2` will animate after 2 seconds.

  ```
  gsap.to(".tmix", {x:00, delay:2});
  ```

- **`repeatDelay`** property represents the amount of time to wait between repeats. So an animation with `repeatDelay` set to `2` will wait 2 seconds between each repeat.

  ```
  gsap.to(".tmix", {x:200, repeat:3, repeatDelay:2});
  ```

- **`yoyo`** if set to true the animation will play back and forth, with each repeat the target will run in the opposite direction.

  ```
  gsap.to(".tmix", {x:200, repeat:3, yoyo: true});
  ```

## Notes:

Special properties are not animated.

## Links and resources:

https://greensock.com/docs/v3/GSAP/Tween/vars
