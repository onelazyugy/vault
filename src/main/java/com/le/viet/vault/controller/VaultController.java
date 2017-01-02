package com.le.viet.vault.controller;

import com.le.viet.vault.dao.DAOIfc;
import com.le.viet.vault.dao.UserDao;
import com.le.viet.vault.model.User;
import com.le.viet.vault.user.UserAuth;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/rs")
public class VaultController {
	private final Logger LOG = LoggerFactory.getLogger(VaultController.class);
	@Autowired
	private MongoTemplate mongoTemplate;

	@RequestMapping(value = "/ping", method = RequestMethod.GET)
	public String ping(){
		return "pong";
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST,  produces= MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Boolean login(@RequestBody User user, HttpServletRequest req){
		LOG.debug("STARTED: /login");
		boolean loginSuccess = new UserAuth().login(user, req);
		LOG.debug("END: /login ==> " + loginSuccess);
		return loginSuccess;
	}

	@RequestMapping(value = "/logout", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Boolean logout(HttpServletRequest req){
		LOG.debug("STARTED: /logout");
		boolean result = new UserAuth().logout(req);
		LOG.debug("END: /logout ==> " + result);
		return result;
	}

	@RequestMapping(value = "/userStillAlive", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public User userStillAlive(HttpServletRequest req){
		LOG.debug("STARTED: /userStillAlive");
		HttpSession session = req.getSession(false);
		User user = new User();
		if(session != null){
			String currentUser = (String)session.getAttribute("currentLoggedInUser");
			boolean hasSession = (boolean)session.getAttribute("hasSession");
			user.setUsername(currentUser);
			user.setUserLogin(hasSession);
		}
		LOG.debug("END: /userStillAlive ==> " + user.toString());
		return user;
	}

    @RequestMapping(value = "/isUserLoggedIn", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Boolean isUserLoggedIn(HttpServletRequest req){
		LOG.debug("STARTED: /isUserLoggedIn");
        HttpSession session = req.getSession(false);
        boolean isLoggedIn = false;
        if(session != null){
            isLoggedIn = (boolean)session.getAttribute("hasSession");
        }
		LOG.debug("STARTED: /isUserLoggedIn ==> " + isLoggedIn);
        return isLoggedIn;
    }

	@RequestMapping(value = "/getUserStatus", method = RequestMethod.POST)
	public boolean getUserStatus(@RequestBody User user){
		DAOIfc<User> dao = new UserDao(mongoTemplate);
		boolean isUserValid = dao.verify(user);
		return isUserValid;
	}

	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
	public boolean addUser(@RequestBody User user){
		DAOIfc<User> dao = new UserDao(mongoTemplate);
		boolean isUserValid = dao.add(user);
		return isUserValid;
	}
}
