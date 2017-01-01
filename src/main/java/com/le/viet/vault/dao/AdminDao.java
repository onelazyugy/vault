package com.le.viet.vault.dao;

import com.le.viet.vault.model.AdminEntry;

import java.util.List;

/**
 * Created by onelazyguy on 12/31/16.
 */
public class AdminDao implements DAOIfc<AdminEntry>{

    @Override
    public boolean add(AdminEntry adminEntry) {
        return false;
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
