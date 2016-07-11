package com.bookstore;

import com.bookstore.repositories.BookRepository;
import com.bookstore.repositories.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

/**
 * Created by GOA on 7/9/16.
 */

@SpringBootApplication
public class BookstoreRESTApp implements CommandLineRunner {

    @Autowired
    private BookRepository bookRep;

    @Autowired
    private GenreRepository genreRep;

    private static ApplicationContext context;
    private static BookstoreRESTApp instance;

    public static BookstoreRESTApp getInstance() { return instance; }

    public static ApplicationContext getContext() {
        return context;
    }

    public static void main(String[] args) {
        context = SpringApplication.run(BookstoreRESTApp.class, args);
        System.out.println("Bookstore API running on 8081.");
    }

    @Override
    public void run(String... args) {
        instance = this;
    }

    public BookRepository getBookRepository() {
        return bookRep;
    }

    public GenreRepository getGenreRepository() {
        return genreRep;
    }

}
