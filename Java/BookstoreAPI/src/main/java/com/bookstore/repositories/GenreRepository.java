package com.bookstore.repositories;

import com.bookstore.models.Genre;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by GOA on 7/9/16.
 */
public interface GenreRepository extends MongoRepository<Genre, String> {
}