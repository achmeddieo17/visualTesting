const { visualTesting } = require('./try-visual-testing')
const setupDriver = require('../utils/setupDriver')
const chai = require('chai')

describe('MELAKUKAN VISUAL COMPARISON TESTING PADA TOKOPEDIA', function(){
        let driver

        before(async function() {
            driver = await setupDriver() 
        })

        it.only ('Kisah Kami', async function visualTesting (){
	
            const PAGE_NAME = 'Kisah_Kami'
            const PAGE_URL = 'https://www.tokopedia.com/about/our-story/'
            
            
            
        })
        it ('Kontak Kami', async function visualTesting (){
	
            const PAGE_NAME = 'Kontak_Kami'
            const PAGE_URL = 'https://www.tokopedia.com/about/contact-us/'
        
            
        })
        it ('Bisnis Kami', async function visualTesting (){
	
            const PAGE_NAME = 'Bisnis_Kami'
            const PAGE_URL = 'https://www.tokopedia.com/about/our-business/'
        
            
        
        })
        it ('CSR', async function visualTesting (){
	
            const PAGE_NAME = 'CSR'
            const PAGE_URL = 'https://www.tokopedia.com/about/impact/'
        
            
        
        })
        after(async function() {
            await driver.close()
        })
    })  
