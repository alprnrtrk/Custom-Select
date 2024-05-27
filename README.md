# Custom-Select

A simple and customizable dropdown select component implemented in JavaScript.

## Features

- Customizable styles
- Easy to integrate
- Lightweight and efficient
- Icon support
- Tailwind migrated
- Smooth animation
- Change selected index of original `<select>`

# Example:

## HMTL
```html
<select name="test" id="test">
  <option value="placeholder">--placeholder--</option>
  <option value="1">--1--</option>
  <option value="2">--2--</option>
</select>
```
## JavaScript
```javascript
let selectText = new SelectBox('#test', {
  wrapperClass: 'relative w-full p-[5px] rounded-lg border border-solid border-special-dark/14 text-special-dark/65 text-lg',
  parentClass: 'duration-450',
  childClass: 'p-[5px] rounded-lg hover:bg-special-heartGray duration-450',
  buttonClass: 'group w-full !text-left',
  textClass: 'text-xl text-dark',
  iconClass: 'icon-arrow-solid-down group-[&.active]:rotate-180 text-[15px] text-black duration-450'
});
```
## Output

```html
<div class="relative w-full p-[5px] rounded-lg border border-solid border-special-dark/14 text-special-dark/65 text-lg"><button class="group w-full !text-left" type="button" style="display: flex; justify-content: space-between; align-items: center;"><span class="text-xl text-dark">--placeholder--</span><i class="icon-arrow-solid-down group-[&amp;.active]:rotate-180 text-[15px] text-black duration-450"></i></button>
    <ul class="duration-450" style="overflow: hidden; height: 0px;">
        <li class="p-[5px] rounded-lg hover:bg-special-heartGray duration-450" value="1" style="cursor: pointer;">--1--</li>
        <li class="p-[5px] rounded-lg hover:bg-special-heartGray duration-450" value="2" style="cursor: pointer;">--2--</li>
    </ul>
</div>
```
