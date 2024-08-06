import Home from "./page";
import { mount } from "cypress/react";

describe("home page", () => {
  it("should render home page", () => {
    mount(<Home />); //mount the component
    cy.get("h1").contains("Homepage"); //get the element h1
    cy.get(`a[href="/about"]`).should("be.visible"); //get the link
  });
});
