const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern('Tevin', 'tevin.alvord@gmail.com', 1, 'UVU');

    expect(intern.name).toBe('Tevin');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('tevin.alvord@gmail.com');
    expect(intern.school).toBe('UVU');
});

test("gets intern's school", () => {
    const intern = new Intern('Tevin', 1, 'tevin.alvord@gmail.com', 'UVU');
    
    expect(intern.getSchool()).toBe('UVU');
});

test("gets intern's role", () => {
    const intern = new Intern('Tevin');
    
    expect(intern.getRole()).toBe('Intern');
});