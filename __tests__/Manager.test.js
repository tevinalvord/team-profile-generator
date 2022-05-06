const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Tevin', 'tevin.alvord@gmail.com');

    expect(manager.name).toBe('Tevin');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('tevin.alvord@gmail.com');
    expect(manager.officeNumber).toBe(1);
});

test("gets manager's role", () => {
    const manager = new Manager('Tevin');
    
    expect(manager.getRole()).toBe('Manager');
});