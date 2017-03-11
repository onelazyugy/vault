package com.le.viet.vault.dao;

import com.le.viet.vault.model.AdminEntry;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Created by onelazyguy on 12/31/16.
 */
@Service
public class AdminDao implements DAO<AdminEntry> {
    private final Logger LOG = LoggerFactory.getLogger(AdminDao.class);
    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public boolean add(AdminEntry adminEntry) {
        adminEntry.setCreatedDate(new Date());
        this.mongoTemplate.insert(adminEntry);
        return true;
    }

    @Override
    public boolean update(AdminEntry adminEntry) {
        return false;
    }

    @Override
    public boolean delete(AdminEntry adminEntry) {
        return false;
    }

    @Override
    public List<AdminEntry> retrieveList(AdminEntry adminEntry) {
        return null;
    }

    @Override
    public AdminEntry retrieve() {
        return null;
    }

    @Override
    public boolean verify(AdminEntry adminEntry) {
        return false;
    }
}
