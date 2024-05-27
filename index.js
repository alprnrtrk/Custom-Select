import { SelectBox } from "./customSelect.js";

let selectText = new SelectBox('#test', {
    wrapperClass: 'relative w-full p-[5px] rounded-lg border border-solid border-special-dark/14 text-special-dark/65 text-lg',
    parentClass: 'duration-450',
    childClass: 'p-[5px] rounded-lg hover:bg-special-heartGray duration-450',
    buttonClass: 'group w-full !text-left',
    textClass: 'text-xl text-dark',
    iconClass: 'icon-arrow-solid-down group-[&.active]:rotate-180 text-[15px] text-black duration-450'
});