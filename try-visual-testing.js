const { By } = require('selenium-webdriver')
const { existsSync, writeFileSync, readFileSync, write } = require('fs')
const setupDriver = require('../utils/setupDriver')
const chai = require('chai')
const {chaiImage} = require('chai-image')


chai.use(chaiImage)
const {expect} = chai

async function visualTesting( driver, PAGE_NAME, PAGE_URL) {

	  await driver.get(PAGE_URL);
  
	  const baseScreenshotPath = `../screenshot/base/${PAGE_NAME}.jpg`;
	  const actualScreenshotPath = `../screenshot/actual/${PAGE_NAME}.jpg`;
	  const isBaseScreenshotExist = existsSync(baseScreenshotPath);
  
	  const pageScreenshot = await driver.takeScreenshot();
	  const pageScreenshotBuffer = Buffer.from(pageScreenshot, 'base64');
  
	  if (isBaseScreenshotExist) {
		const baseScreenshotBuffer = readFileSync(baseScreenshotPath);
  
		writeFileSync(actualScreenshotPath, pageScreenshotBuffer);
		expect(pageScreenshotBuffer).to.matchImage(baseScreenshotBuffer);
	  } else {
		writeFileSync(baseScreenshotPath, pageScreenshotBuffer);
	  }

  }
  
  async function runVisualTests() {
	const driver = await setupDriver();
  
	try {
	  await visualTesting(driver, 'Kisah_Kami', 'https://www.tokopedia.com/about/our-story/');
	  await visualTesting(driver, 'Kontak_Kami', 'https://www.tokopedia.com/about/contact-us/');
	  await visualTesting(driver, 'Bisnis_Kami', 'https://www.tokopedia.com/about/our-business/');
	  await visualTesting(driver, 'CSR', 'https://www.tokopedia.com/about/impact/');
	  await visualTesting(driver, 'Bantuan', 'https://www.tokopedia.com/help/article/bagaimana-cara-membedakan-produk-obat-palsu');
	} finally {
	  await driver.close();
	}
  }
  
  runVisualTests();



// ==  melakukan cek apakah file ada atau tidak  == 
// const isFileExist = existsSync ('screenshot/base/foto.jpg')
// console.log(isFileExist ? 'ada' : 'nggak ada')

// == ambil ss halaman ==
// async function pageScreenshot (){
//     const driver = await setupDriver()
//     await driver.get('https://www.tokopedia.com/about/our-story/')
    

//     const screenshotBase64 = await driver.takeScreenshot()
//     const screenshotBuffer = Buffer.from (screenshotBase64, 'base64')
//     writeFileSync ('screenshot/base/tentangKami.jpg', screenshotBuffer)

//     driver.close()
// }
// pageScreenshot()

// == bandingkan gambar == 
// async function imageComparison (){
    
//         const driver = await setupDriver()
//         await driver.get('https://www.tokopedia.com/about/our-story/')

//     try {     
//         // ambil actual screenshot
//         const actualScreenshot = await driver.takeScreenshot()
//         const actualScreenshotBuffer = Buffer.from (actualScreenshot, 'base64')

//         // ambil base screenshot
//         const baseScreenshotBuffer = readFileSync('screenshot/base/tentangKami.jpg')

//         // bandingkan kedua screenshot
//         expect(actualScreenshotBuffer).to.matchImage(baseScreenshotBuffer)

//     } finally {
//         await driver.close()
//     }
  
// }
// imageComparison()