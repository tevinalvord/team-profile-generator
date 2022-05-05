const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Tevin', 'tevin.alvord@gmai.com');

    expect(employee.name).toBe('Tevin');
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toBe(expect.any(String));
})