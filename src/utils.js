export function formatUserCount(count) {
    return `${count} users loaded`;
}

export function getUserLabel(user) {
    return user.name;
}

// Deliberately unused.
// We'll use this later when demonstrating tree shaking.
export function unusedUtility() {
    console.log("This should eventually disappear from production.");
}
