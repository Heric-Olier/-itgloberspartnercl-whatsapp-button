# Whatsapp Button Component

## Description

The Whatsapp Button Component is a block that allows the user to contact the store via WhatsApp. The user can click on the button and start a chat with the store.

![unknown_2023 02 06-13 22 (2)](https://user-images.githubusercontent.com/17723079/217054604-032ffd2b-1a69-4f6a-90b9-6cd439c0ebb0.jpg)

## Configuration 

1. Add the whatsapp-button app to your theme's dependencies in the manifest.json, for example:

```json
  dependencies: {
    "{vendor}.whatsapp-button": "0.x"
  }
```
2. Add the `whatsapp-button` block to your store-theme, for example:

```json
  "footer-layout.desktop": {
    "children": [
      "flex-layout.row#footer-desktop",
      "whatsapp-button"
    ]
  },
  "footer-layout.mobile": {
    "children": [
      "flex-layout.row#footer-mobile",
      "whatsapp-button"
    ]
  },
  "whatsapp-button": {
    "props": {
      "logo": "assets/img/whatsapp-icon.svg",
      "phone": "5711999999999",
      "message": "Hola, me gustaría saber más sobre este producto",
      "width":"46px",
      "height":"46px"
    }
  }
  ```
3. install node modules, go to `react` folder and run `yarn`


  
  ### Props

| Prop name    | Type            | Description                                                                               | Default value    |
| ------------ | --------------- | ----------------------------------------------------------------------------------------- | ---------------- | 
| `logo`       | `String`        | Define url of logo or image that will be displayed in the button                          | `undefined` |
| `phone`      | `String`        | Defines the WhatsApp number that the store uses to provide customer  service              | `undefined` |
| `message`    | `String`        | Define the message that will be sent to the store when the user clicks on the button      | `undefined` |
| `width`      | `Number`        | Define the width of the button                                                            | `undefined` |
| `height`     | `Number`        | Define the height of the button                                                           | `undefined` |


                                                                                                                       |
<!-- DOCS-IGNORE:start -->

## Contributors ✨

Heric Olier

---

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
