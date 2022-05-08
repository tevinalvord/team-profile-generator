const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Tevin', 1, 'tevin.alvord@gmail.com', 1);

    expect(manager.name).toBe('Tevin');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('tevin.alvord@gmail.com');
    expect(manager.officeNumber).toBe(1);
});

test("gets manager's role", () => {
    const manager = new Manager('Tevin', 1, 'tevin.alvord@gmail.com', 1);
    
    expect(manager.getRole()).toBe('Manager');
});