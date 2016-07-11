package com.bookstore.endpoints;

import com.bookstore.BookstoreRESTApp;
import com.bookstore.models.Genre;
import io.swagger.annotations.Api;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Created by GOA on 7/10/16.
 */
@Component
@Path("/api/genres")
@Api(value = "GenreService", produces = "application/json")
public class GenreService {
    @GET
    @Path("")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Genre> getAllGenres() {
        return BookstoreRESTApp.getInstance().getGenreRepository().findAll();
    }

    @POST
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String addGenre(@RequestBody Genre genre) {
        BookstoreRESTApp.getInstance().getGenreRepository().insert(genre);
        return "OK";
    }

    @PUT
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String updateGenre(@RequestBody Genre genre) {
        BookstoreRESTApp.getInstance().getGenreRepository().save(genre);
        return "OK";
    }

    @DELETE
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public String deleteGenre(@PathParam("id") String id) {
        BookstoreRESTApp.getInstance().getGenreRepository().delete(BookstoreRESTApp.getInstance().getGenreRepository().findOne(id));
        return "OK";
    }
}
