export const EnhancedRefs = (BaseClass) => class extends BaseClass {
    enhancedRefs = new Proxy(this, {
        get: function (target, key) {
            return target.refs[key] ?? target.template.querySelector(`[data-ref="${key}"]`);
        }
    });
}