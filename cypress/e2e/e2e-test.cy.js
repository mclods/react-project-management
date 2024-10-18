describe('React Project Management', () => {
  it('Start the app', () => {
    cy.visit('/');

    // Assert sidebar
    cy.getTestId('projects-homepage-btn').should('exist');
    cy.getTestId('add-projects-btn').should('exist');
    cy.get('[data-testid^="select-"]').should('not.exist');

    // Assert No Project Page
    cy.getTestId('no-projects-img').should('exist');
    cy.get('[data-testid="no-project-section"] p')
      .eq(0)
      .should('have.text', 'No Project Selected');
    cy.get('[data-testid="no-project-section"] p')
      .eq(1)
      .should('have.text', 'Select a project or get started with a new one');
    cy.getTestId('create-new-project-btn').should('exist');
  });

  it('Add new projects', () => {
    // Add a new project
    cy.getTestId('create-new-project-btn').click();
    cy.getTestId('new-project-section').should('exist');
    cy.getTestId('cancel-btn').should('exist');
    cy.getTestId('save-btn').should('exist');
    cy.getTestId('cancel-btn').click();
    cy.getTestId('no-project-section').should('exist');
    cy.getTestId('add-projects-btn').click();
    cy.getTestId('new-project-section').should('exist');

    cy.getTestId('title-input')
      .parent()
      .find('label')
      .should('have.text', 'Title *');
    cy.getTestId('description-input')
      .parent()
      .find('label')
      .should('have.text', 'Description');
    cy.getTestId('due-date-input')
      .parent()
      .find('label')
      .should('have.text', 'Due Date *');

    cy.getTestId('save-btn').click();
    cy.getTestId('title-input')
      .parent()
      .find('label')
      .should('have.class', 'text-red-600');
    cy.getTestId('description-input')
      .parent()
      .find('label')
      .should('not.have.class', 'text-red-600');
    cy.getTestId('due-date-input')
      .parent()
      .find('label')
      .should('have.class', 'text-red-600');

    // Add few more projects
    cy.getTestId('title-input').type('React Project');
    cy.getTestId('description-input').type(
      "React is the library for web and native user interfaces.\nI want to learn and master react in the next 2 months.\nLet's Rock."
    );
    cy.getTestId('due-date-input').type('2025-11-11');
    cy.getTestId('save-btn').click();
    cy.getTestId('no-project-section').should('exist');

    cy.getTestId('create-new-project-btn').click();
    cy.getTestId('title-input').type('Angular Project');
    cy.getTestId('description-input').type(
      'Angular is a web framework that empowers developers to build fast, reliable applications.\n\nWill try to learn angular and build some projects'
    );
    cy.getTestId('due-date-input').type('2026-12-18');
    cy.getTestId('save-btn').click();

    cy.getTestId('create-new-project-btn').click();
    cy.getTestId('title-input').type('Machine Learning');
    cy.getTestId('due-date-input').type('2025-01-10');
    cy.getTestId('save-btn').click();
  });

  it('Add few tasks', () => {
    // Assert selected project
    cy.getTestId('select-1').should('have.text', 'Angular Project').click();
    cy.getTestId('project-title').should('have.text', 'Angular Project');
    cy.getTestId('project-due-date').should('have.text', 'Dec 18, 2026');
    cy.getTestId('project-description').should(
      'have.text',
      'Angular is a web framework that empowers developers to build fast, reliable applications.\n\nWill try to learn angular and build some projects'
    );

    cy.getTestId('no-task-header').should(
      'have.text',
      'No tasks added to this project.'
    );
    cy.getTestId('new-task-input').should('have.value', '');
    cy.getTestId('new-task-input').type('Start with the basics.');
    cy.getTestId('add-task-btn').should('have.text', 'Add Task').click();
    cy.getTestId('no-task-header').should('not.exist');

    // Cannot add empty task
    cy.getTestId('new-task-input').should('have.value', '');
    cy.getTestId('add-task-btn').click();

    cy.getTestId('new-task-input').type("Let's checkout components");
    cy.getTestId('add-task-btn').click();
    cy.getTestId('new-task-input').type('Mmmm.. templates');
    cy.getTestId('add-task-btn').click();
    cy.getTestId('new-task-input').type('Routing ...');
    cy.getTestId('add-task-btn').click();

    cy.getTestId('select-0').should('have.text', 'React Project').click();
    cy.getTestId('project-title').should('have.text', 'React Project');
    cy.getTestId('project-due-date').should('have.text', 'Nov 11, 2025');
    cy.getTestId('project-description').should(
      'have.text',
      "React is the library for web and native user interfaces.\nI want to learn and master react in the next 2 months.\nLet's Rock."
    );

    cy.getTestId('new-task-input').type('Learn hooks.');
    cy.getTestId('add-task-btn').click();
    cy.getTestId('new-task-input').type('Work with redux.');
    cy.getTestId('add-task-btn').click();
    cy.getTestId('new-task-input').type('Practice! Practice! Practice!!!');
    cy.getTestId('add-task-btn').click();
    cy.getTestId('new-task-input').type('Move to something new');
    cy.getTestId('add-task-btn').click();

    cy.getTestId('select-2').should('have.text', 'Machine Learning').click();
    cy.getTestId('project-title').should('have.text', 'Machine Learning');
    cy.getTestId('project-due-date').should('have.text', 'Jan 10, 2025');
    cy.getTestId('project-description').should('have.text', '');

    cy.getTestId('new-task-input').type(
      'Start with statistics... very important!!!'
    );
    cy.getTestId('add-task-btn').click();
    cy.getTestId('new-task-input').type('Should also master Python...');
    cy.getTestId('add-task-btn').click();
  });

  it('Clear some tasks', () => {
    // Delete few tasks
    cy.getTestId('select-1').click();
    [
      'Start with the basics.',
      "Let's checkout components",
      'Mmmm.. templates',
      'Routing ...',
    ].forEach((taskText, index) => {
      cy.get('[data-testid="tasks-list"] li p')
        .eq(index)
        .should('have.text', taskText);
    });

    cy.get('[data-testid="tasks-list"] li')
      .eq(2)
      .find('button')
      .should('have.text', 'Clear')
      .click();
    [
      'Start with the basics.',
      "Let's checkout components",
      'Routing ...',
    ].forEach((taskText, index) => {
      cy.get('[data-testid="tasks-list"] li p')
        .eq(index)
        .should('have.text', taskText);
    });

    cy.get('[data-testid="tasks-list"] li').eq(0).find('button').click();
    ["Let's checkout components", 'Routing ...'].forEach((taskText, index) => {
      cy.get('[data-testid="tasks-list"] li p')
        .eq(index)
        .should('have.text', taskText);
    });

    cy.get('[data-testid="tasks-list"] li').eq(1).find('button').click();
    ["Let's checkout components"].forEach((taskText, index) => {
      cy.get('[data-testid="tasks-list"] li p')
        .eq(index)
        .should('have.text', taskText);
    });

    cy.get('[data-testid="tasks-list"] li').eq(0).find('button').click();
    cy.getTestId('no-task-header').should(
      'have.text',
      'No tasks added to this project.'
    );

    // Edit other projects as well
    cy.getTestId('select-0').click();
    [
      'Learn hooks.',
      'Work with redux.',
      'Practice! Practice! Practice!!!',
      'Move to something new',
    ].forEach((taskText, index) => {
      cy.get('[data-testid="tasks-list"] li p')
        .eq(index)
        .should('have.text', taskText);
    });

    cy.get('[data-testid="tasks-list"] li').eq(2).find('button').click();
    ['Learn hooks.', 'Work with redux.', 'Move to something new'].forEach(
      (taskText, index) => {
        cy.get('[data-testid="tasks-list"] li p')
          .eq(index)
          .should('have.text', taskText);
      }
    );

    cy.getTestId('select-2').click();
    [
      'Start with statistics... very important!!!',
      'Should also master Python...',
    ].forEach((taskText, index) => {
      cy.get('[data-testid="tasks-list"] li p')
        .eq(index)
        .should('have.text', taskText);
    });

    cy.get('[data-testid="tasks-list"] li').eq(0).find('button').click();
    ['Should also master Python...'].forEach((taskText, index) => {
      cy.get('[data-testid="tasks-list"] li p')
        .eq(index)
        .should('have.text', taskText);
    });
  });

  it('Delete few projects', () => {
    // Delete projects
    cy.getTestId('select-1').click();
    cy.getTestId('no-task-header').should(
      'have.text',
      'No tasks added to this project.'
    );
    cy.getTestId('delete-btn').should('have.text', 'Delete').click();

    cy.getTestId('select-1').click();
    ['Should also master Python...'].forEach((taskText, index) => {
      cy.get('[data-testid="tasks-list"] li p')
        .eq(index)
        .should('have.text', taskText);
    });
    cy.getTestId('delete-btn').should('have.text', 'Delete').click();

    cy.getTestId('select-0').click();
    cy.get('[data-testid="tasks-list"] li').eq(2).find('button').click();
    ['Learn hooks.', 'Work with redux.', 'Move to something new'].forEach(
      (taskText, index) => {
        cy.get('[data-testid="tasks-list"] li p')
          .eq(index)
          .should('have.text', taskText);
      }
    );
    cy.getTestId('delete-btn').should('have.text', 'Delete').click();
    cy.getTestId('no-project-section').should('exist');
  });
});
