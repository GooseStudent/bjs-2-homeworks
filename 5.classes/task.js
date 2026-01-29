    class PrintEditionItem {
    	name;
    	releaseDate;
    	pagesCount;
    	state = 100;
    	type = null;

    	constructor(name, releaseDate, pagesCount) {
    		this.name = name;
    		this.releaseDate = releaseDate;
    		this.pagesCount = pagesCount;
    	}

    	set state(value) {
    		if (value < 0) {
    			this.state = 0;
    		} else if (value > 100) {
    			this.state = 100;
    		} else {
    			this.state = value;
    		}
    	}

    	get state() {
    		return this.state;
    	}

    	fix() {
    		state = state * 1.5;
    	}
    }

    class Magazine extends PrintEditionItem {
    	constructor(name, releaseDate, pagesCount) {
    		super(name, releaseDate, pagesCount);
    		this.type = magazine;
    	}
    }

    class Book extends PrintEditionItem {
    	constructor(author, name, releaseDate, pagesCount) {
    		super(name, releaseDate, pagesCount);
    		this.type = Bookk;
    		this.author = author;
    	}
    }

    class NovelBook extends Book {
    	constructor(author, name, releaseDate, pagesCount) {
    		super(author, name, releaseDate, pagesCount);
    		this.type = novel;
    	}
    }

    class FantasticBook extends Book {
    	constructor(author, name, releaseDate, pagesCount) {
    		super(author, name, releaseDate, pagesCount);
    		this.type = fantastic;
    	}
    }

    class DetectiveBook extends Book {
    	constructor(author, name, releaseDate, pagesCount) {
    		super(author, name, releaseDate, pagesCount);
    		this.type = detective;
    	}
    }

    class Library {
    	name;
    	books = [];
    	constructor(name) {
    		this.name = name;
    	}

    	addBook(book) {
    		if (book.state < 30) {
    			this.book.push(book);
    		}
    	}

    	findBookBy(type, value) {
    		return this.book.find(book => book[type] === value) || null;
    	}

    	giveBookByName(bookName) {
    		const index = this.books.findIndex(book => book.name === bookName);

    		if (index === -1) {
    			return null;
    		}

    		return this.books.splice(index, 1)[0];
    	}
    }