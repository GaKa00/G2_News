// import puppeteer from "puppeteer";

// export const getArticle = async () => {
//     const browser = await puppeteer.launch({
//         headless:false,
//         defaultViewport:null
//     });

//     const article = await browser.newPage();

//     await article.goto("https://www.bbc.com/news/world-europe-68089698", {
//         waitUntil:"domcontentloaded",
//     });

//     const paragraphsList = await article.$$eval(`article p`, paragraphs => paragraphs.map(paragraph => {
//         return {
//             "class":paragraph.className,
//             "name":paragraph.textContent
//         }
//     }).filter(paragraph => paragraph.class.includes("Paragraph")));

//     console.log(paragraphsList)
    
//     await browser.close();
// };