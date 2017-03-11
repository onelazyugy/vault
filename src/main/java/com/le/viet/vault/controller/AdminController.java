package com.le.viet.vault.controller;

import com.le.viet.vault.dao.AdminDao;
import com.le.viet.vault.dao.DAO;
import com.le.viet.vault.model.AdminEntry;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by onelazyguy on 12/31/16.
 */
@RestController
@RequestMapping("/rs")
public class AdminController {
    private final Logger LOG = LoggerFactory.getLogger(AdminController.class);
    @Autowired
    private AdminDao adminDao;

    @RequestMapping(value = "/addEntry", method = RequestMethod.POST,  produces= MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Boolean addEntry(@RequestBody AdminEntry adminEntry){
        boolean isAddSuccess = adminDao.add(adminEntry);
        return isAddSuccess;
    }
}
