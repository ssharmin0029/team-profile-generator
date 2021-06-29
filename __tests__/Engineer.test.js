// require Engineer module - which we will be testing in this suite
const Engineer = require('../lib/Engineer');

// describe Engineer
describe('Engineer', () => {

    // describe Initialization
    describe('Initialization', () => {
        // test that it returns an object that is an instance of the Engineer class when called with the new keyword
            // call the constructor
            // check that it is an instance of Engineer
        it('returns an object that is an instance of the Engineer class when called with the new keyword', () => {
            const engineer = new Engineer();
            expect(engineer instanceof Engineer).toBe(true);
        });

        // test that it sets name property based on constructor argument
            // define a name for the test
            // call constructor with the test name
            // check that the resulting name property is equal to the test name
        it('it sets the name property based on constructor argument', () => {
            const name = "Giselle";
            const engineer = new Engineer(name);

            expect (engineer.name).toBe(name);
        });

        // test that it sets id property based on constructor argument
            // define an id for the test
            // call constructor with an empty string for the name arg and the test id
            // check that the resulting id property is equal to the test id
        it('it sets the id property based on constructor argument', () => {
            const id = 1;
            const engineer = new Engineer("", id);
    
            expect (engineer.id).toBe(id);
        });

        // test that it sets email property based on constructor argument
            // define an email for the test
            // call constructor with an empty string for the name arg, any number for the id arg, and the test email
            // check that the resulting email property is equal to the test email
        it('it sets the email property based on constructor argument', () => {
            const email = 'test@email.com';
            const engineer = new Engineer("", 0, email);
          
            expect(engineer.email).toBe(email);
        });

        // test that it sets github property based on constructor argument
            // define an github for the test
            // call constructor with an empty string for the name arg, any number for the id arg, an empty string for the email arg, and the test github
            // check that the resulting github property is equal to the test github
        it('it sets the github property based on constructor argument', () => {
                const github = 'ssharmin0029';
                const engineer = new Engineer("", 0, "", github);
                  
                expect(engineer.github).toBe(github);
        });
    });

    // describe getName
    describe('getName', () => {
        // test that it returns the name property when the getName() method is called
            // define a name for the test
            // call constructor with the test name
            // call the getName() method and check that the result equals the test name
        it('returns the name property when the getName() method is called', () => {
            const name = "Obi";
            const engineer = new Engineer(name);
      
            expect(engineer.getName()).toBe(name);
        });
    });

    // describe getId
    describe('getId', () => {
        // test that it returns the id property when the getId() method is called
            // define an id for the test
            // call constructor with an empty string for the name arg and the test id
            // call the getId() method and check that the result equals the test id
        it('returns the id property when the getId() method is called', () => {
            const id = 1;
            const engineer = new Engineer("", id);
      
            expect(engineer.getId()).toBe(id);
        });
    });
    
    // desribe getEmail
    describe('getEmail', () => {
        // test that it returns the email property when the getEmail() method is called
             // define an email for the test
             // call constructor with an empty string for the name arg, any number for the id arg, and the test email
             // call the getEmail() method and check that the result equals the test email
        it('returns the email property when the getEmail() method is called', () => {
            const email = 'test@email.com';
            const engineer = new Engineer("", 0, email);
            
            expect(engineer.getEmail()).toBe(email);
        });
    });

     // desribe getGithub
     describe('getGithub', () => {
        // test that it returns the github property when the getGithub() method is called
             // define an github for the test
             // call constructor with an empty string for the name arg, any number for the id arg, an empty string for the email arg, and the test github
             // call the getGithub() method and check that the result equals the test github
        it('returns the github property when the getGithub() method is called', () => {
            const github = 'ssharmin0029';
            const engineer = new Engineer("", 0, "", github);
            
            expect(engineer.getGithub()).toBe(github);
        });
    });

    // decsribe getRole
    describe('getRole', () => {
        // test that it returns 'Engineer' when the getRole() method is called
            // define an role for the test
            // call the constructor
            // call the getRole() method and check that the result returns an engineer
        it("returns 'Engineer' when the getRole() method is called", () => {
            const engineer = new Engineer();
            
            expect(engineer.getRole()).toBe('Engineer');
        });
    });   
});

