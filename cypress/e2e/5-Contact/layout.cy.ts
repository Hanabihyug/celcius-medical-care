export{};

describe("Layout Testing", () => {

    before(() => {
        cy.visit("/contact");
    });

    

    context("Navbar", () => {
        //Navbar Check
        it("navbar exist", () => {
            let nav = cy.get(`[data-cy="nav"]`);

            nav.should("exist");
            cy.get(`[data-cy="nav-brand"]`).should("exist");
            nav.get(`[data-cy="nav-items"]`).should("exist");
        });

        //Check nav items
        it("nav items have 5 items", () => {
            let nav = cy.get(`[data-cy="nav-items"]`).as("nav-items");

            nav.should("have.length", 2).each((e) => {
                let el = cy.wrap(e);

                el.children().should("have.length", 5);
            });

            nav.should("be.visible");
        });
    });

    context("form", () => {
        it("form should be visible",()=> {
            cy.get('[data-cy="form"]').should("exist");
            cy.get('[data-cy="form"] .section__heading h1').should("exist");
            cy.get('[data-cy="form"] .section__heading p').should("exist");
        });

        it("form content chek",() => {
            cy.get('[data-cy="form"]').should("exist");
            cy.get('[data-cy="form"]').click({ force: true });
            cy.get('[data-cy="choose"]').click({ force: true});
        });
    });
    
    context("media sosial",() => {
        it("media sosial should be visible", () => {
            cy.get('[data-cy="media sosial"]').should("exist");
        });
        
        it("media sosial content check", () => {
            cy.get('[data-cy="media sosial"]').should("exist");
            cy.get('[data-cy="media sosial"]').click({ force: true });
            cy.get('[data-cy="media sosial"]').click({ force: true });
            cy.get('[data-cy="media sosial"]').click({ force: true });
        })
    });

    context("maps", () => {
        it("maps should be visible", () => {
            cy.get('[data-cy="maps"]').should("exist");
        });
        
        it("maps content check", () => {
            cy.get(`[data-cy="maps"].content`).as("content").should("exist");

        })
    });
});
