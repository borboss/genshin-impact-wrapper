export function serialize(targetClass:Object, data:string) {
    return Object.assign(targetClass, JSON.parse(data));
}

export function deserialize(targetClass:Object) {
    return JSON.stringify(targetClass);
}