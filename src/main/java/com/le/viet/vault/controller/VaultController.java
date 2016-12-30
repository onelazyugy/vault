package com.le.viet.vault.controller;

import com.le.viet.vault.Application;
import com.le.viet.vault.dao.DAOIfc;
import com.le.viet.vault.dao.UserDao;
import com.le.viet.vault.model.User;
import com.le.viet.vault.user.UserAuth;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/rs")
public class VaultController {
	@RequestMapping(value = "/ping", method = RequestMethod.GET)
	public String ping(){
		return "pong";
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST,  produces= MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Boolean login(@RequestBody User user, HttpServletRequest req){
		boolean loginSuccess = new UserAuth().login(user, req);
		return loginSuccess;
	}

	@RequestMapping(value = "/logout", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Boolean logout(HttpServletRequest req){
		boolean result = new UserAuth().logout(req);
		return result;
	}

	@RequestMapping(value = "/userStillAlive", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public User userStillAlive(HttpServletRequest req){
		HttpSession session = req.getSession(false);
		User user = new User();
		if(session != null){
			String currentUser = (String)session.getAttribute("currentLoggedInUser");
			boolean hasSession = (boolean)session.getAttribute("hasSession");
			user.setUsername(currentUser);
			user.setUserLogin(hasSession);
		}
		return user;
	}

	@RequestMapping(value = "/getUserStatus", method = RequestMethod.POST)
	public boolean getUserStatus(@RequestBody User user){
		DAOIfc<User> dao = new UserDao();
		boolean isUserValid = dao.verify(user);
		return isUserValid;
	}
}
