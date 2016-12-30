package com.le.viet.vault.model;

/**
 * Created by onelazyguy on 12/29/16.
 */
public class User {
    private String username;
    private String password;
    private boolean isUserLogin;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isUserLogin() {
        return isUserLogin;
    }

    public void setUserLogin(boolean userLogin) {
        isUserLogin = userLogin;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", isUserLogin=" + isUserLogin +
                '}';
    }
}
