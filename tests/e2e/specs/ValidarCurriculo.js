describe('Validar curriculo simples', () => {
  it('Nome', () => {
    cy.visit('/')
    cy.get('#GET-name').clear().type('Lucas Ferreira de Lima')
  })
  it('Gênero', () => {
    cy.get('#GET-genero').click()
    cy.get('.el-select-dropdown__item').eq(2).click({ multiple: true, force: true })
    cy.get('#start').scrollIntoView()
  })
  it('Estado Civil', () => {
    cy.get('[for="GET-maritalstatus-s"]').click()
  })
  it('Idade', () => {
    cy.get('#GET-dataofbirth').clear().type(26)
  })
  it('Hobbies', () => {
    cy.get('.select-hobby .btn.plus.bullet.small').click()
    cy.get('.select-hobby input').clear().type('teste')
  })
  it('CEP', () => {
    cy.get('#GET-cep').clear().type('03816130')
    cy.get('#GET-address-number').clear().type('1')
  })
  it('Disponivel para viagens', () => {
    cy.get('#GET-travel-no').click()
    cy.get('#GET-travel-yes').click()
  })
  it('Telefone', () => {
    cy.get('#newTelephone').click()
    cy.get('#GET-telephone-0').clear().type(11951401894)
  })
  it('E-mail', () => {
    cy.get('#GET-email-0').clear().type('lucasferreiralimax@gmail.com')
  })
  it('Idiomas', () => {
    // clean languages
    cy.get('[for^=GET-language] input').each(($li, index, $lis) => {
      cy.wrap($li).clear()
    })
    // new input languages
    cy.get('#GET-language-0').clear().type('Fluente Português Brasileiro')
    cy.get('#GET-language-1').clear().type('Speak Basic English')
    cy.get('#GET-language-2').clear().type('Hablo español básico')
    cy.get('#GET-language-3').clear().type('Je parle les bases du Français')
  })
  it('Site', () => {
    cy.get('#GET-site-0').clear().type('criar-curriculo.web.app')
  })
})

describe('Validar Formação Acadêmica', () => {
  it('Add formação', () => {
    cy.get('.coursers .btn.plus').click()
  })
  it('Curso atual', () => {
    cy.get('#GET-coursenow-0').click()
  })
  it('Escola', () => {
    cy.get('#GET-school-0').clear().type('Internet')
  })
  it('Curso', () => {
    cy.get('#GET-course-0').clear().type('Front-end')
  })
  it('Inicio do curso', () => {
    cy.get('#GET-coursedata__start-0').clear().type('2018-12{enter}')
  })
  it('Término do curso', () => {
    cy.get('#GET-coursedata__finish-0').clear().type('2018-12{enter}')
  })
  it('Sobre', () => {
    cy.get('#GET-courseabout-0').clear().type('Desenvolver aplicação e soluções para ajudar os seres vivos.', {force: true})
  })
  it('Referência', () => {
    cy.get('#GET-schoolLink-0').clear().type('https://criar-curriculo.web.app')
  })
})

describe('Validar Experiências', () => {
  it('Add experiência', () => {
    cy.get('.experiences .btn.plus').click()
  })
  it('Curso atual', () => {
    cy.get('#GET-expsnow-0').click()
  })
  it('Empresa', () => {
    cy.get('#GET-company-0').clear().type('Internet')
  })
  it('Cargo', () => {
    cy.get('#GET-exps-0').clear().type('Front-end')
  })
  it('Inicio do trabalho', () => {
    cy.get('#GET-expsdata__start-0').clear().type('2018-08{enter}')
  })
  it('Sobre', () => {
    cy.get('#GET-expsabout-0').clear().type('Criar Currículo', {force: true})
  })
  it('Referência', () => {
    cy.get('#GET-companyLink-0').clear().type('https://criar-curriculo.web.app')
  })
})
