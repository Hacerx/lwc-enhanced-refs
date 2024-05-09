import { LightningElement } from 'lwc';
import { EnhancedRefs } from 'c/enhancedRefs';
export default class EnhancedRefsTest extends EnhancedRefs(LightningElement) {

    inputs = Array.from({ length: 5 }, (_, i) => ({ key: `input${i}`, value: `value ${i}`, label: `Label ${i}` }));

    onClick() {
        console.log(this.enhancedRefs.staticRef.value);
        console.log(JSON.stringify(this.inputs.map(({ key }) => this.enhancedRefs[key].value)))
    }
}