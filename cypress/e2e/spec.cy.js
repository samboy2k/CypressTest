describe('template spec', () => {
  it('successfully loads', () => {

    //cy.viewport(3840, 2160)
    // cy.get('body');
    // cy.viewport(window.screen.width, window.screen.height);
    cy.visit('https://www.google.com')

    cy.screenshot()
  })

  // it('takes a screenshot', () => {
  //   // screenshot will be saved as
  //   // cypress/screenshots/users.cy.js/my tests -- takes a screenshot.png
  //   cy.screenshot()
  // })

})


 
