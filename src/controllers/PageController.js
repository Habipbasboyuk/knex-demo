/**
 * PageController
 * Simple pages will be handled by this controller.
 * A simple page is a page that does not contain many business logic.
 */

import menuItems from "../data/navigation.js";
import userData from "../data/user.js";

import NavigationItem from "../models/NavigationItem.js";
import usersList from "../models/User.js"
import pages from "../models/Pages.js"

export const home = async (req, res) => {
  const userItems = await usersList.query().findById(1);
  const navItems = await NavigationItem.query();
  const pageData = await pages.query().where('slug', '/')

  res.render("pages/home", {
    ...pageData[0],
    userItems,
    menuItems: navItems,
  });
};

export const about = async (req, res) => {

  const navItems = await NavigationItem.query();
  const pageData = await pages.query().where('slug', '/about');
  
  res.render("pages/default", {
    ...pageData[0],
    menuItems: navItems,
  });
};

export const contact = async (req, res) => {

  const navItems = await NavigationItem.query();
  const pageData = await pages.query().where('slug', '/contact');
  console.log(pageData)
  res.render("pages/default", {
    ...pageData[0],
    menuItems: navItems,
  });
};
