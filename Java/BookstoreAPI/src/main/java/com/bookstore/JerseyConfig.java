package com.bookstore;


import com.bookstore.endpoints.BookService;
import com.bookstore.endpoints.GenreService;
import io.swagger.jaxrs.config.BeanConfig;
import io.swagger.jaxrs.listing.ApiListingResource;
import io.swagger.jaxrs.listing.SwaggerSerializers;
import org.glassfish.jersey.filter.LoggingFilter;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.spring.scope.RequestContextFilter;
import org.glassfish.jersey.server.wadl.internal.WadlResource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

/**
 * Created by GOA on 7/9/16.
 */

@Component
public class JerseyConfig extends ResourceConfig {

    @Value("${spring.jersey.application-path:/}")
    private String apiPath;

    public JerseyConfig() {
        registerEndpoints();
    }

    @PostConstruct
    public void init() {
        // Register components where DI is needed
        this.configureSwagger();
    }

    private void configureSwagger() {
        // Available at localhost:port/swagger.json
        this.register(ApiListingResource.class);
        this.register(SwaggerSerializers.class);

        BeanConfig config = new BeanConfig();
        config.setConfigId("springboot-jersey-swagger-mongodata");
        config.setTitle("Bookstore API using Spring Boot/Data-Jersey-Swagger-MongoDB");
        config.setVersion("v1");
        config.setContact("Ram Vakada");
        config.setSchemes(new String[] { "http", "https" });
        config.setBasePath(this.apiPath);
        config.setResourcePackage("com.bookstore");
        config.setPrettyPrint(true);
        config.setScan(true);
    }

    private void registerEndpoints() {
        register(RequestContextFilter.class);
        register(LoggingFilter.class);
        register(BookService.class);
        register(GenreService.class);
        register(WadlResource.class);
    }
}