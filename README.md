# A Basic Tween

To create our tween we used the [gsap.to()](<https://greensock.com/docs/v3/GSAP/gsap.to()>) method.

GSAP has a default duration of 0.5 seconds(500ms) that can be changed using the (gsap.default())[https://greensock.com/docs/v3/GSAP/gsap.defaults()] method like so: `gsap.default({duration: 2});`.

### Performance note:

To achieve the best performace, it's a good practice to animate CSS **transforms** and **opacities**, because they benefits from hardware acceleration and it's much easier for browsers to update `x` and `y` (transforms) rather than `top` and `left` which affect the layout of the document and causes a **reflow**:

- `x` and `y` (_translateX and translateY in CSS_)
- `rotation`, `rotationX`, `rotationY`
- `skewX` and `skewY`
- `scaleX`, `scaleY`, `scale`

## Links and resources:

- The **`gsap.to()`** docs: https://greensock.com/docs/v3/GSAP/gsap.to().

- The **`gsap.default()`** docs: https://greensock.com/docs/v3/GSAP/gsap.defaults().
