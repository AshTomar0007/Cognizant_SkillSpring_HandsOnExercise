package org.library.service;

import org.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void manageBooks() {
        System.out.println("BookService is managing books...");
        if (bookRepository != null) {
            System.out.println("Dependency Injection Successful!");
            bookRepository.printStatus();
        } else {
            System.out.println("Error: BookRepository is null.");
        }
    }
}
