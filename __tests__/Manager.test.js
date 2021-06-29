// require Manager module - which we will be testing in this suite
const Manager = require('../lib/Manager');

// describe Manager
describe('Manager', () => {

    // describe Initialization
    describe('Initialization', () => {
        // test that it returns an object that is an instance of the Manager class when called with the new keyword
            // call the constructor
            // check that it is an instance of Manager
        it('returns an object that is an instance of the Manager class when called with the new keyword', () => {
            const manager = new Manager();
            expect(manager instanceof Manager).toBe(true);
        });

        // test that it sets name property based on constructor argument
            // define a name for the test
            // call constructor with the test name
            // check that the resulting name property is equal to the test name
        it('it sets the name property based on constructor argument', () => {
            const name = "Giselle";
            const manager = new Manager(name);

            expect (manager.name).toBe(name);
        });

        // test that it sets id property based on constructor argument
            // define an id for the test
            // call constructor with an empty string for the name arg and the test id
            // check that the resulting id property is equal to the test id
        it('it sets the id property based on constructor argument', () => {
            const id = 1;
            const manager = new Manager("", id);
    
            expect (manager.id).toBe(id);
        });

        // test that it sets email property based on constructor argument
            // define an email for the test
            // call constructor with an empty string for the name arg, any number for the id arg, and the test email
            // check that the resulting email property is equal to the test email
        it('it sets the email property based on constructor argument', () => {
            const email = 'test@email.com';
            const manager = new Manager("", 0, email);
          
            expect(manager.email).toBe(email);
        });

        // test that it sets school property based on constructor argument
            // define an school for the test
            // call constructor with an empty string for the name arg, any number for the id arg, an empty string for the email arg, and the test school
            // check that the resulting school property is equal to the test school
        it('it sets the officeNumber property based on constructor argument', () => {
                const officeNumber = 8;
                const manager = new Manager("", 0, "", 8);
                  
                expect(manager.officeNumber).toBe(officeNumber);
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
            const manager = new Manager(name);
      
            expect(manager.getName()).toBe(name);
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
            const manager = new Manager("", id);
      
            expect(manager.getId()).toBe(id);
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
            const manager = new Manager("", 0, email);
            
            expect(manager.getEmail()).toBe(email);
        });
    });

    // decsribe getRole
    describe('getRole', () => {
        // test that it returns 'Manager' when the getRole() method is called
            // define an role for the test
            // call the constructor
            // call the getRole() method and check that the result returns a manager
        it("returns 'Manager' when the getRole() method is called", () => {
            const manager = new Manager();
            
            expect(manager.getRole()).toBe('Manager');
        });
    });   
});

