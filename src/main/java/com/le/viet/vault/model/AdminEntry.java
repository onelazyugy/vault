package com.le.viet.vault.model;

/**
 * Created by onelazyguy on 12/31/16.
 */
public class AdminEntry {
    private String tag;
    private String password;

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "AdminEntry{" +
                "tag='" + tag + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
