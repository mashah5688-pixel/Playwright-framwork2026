import { Page , Locator,expect} from '@playwright/test'
import * as allure from "allure-js-commons";
import * as CommonMethod from '../utilities/CommonMethod';
import logger  from '../utilities/logUtil';
export class LoginPage
{

    //variable declare
    readonly page :Page
readonly usernameInput :Locator
readonly PasswordInput : Locator
readonly loginBtn : Locator
readonly loginCredError :Locator
readonly userRequiredError : Locator
readonly passRequiredError : Locator
constructor(page:Page)
{
    this.page =page;
    this.usernameInput=page.locator('//input[@name="username"]')
    this.PasswordInput = page.locator('input[name="password"]')
    this.loginBtn = page.locator('button[type="submit"]')
    this.loginCredError=page.locator('.oxd-alert-content--error')
    // this.userRequiredError= page.locator('//input[@name="username"]')
    // .locator('xpath=../..')
    // .locator('.oxd-input-field-error-message ')
    this.passRequiredError=page.locator('//input[@name="password"]/../following-sibling::span')
    this.userRequiredError=page.locator('//input[@name="username"]/../following-sibling::span')


}
//method
async LoginUi(username : any , password :any):Promise<void>
{
    await allure.step("Enter user name ",async()=>{
 await this.usernameInput.fill(username)
 logger.info('Username entered')
 //await CommonMethod.enterText(this.page,this.usernameInput,username)
    })
    logger.info('password entered')
     await this.PasswordInput.fill(password)
   //await CommonMethod.enterText(this.page,this.PasswordInput,password)
    logger.info('User CLick')
    await this.loginBtn.click()

}

async InvalidCredentials():Promise<void>
{
    await expect(this.loginCredError).toContainText("Invalid credentials")
}
async RequiredFeild():Promise<void>
{
 await expect(this.userRequiredError).toBeTruthy()
  await expect(this.passRequiredError).toBeTruthy()
}
} 