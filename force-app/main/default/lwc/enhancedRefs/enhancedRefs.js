export const enhancedRefs = (context) => new Proxy(context, {
    get: function (target, key) {
        return target.refs[key] ?? target.template.querySelector(`[data-ref="${key}"]`);
    }
});

export const EnhancedRefs = (BaseClass) => class extends BaseClass {
    enhancedRefs = enhancedRefs(this);
}