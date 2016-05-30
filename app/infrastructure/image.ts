import {inject, customAttribute} from "aurelia-framework";

@customAttribute('image')
@inject(Element)
export class ImageCustomAttribute {

    private element: Element;

    constructor(element: Element) {
        this.element = element;
    }

    public valueChanged(): void {
        var src: string = this.element.getAttribute("image.bind");
        this.element.setAttribute("src", src);
    }
}
