package com.le.viet.vault.dao;

import com.le.viet.vault.model.User;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.util.Date;
import java.util.List;

/**
 * Created by onelazyguy on 12/29/16.
 */
public class UserDao implements DAOIfc<User> {
    private MongoTemplate mongoTemplate;

    public UserDao(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public boolean add(User user) {
        user.setCreatedDate(new Date());
        this.mongoTemplate.insert(user);
        return false;
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
        return false;
    }
}
