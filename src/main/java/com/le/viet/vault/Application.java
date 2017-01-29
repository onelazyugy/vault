package com.le.viet.vault;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class Application extends SpringBootServletInitializer implements ApplicationContextAware {
    private static final Logger LOG = LoggerFactory.getLogger(Application.class);
    private static ApplicationContext context;

    public static void main(String[] args) {
        LOG.debug("STARTED: main");
        context = SpringApplication.run(Application.class, args);
        LOG.debug("END: main...application started successfully!");
    }

    /**
     * Run when deployed to non-embedded tomcat.
     * Code inside this must match code in main method above
     * @param application
     * @return
     */
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        logger.debug("STARTED Vault application in configure method....");
        context = application.sources(Application.class).run();
        logger.debug("Vault application started successfully");
        return application.sources(Application.class);
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        context = applicationContext;
    }
}