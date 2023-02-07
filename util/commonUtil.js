export function getNullable(key, obj) {
    try {
        return obj[key];
    } catch (e) {
        return null;
    }
}