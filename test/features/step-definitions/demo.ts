import { Given,When,Then } from "@wdio/cucumber-framework";
import { expect } from "chai";



Given(/^Google page is opened$/,async function(){
    console.log(`Before opening the Browser...`);
    await browser.url("https://www.google.com")
    await browser.pause(1000);
    console.log(`After opening the browser`);

})

When(/^Search with (.*)$/,async function(searchItem){
    console.log(`>> seacrhItem : ${searchItem}`);
    let ele=await $(`[name=q]`);
    await ele.setValue(searchItem);
    await browser.keys("Enter")
})

Then(/^Click on the first search result$/,async function(){
    let ele=await $(`<h3>`);
    ele.click()
})

Then(/^The URL should match (.*)$/,async function(expectedURL){
    console.log(`>> expectedURL : ${expectedURL}`);
    let url=await browser.getUrl()
    expect(url).to.equal(expectedURL)

})
