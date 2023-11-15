export {};

describe("Layout Testing", () => {
    before(() => {
        cy.visit("/about");
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

    context("Hero", () => {
        it("hero content check", () => {
            cy.get(`[data-cy="hero"] .content`).as("content").should("exist").children().should("have.length", 3).contains("See more").should("exist").scrollIntoView();
        });
        it("hero background should be visible", () => {
            cy.get(`[data-cy="hero-background"]`).should("exist").should("be.visible");
        })
    });

    context("Values", () => {
        it("values heading should be visible", () => {
            cy.get(`[data-cy="values"] .section__heading h1`).should("exist").scrollIntoView().should("be.visible");
            cy.get(`[data-cy="values"] .section__heading p`).should("exist").scrollIntoView().should("be.visible");
        });
        it("values content should exist", () => {
            cy.get(`[data-cy="values"] .content`).as("content").should("exist").children().should("have.length", 6);
        });
        it("texts should be visible", () => {
            cy.get(`[data-cy="values-card"] .text`).as("texts").should("exist").should("be.visible");
        });
        it("icons should be visible", () => {
            cy.get(`[data-cy="values-card"] .icon`).as("icon").should("exist").should("be.visible");
        });
        it("cards flipped on hover", () => {
            cy.get(`[data-cy="values-card"]`).as("flip-card").invoke("show").click({ multiple: true, force: true });
        });
    });

    context("VisionMission", () => {
        it("visionmission heading should be visible", () => {
            cy.get(`[data-cy="visionmission"] .section__heading h1`).should("exist").scrollIntoView().should("be.visible");
            cy.get(`[data-cy="visionmission"] .section__heading p`).should("exist").scrollIntoView().should("be.visible");
        });
        it("visionmission content should exist", () => {
            cy.get(`[data-cy="visionmission"] .content`).as("content").should("exist").children().should("have.length", 2);
        });
        it("vmcard - texts should be visible", () => {
            cy.get(`[data-cy="vmcard"] .text`).as("texts").should("exist").should("be.visible");
        });
        it("vmcard - icons should be visible", () => {
            cy.get(`[data-cy="vmcard"] .icon`).as("icons").should("exist").should("be.visible");
        });
        it("vmcard - hover animation", () => {
            cy.get(`[data-cy="vmcard"]`).as("hover-card").invoke("show").click({ multiple: true, force: true });
        });
    });

    context("Milestones", () => {
        it("milestones heading should be visible", () => {
            cy.get(`[data-cy="milestones"] .section__heading h1`).should("exist").scrollIntoView().should("be.visible");
            cy.get(`[data-cy="milestones"] .section__heading p`).should("exist").scrollIntoView().should("be.visible");
        });
        it("milestones content should exist", () => {
            cy.get(`[data-cy="milestones"] .content`).as("content").should("exist").children().should("have.length", 15);
        });
        it("pictures should be visible", () => {
            cy.get(`[data-cy="milestones"] .milestones__image`).as("picture").should("exist").should("be.visible");
        });
        it("titles should be visible", () => {
            cy.get(`[data-cy="milestones"] .title`).as("title").should("exist").should("be.visible");
        });
        it("descriptions should be visible", () => {
            cy.get(`[data-cy="milestones"] .description`).as("description").should("exist").should("be.visible");
        });
    });

    context("FAQ", () => {
        it("faq heading should be visible", () => {
            cy.get(`[data-cy="faq"] .section__heading h1`).should("exist");
            cy.get(`[data-cy="faq"] .section__heading p`).should("exist");
        });
        it("faq elements should have the correct items and works properly", () => {
            cy.get(`[data-cy="faq"]`).scrollIntoView();
            cy.get(`[data-cy="faq"] [data-cy="faq-item"]`).each(($e) => {
                cy.wrap($e).within(() => {
                    cy.get(".faq__question").should("exist");
                    cy.get(".faq__answer").should("exist").should("not.be.visible");
                    cy.get(".faq__question").click({ force: true });
                    cy.get(".faq__answer").scrollIntoView().should("be.visible");
                    cy.get(".faq__question").click({ force: true });
                    cy.get(".faq__answer").should("be.not.visible");
                });
            });
        });
    });
});
