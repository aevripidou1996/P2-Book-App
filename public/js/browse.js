document.getElementById("search-form").onsubmit = (e) => {
    e.preventDefault();

    const input = document.getElementById("category").value;
    console.log(input);

                // Get the books within the category
                $.ajax({
                    method: "GET",
                    url: `/api/books/category/${input}`
                }).then((books) => {
                    console.log(`Books within ${input}: `, books);
    
                    // Empty the booksCards area
                    $('#booksCards').empty();
    
                    // Create the book cards
                    books.forEach((book) => {
                        // data-toggle="modal" data-target="#bookModal"
                        let card = `
                    <div class="card" style="width: 12rem;">
                        <img src="${book.thumbnail}" class="card-img-top" alt="${book.title} book image" />
                        <div class="card-body">
                            <h5 class="card-title"><a href="#" class="modalTrigger" bookId="${book.id}">${book.title}</a></h5>
                            <p class="card-text">
                                By ${book.authors}
                            </p>
                        </div>
                    </div>
                    `;
                        $('#booksCards').append(card);
                    });
                });
}