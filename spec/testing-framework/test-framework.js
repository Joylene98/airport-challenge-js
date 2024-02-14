export const assertEquals = (actualValue, expectedValue) => {
    if (actualValue !== expectedValue) throw new Error(`Expected ${expectedValue}, but got ${actualValue}`);
    return true;
};