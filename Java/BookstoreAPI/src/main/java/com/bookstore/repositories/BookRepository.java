package com.bookstore.repositories;

import com.bookstore.models.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.math.BigInteger;

/**
 * Created by GOA on 7/9/16.
 */
public interface BookRepository extends MongoRepository<Book, String> {
}