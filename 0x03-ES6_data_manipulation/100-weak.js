export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
    const { protocol, name } = endpoint;
    const endpointKey = `${protocol}:${name}`;

    let queryCount = weakMap.get(endpointKey) || 0;
    queryCount++;

    if (queryCount >= 5) {
        throw new Error('Endpoint load is high');
    }

    weakMap.set(endpointKey, queryCount);

    return queryResult;
}