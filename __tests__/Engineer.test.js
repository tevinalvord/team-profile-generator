const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('Tevin', 'tevin.alvord@gmail.com', 1, 'TevinAlvord');

    expect(engineer.name).toBe('Tevin');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('tevin.alvord@gmail.com');
    expect(engineer.github).toBe('TevinAlvord');
});

test("gets engineer's Github username", () => {
    const engineer = new Engineer('Tevin', 1, 'tevin.alvord@gmail.com', 'TevinAlvord');
    
    expect(engineer.getGithub()).toBe('TevinAlvord');
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Tevin');
    
    expect(engineer.getRole()).toBe('Engineer');
});