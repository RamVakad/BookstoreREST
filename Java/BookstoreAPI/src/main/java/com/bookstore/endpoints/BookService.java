package com.bookstore.endpoints;

import com.bookstore.BookstoreRESTApp;
import com.bookstore.models.Book;
import io.swagger.annotations.Api;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Created by GOA on 7/9/16.
 */

@Component
@Path("/api/books")
@Api(value = "BookService", produces = "application/json")
public class BookService {

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> getAllBooks() {
        return BookstoreRESTApp.getInstance().getBookRepository().findAll();
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Book getBookById(@PathParam("id") String id) {
        return BookstoreRESTApp.getInstance().getBookRepository().findOne(id);
    }

    @POST
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String addBook(@RequestBody Book book) {
        BookstoreRESTApp.getInstance().getBookRepository().insert(book);
        return "OK";
    }

    @PUT
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String updateBook(@RequestBody Book book) {
        BookstoreRESTApp.getInstance().getBookRepository().save(book);
        return "OK";
    }

    @DELETE
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public String deleteBook(@PathParam("id") String id) {
        BookstoreRESTApp.getInstance().getBookRepository().delete(BookstoreRESTApp.getInstance().getBookRepository().findOne(id));
        return "OK";
    }
}
