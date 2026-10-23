import{Page,Locator} from '@playwright/test'

export class Dashboard
{
    readonly page :Page
    //readonly leftPanelValue : Locator
    constructor(page:Page)
    {
        this.page=page
        //this.leftPanelValue =page.locator()

    }
    getSidebarItem(menuName:string):Locator
    {
        return this.page.getByRole('link',{name:menuName,exact:true})
    }
     async navigate(menuName:string)
     {
        await this.getSidebarItem(menuName).click()
     }
}