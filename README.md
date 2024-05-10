# Enhanced lwc:ref

This custom implementation allows a user to use the notation `lwc:ref` for static elements or `data-ref` to reference a component in a template. This is a custom implementation of the `lwc:ref` directive that is not supported by the LWC framework.

## Usage

To use the `EnhancedRefs` mixin, import it from the `c/enhancedRefs` module and extend it in your component class. The mixin will add a property `enhancedRefs` to your component that will contain all the references to the elements with the `lwc:ref` or `data-ref` attribute.

## Example

```html
<!--enhancedRefsTest.html-->
<template>
    <lightning-button label="Test refs" onclick={onClick}></lightning-button>

    <lightning-input label="Static ref" lwc:ref="staticRef" value="Static ref"></lightning-input>

    <template for:each={inputs} for:item="input">
        <lightning-input key={input.key} label={input.label} value={input.value} data-ref={input.key}></lightning-input>
    </template>
</template>
```

### Mixin

```js
// enhancedRefsTest.js
import { LightningElement } from 'lwc';
import { EnhancedRefs } from 'c/enhancedRefs';
export default class EnhancedRefsTest extends EnhancedRefs(LightningElement) {

    inputs = Array.from({ length: 5 }, (_, i) => ({ key: `input${i}`, value: `value ${i}`, label: `Label ${i}` }));

    onClick() {
        console.log(this.enhancedRefs.staticRef.value);
        console.log(JSON.stringify(this.inputs.map(({ key }) => this.enhancedRefs[key].value)))
    }
}
```

### Module

```js
// enhancedRefsTest.js
import { LightningElement } from 'lwc';
import { enhancedRefs } from 'c/enhancedRefs';
export default class EnhancedRefsTest extends LightningElement {

    enhancedRefs = enhancedRefs(this);

    inputs = Array.from({ length: 5 }, (_, i) => ({ key: `input${i}`, value: `value ${i}`, label: `Label ${i}` }));

    onClick() {
        console.log(this.enhancedRefs.staticRef.value);
        console.log(JSON.stringify(this.inputs.map(({ key }) => this.enhancedRefs[key].value)))
    }
}
```


## Installation

1) Clone the repository
2) Deploy the `c/enhancedRefs` module to your org
#### Deploy the module using the Salesforce CLI
    sf project deploy start -x manifest/package.xml

1) Use the `EnhancedRefs` mixin or the `enhancedRefs` function in your component
