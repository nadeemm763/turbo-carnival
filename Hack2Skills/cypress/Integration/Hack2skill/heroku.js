describe('Broken Images', () => {
    it('Finding total no of broken images', () => {
      cy.visit('http://the-internet.herokuapp.com/broken_images');
      let Count = 0;
      cy.get('div.example img').each(($image) => {
        const imgSrc = $image.attr('src');
  
        cy.request({
          url: imgSrc,
          failOnStatusCode: false,
        }).then((response) => {
          if (response.status !== 200) {
            Count++;
          }
        });
      }).then(() => {
        cy.log(`Total broken links: ${Count}`);
       
      });
    });
  });



  describe('File Uploading', () => {
    it('Uploading a file', () => {
      cy.visit('http://the-internet.herokuapp.com/upload');
      cy.wait(2000);
      cy.get('#file-upload').attachFile("download.jpg");
      cy.wait(2000);
      cy.get('#file-submit').click();
      cy.wait(3000);
      const expectedTitle = 'File Uploaded!';
      cy.get('h3').should('have.text', expectedTitle);
    });
  });
  
  