describe('Probando sandbox "thefreeRangeTester"', () => {
  beforeEach(() => {
    cy.visit('https://thefreerangetester.github.io/sandbox-automation-testing')
  })

  it('Validar si aparece el elemento 3 segundos despues de clickear el botón con id dinamico', () => {
    cy.contains('.btn', 'Hacé click para generar un ID dinámico y mostrar el elemento oculto').click().wait(3000)
    cy.get('#hidden-element').should('have.text','OMG, aparezco después de 3 segundos de haber hecho click en el botón 👻.')
  })

  it('Completar campo de texto', () => {
    let texto = 'Texto de ejemplo'
    cy.get('#formBasicText').type(texto)
    cy.get('#formBasicText').should('have.value', texto)
  })

  it('Tildar opciones pizza y helado', () => {
    cy.contains('label', 'Pizza 🍕').click()
    cy.contains('label', 'Helado 🍧').click()
  })

  it('Tildar radio button opcion "Si"', () => {
    cy.get('#formRadio1').click()
  })

  it('Seleccionar opcion "Fútbol" desde dropdown', () => {
    cy.get('#formBasicSelect').select('Fútbol')
  })

  it('Seleccionar opcion "Viernes" desde dropdown "Día de la semana"', () => {
    cy.get('#dropdown-basic-button').click()
    cy.contains('.dropdown-item', 'Viernes').click()
  })

  it('Mostrar popup y cerrarlo', () => {
    cy.get('#root >div:nth-child(1)>div:nth-child(5) >div >button ').click()
    cy.get('#contained-modal-title-vcenter').should('have.text', 'Popup de ejemplo')
    cy.get('div[class=modal-footer] > button').click()
  })

  it('Validando elemento shadow DOM',()=>{
    cy.get('#shadow-host').shadow().find('p').should('have.text','Este es un ejemplo de Shadow DOM para practicar automation testing.')
  })

  it('Validar tabla dinámica', () => {
    cy.contains('h2', 'Tabla dinámica').parent('div.col').find('table tbody tr td').each(($td) => {
      cy.wrap($td).invoke('text').should('match', /^[A-Z]\d$/);
    });
  })

  it('Validar tabla estática', () => {
    cy.fixture('data.json').then((jsonData) => {
      cy.get('div.col').contains('h2', 'Tabla estática').next('table').within(() => {
        cy.get('tbody tr').each(($row, index) => {

          const expectedData = jsonData[index];
          const columns = ['id', 'nombre', 'edad', 'email'];

          cy.wrap($row).find('td').each(($cell, columnIndex) => {
            cy.wrap($cell).should('contain.text', expectedData[columns[columnIndex]]);
          });
        });
      });
    });
    });
});