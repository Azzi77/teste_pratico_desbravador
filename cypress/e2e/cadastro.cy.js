describe('Cadastro ', () => {

it('Acessar a pagina desbravador e efetuar o cadastro de um usuário', function () {
    cy.visit('https://reservas.desbravador.com.br/1111')

    cy.contains('Registre-se').click()
    cy.get('input[name="email"]').type('reginaazzi@hotmail.com', {force: true })
    cy.get('input[name="password"]').type('123456',{force: true })
    cy.get('input[name="passwordConfirmation"]').type('123456',{force: true })
    cy.get('input[name="firstName"]').type('Regina', {force: true })
    cy.get('input[name="lastName"]').type('Azzi', {force: true })
    cy.get('input[name="telephone"]').type('14998401897',{force: true })
    cy.get('select').select('CPF', { force: true })
    cy.get('input[name="document"]').type('26394299812',{force: true })
    cy.get('form button[type="submit"]').click()

 /*   
      
    var usuário = {  // a minha intenção era usar uma variavel  para criar uma masssa de dados, porem estava gerando
                    // um erro que precisei usar o {force: true }para forçar o preenchimento do formulario.
      
      email:'reginaazzi@hotmail.com',
      senha:'123456',
      repitaSenha: '123456',
      primeiroNome:'Regina',
      sobrenome:'Azzi',
      telefone:'14998401897',
      tipoDocumento:'CPF',
      documento:'26394299812'
      
    }
    */
 
  })

})

