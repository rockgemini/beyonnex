interface Product {
    name: string;
    price: number;
  }
export class Common {
    cartLocator = '#cart';
    productsLocator = '.text-center.col-4';
    productNameLocator = '.font-weight-bold';
    productPriceLocator = 'p:contains("Price:")';
    addButtonLocator = '.btn-primary';
    selectCheapestItemByWord(word: string) {
      const products: Product[] = [];

      // Get all the product elements
      cy.get(this.productsLocator)
        .each((productElement) => {
          // Extract product name and price
          const productName = productElement.find(this.productNameLocator).text();
          const priceText = productElement.find(this.productPriceLocator).text();
          const price = Number(priceText.replace(/\D/g, "")); // Convert price to a number

          // Add product data to the products array
          products.push({ name: productName, price: price });
        })
        .then(() => {
          // Filter products containing the specified word
          const filteredProducts: Product[] = products.filter((product) =>
            product.name.toLowerCase().includes(word.toLowerCase())
          );

          // Find the cheapest product
          const cheapestProduct: Product | undefined = filteredProducts.reduce(
            (minProduct, currentProduct) => {
              return currentProduct.price < minProduct.price
                ? currentProduct
                : minProduct;
            }
          );

          // Log the result
          cy.log('Cheapest item containing "' + word + '":', cheapestProduct);

          // Click the "Add" button for the cheapest product
          if (cheapestProduct) {
            cy.contains(this.productsLocator, cheapestProduct.name)
              .find(this.addButtonLocator)
              .click();
            cy.log(
              'Clicked "Add" button for the cheapest ' + word + " product."
            );
          }
        });
    }
    
    clickCart() {
        cy.get(this.cartLocator).click();
    }
}