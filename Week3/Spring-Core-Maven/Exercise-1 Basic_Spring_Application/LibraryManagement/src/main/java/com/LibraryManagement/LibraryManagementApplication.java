package com.LibraryManagement;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.repository.BookRepository;
import com.library.service.BookService;

public class LibraryManagementApplication {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        BookService bookService =
                context.getBean("bookService", BookService.class);

        BookRepository bookRepository =
                context.getBean("bookRepository", BookRepository.class);

        bookService.displayServiceMessage();
        bookRepository.displayRepositoryMessage();

        ((ClassPathXmlApplicationContext) context).close();
    }
}