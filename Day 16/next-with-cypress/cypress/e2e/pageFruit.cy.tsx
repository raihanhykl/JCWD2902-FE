const fruits = ["apple", "mango", "banana"];
describe("Fruits", () => {
  it("render fruits", () => {
    cy.visit("http://localhost:3000/fruits");
    cy.get("h1").contains("fruits");
    fruits.forEach((fruit) => {
      cy.get("div").contains(fruit);
    });
  });
});
