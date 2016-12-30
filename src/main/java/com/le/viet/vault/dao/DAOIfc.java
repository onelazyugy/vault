package com.le.viet.vault.dao;

import java.util.List;

/**
 * Created by onelazyguy on 12/29/16.
 */
public interface DAOIfc<T> {
    boolean add(T t);
    boolean update(T t);
    boolean delete(T t);
    List<T> retrieveList(T t);
    T retrieve();
    boolean verify(T t);
}
