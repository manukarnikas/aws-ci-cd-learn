// Deliberately unused module.
// We'll use this later when exploring tree shaking and code splitting.

export async function fetchUsers() {
    return [
        { id: 1, name: "Alice", role: "Developer" },
        { id: 2, name: "Bob", role: "Designer" }
    ];
}
