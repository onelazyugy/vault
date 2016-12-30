package com.le.viet.vault.dao;

import com.le.viet.vault.model.User;

import java.util.List;

/**
 * Created by onelazyguy on 12/29/16.
 */
public class UserDao implements DAOIfc<User>{
    //hard code for now
    private String username = "viet";
    private String password = "password";

    @Override
    public boolean add(User user) {
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
        boolean isMatchUser = user.getUsername().equalsIgnoreCase(this.username);

        return isMatchUser;
    }


}
