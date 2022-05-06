const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Tevin', 'tevin.alvord@gmail.com');

    expect(employee.name).toBe('Tevin');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('tevin.alvord@gmail.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Tevin');
    
    expect(employee.getName()).toBe('Tevin');
});

test("gets employee's id", () => {
    const employee = new Employee('Tevin');
    
    expect(employee.getId()).toBe(1);
});

test("gets employee's email", () => {
    const employee = new Employee('Tevin', 'tevin.alvord@gmail.com');
    
    expect(employee.getEmail()).toBe('tevin.alvord@gmail.com');
});

test("gets employee's role", () => {
    const employee = new Employee('Tevin');
    
    expect(employee.getRole()).toBe('Employee');
});