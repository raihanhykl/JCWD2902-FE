import About from "./page";

describe("About Page", () => {
  it("should render about page", () => {
    cy.mount(<About />);
    cy.get("h1").contains("Aboutpage");
    cy.get(`a[href="/"]`).should("be.visible");
  });
});
