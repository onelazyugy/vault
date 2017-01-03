package com.le.viet.vault.dao;

import com.le.viet.vault.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.Date;
import java.util.List;

/**
 * Created by onelazyguy on 12/29/16.
 */
public class UserDao implements DAOIfc<User> {
    private final Logger LOG = LoggerFactory.getLogger(UserDao.class);
    private MongoTemplate mongoTemplate;

    public UserDao(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public boolean add(User user) {
        user.setCreatedDate(new Date());
        this.mongoTemplate.insert(user);
        return true;
    }

    @Override
    public boolean update(User user) {
        return false;
    }

    @Override
    public boolean delete(User user) {
        return false;
    }

    @Override
    public List<User> retrieveList(User user) {
        return null;
    }

    @Override
    public User retrieve() {
        return null;
    }

    @Override
    public boolean verify(User user) {
        boolean isUserFound = false;
        Query query = new Query(Criteria.where("username").is(user.getUsername()));
        User foundUser = this.mongoTemplate.findOne(query, User.class);
        if(foundUser != null ){
            if(foundUser.getUsername().equalsIgnoreCase(user.getUsername())){
            LOG.debug("foundUser ==>: " + foundUser.toString());
                isUserFound = true;
            }
        }
        return isUserFound;
    }
}
