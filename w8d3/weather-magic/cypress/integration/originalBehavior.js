
describe("Original operation of weather magic", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  afterEach(() => {
    cy.visit('http://localhost:3000')
  })


  it("shows the Montréal weather when clicking on the Montréal button", () => {
    // cy.visit('http://localhost:3000')

    cy
      .get('[data-testid=mtl-button]')
      .click()

    cy
      .get('section h1')
      .should('have.text', 'Right now in Montréal')
  })
  it("shows the Toronto weather when clicking on the Toronto button", () => {
    // cy.visit('http://localhost:3000')

    // Get the toronto button & click on it
    cy
      .get('[data-testid=tor-button]')
      .click()
    // Look if the section has the proper name
    cy
      .get('section h1')
      .should('have.text', 'Right now in Toronto')
  })

})

describe("Input field that adds a button if city not already in list", () => {
  before(() => {
    cy.visit('/')
  })
  it("should add the Ottawa button when confirming the input field", () => {
    // find the input field
    cy
      .get('input#city-chooser')
      // Type ottawa in the input field
      // press enter to confirm
      .type('Ottawa{enter}')
    // look at the number of buttons, look at the last one
    cy.get('section.city-buttons button')
      // should Ottawa as text
      .last()
      .should('have.text', 'Ottawa')

  })
  it("should show the weather in Ottawa", () => {
    cy
      .get('section h1')
      .should('have.text', 'Right now in Ottawa')
  })
  it("should not add an city button if it's already there", () => {
    const beforeAdd = cy.get('section.city-buttons button')
    console.log(beforeAdd)
    beforeAdd.should('have.length', 3)
    cy
      .get('input#city-chooser')
      // Type ottawa in the input field
      // press enter to confirm
      .type('Edmonton{enter}')
    const afterAdd = cy.get('section.city-buttons button')
    afterAdd.should('have.length', 4)
    cy
      .get('input#city-chooser')
      // Type ottawa in the input field
      // press enter to confirm
      .type('Edmonton{enter}')
    const afterReAdd = cy.get('section.city-buttons button')
    afterReAdd.should('have.length', 4)

  })
})