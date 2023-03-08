import React from 'react'
import {mount} from "cypress/react";
import App from '../../src/App.js'

describe('App', () => {
  beforeEach(() => {
    mount(<App/>)
  })

  it('should display a list of expenses', () => {
    cy.get('.expense-item').should('have.length', 1)
  })

  it('should allow the user to open the expense form', () => {
    cy.get('#expense-form-button').click()

    cy.get('.new-expense').should('exist')
    cy.get('.new-expense__controls').should('exist')
    cy.get('.new-expense__actions').should('exist')
  })

  it('should allow the user to close the expense form', () => {
      cy.get('#expense-form-button').click()
      cy.get('#close-expense-form-button').click()
      cy.get('#expense-form-button').should('exist')
  })

  it('should allow the user to filter by year', () => {
      cy.get('.expenses-filter-select').select('2024')
      cy.get('.expense-item').should('have.length', 2)
      cy.get('.expenses-filter-select').select('2025')
      cy.get('.expense-item').should('have.length', 0)
  })

  it('should allow the user to add a new expense', () => {
    const newExpense = {
      title: 'Lunch',
      amount: 12.99,
      date: '2023-03-08'
    }

    cy.get('#expense-form-button').click()
    cy.get('#new-expense-title-input').type(newExpense.title)
    cy.get('#new-expense-amount-input').type(newExpense.amount)
    cy.get('#new-expense-date-input').type(newExpense.date)
    cy.get('#submit-new-expense-button').click()

    cy.get('.expense-item').should('have.length', 2)
    cy.contains(newExpense.title).should('exist')
    cy.contains(`${newExpense.amount}`).should('exist')
    cy.get('.expense-date').should('have.length', 2)
  })
})
