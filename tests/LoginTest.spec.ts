import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Dashboard } from '../pages/Dashboard';
import Logindata from '../Test Data/Logindata.json';
import * as allure from "allure-js-commons";
import {envConfig }from '../config/env.config.ts';

test('Login Scenerio for valid Credentials',async({page})=>{
   await allure.step('open login page',async()=>{
       await page.goto('/')
   })
   const loginP = new LoginPage(page);
   await loginP.LoginUi(envConfig.username,envConfig.password)
   const Dashboard1 = new Dashboard(page)
   //Dashboard1.clickSidePanel("Admin")
   page.pause()
});
for(const data of Logindata)
{
test(`Negetive Login :${data.Scenerio}`,async({page})=>{
   await allure.step('open login page',async()=>{
       await page.goto('/')
   })
  const loginP1 = new LoginPage(page);
  await loginP1.LoginUi(data.username,data.password)
  if(data.Scenerio=="Invalid Credentials")
  {
   await loginP1.InvalidCredentials()
  }
  else if(data.Scenerio == "empty data")
  {
    await loginP1.RequiredFeild()
  }
  
})
}