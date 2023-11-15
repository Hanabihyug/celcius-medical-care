export {};

describe("Layout Testing", () => {
    before(() => {
        cy.visit("/service");
    });

    context("Navbar", () => {
        //Navbar Check
        it("navbar exist", () => {
            let nav = cy.get(`[data-cy="nav"]`);

            nav.should("exist");
            cy.get(`[data-cy="nav-brand"]`).should("exist");
            nav.get(`[data-cy="nav-items"]`).should("exist");
        });

        //Check Nav-Items
        it("nav-items should have 5 items", () => {
            let nav = cy.get(`[data-cy="nav-items"]`).as("nav-items");

            nav.should("have.length", 2).each((e) => {
                let el = cy.wrap(e);

                el.children().should("have.length", 5);
            });

            nav.should("be.visible");
        });

        it("nav-items has the correct content", () => {
            let nav = cy.get(`[data-cy="nav-items"]`);

            nav.each(($e) => {
                cy.wrap($e).each((e) => {
                    cy.wrap(e).contains("Home").should("exist").should("have.attr", "href", "/");
                    cy.wrap(e).contains("About").should("exist").should("have.attr", "href", "/about");
                    cy.wrap(e).contains("Service").should("exist").should("have.attr", "href", "/service");
                    cy.wrap(e).contains("Case Study").should("exist").should("have.attr", "href", "/case-study");
                    cy.wrap(e).contains("Contact").should("exist").should("have.attr", "href", "/contact");
                });
            });
        });
    });
});

context("Header", () => {
    it("header content check", () => {
        cy.get(`[data-cy="header"] .content`).as("content").should("exist").children().should("have.length", 2);
    });

    it("Tech should be visible", () => {
        cy.get(`[data-cy="Tech"]`).should("exist");
    });
});

context("Slogan", () => {
    it("Slogan content check", () => {
        cy.get(`[data-cy="Slogan"] .content`).as("content").should("exist").children().should("have.length", 6);
    });

    it("Logo should be visible", () => {
        cy.get(`[data-cy="Slogan"] .logo`).should("exist");
    });
    it("Text should be visible", () => {
        cy.get(`[data-cy="Slogan"] .text`).should("exist");
    });
});