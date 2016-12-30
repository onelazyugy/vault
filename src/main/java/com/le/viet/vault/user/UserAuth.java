package com.le.viet.vault.user;

import com.le.viet.vault.model.User;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Created by onelazyguy on 12/29/16.
 */
public class UserAuth {
    public boolean login(User user, HttpServletRequest req){
        if(user != null){
            if(user.getUsername()!= null && !user.getUsername().isEmpty()){
                //establish a session
                HttpSession session = req.getSession(true);
                if(session != null){
                    session.setAttribute("currentLoggedInUser", user.getUsername());
                    session.setAttribute("hasSession", true);
                    return true;
                }
            }
        }
        return false;
    }

    public boolean logout(HttpServletRequest req){
        try{
            HttpSession session = req.getSession(false);
            session.removeAttribute("hasSession");
            session.removeAttribute("currentLoggedInUser");
            session.invalidate();
        }catch (Exception e){
            return false;
        }
        return true;
    }
}
