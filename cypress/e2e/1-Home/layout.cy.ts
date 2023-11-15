export {};

describe("Layout Testing", () => {
    before(() => {
        cy.visit("/");
        // cy.get(`[data-cy="hero"]`).scrollIntoView();
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

        it("nav items has the correct content", () => {
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
        it("wave svg should appears", () => {
            cy.get("#hero").as("hero").should("exist").children(".hero__bg").should("be.visible");
        });

        it("content check", () => {
            let content = cy.get(`[data-cy="hero"] .content`).as("content").should("exist").scrollIntoView();

            content.children().should("have.length", 3);
            cy.get(`[data-cy="hero"] .content`).within(() => {
                cy.get(`.btns`).contains("Learn more").should("be.visible").should("have.attr", "href", "/about");
                cy.get(`.btns`).contains("Contact us").should("be.visible").should("have.attr", "href", "/contact");
            });
        });

        it("hero image should visible", () => {
            cy.get(`[data-cy="hero-image"]`).should("exist");
        });
    });

    // context("Slogan", () => {
    //     it("content check", () => {
    //         cy.get(`[data-cy="slogan-content"]`).should("exist").children().should("have.length", 3).contains("Learn more →").should("exist").scrollIntoView();
    //     });
    // });

    // context("Apps link", () => {
    //     it("heading should be visible", () => {
    //         cy.get(`[data-cy="apps"]`).contains("Downloaded by many users").should("exist");
    //     });

    //     it("apps link test", () => {
    //         cy.get(`[data-cy="apps"] .apps`)
    //             .children()
    //             .should("have.length", 2)
    //             .each(($e) => {
    //                 cy.wrap($e).children().children().should("have.length", 2);
    //             });
    //     });
    // });

    context("Feature", () => {
        it("heading should be visible", () => {
            cy.get(`[data-cy="feature"] .section__heading h1`).should("exist");
            cy.get(`[data-cy="feature"] .section__heading p`).should("exist");
        });

        it("feature card should have the correct element", () => {
            cy.get(`[data-cy="feature-card"]`).each(($e) => {
                cy.wrap($e).within(() => {
                    cy.get(".feature__image").should("exist");
                    cy.get(".content .title").should("exist");
                    cy.get(".content .description").should("exist");
                    cy.get(".content .feature__checklist").should("exist");
                });
            });
        });
    });

    context("Partner", () => {
        it("heading should be visible", () => {
            cy.get(`[data-cy="partner"] .section__heading h1`).should("exist");
            cy.get(`[data-cy="partner"] .section__heading p`).should("exist");
        });

        it("partner list", () => {
            cy.get(`[data-cy="partner-list"]`)
                .children()
                .each((el) => {
                    cy.wrap(el).each(($e) => {
                        cy.wrap($e)
                            .scrollIntoView()
                            .within(() => {
                                cy.get("[data-cy='partner-image']").should("exist");
                                cy.get("[data-cy='partner-card'] ").should("exist");
                            });
                    });
                });
        });
    });
});
