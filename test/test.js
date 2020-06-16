#!/usr/bin/env node

const puppeteer = require( 'puppeteer-core' );
const assert = require( 'assert' );

describe( 'puppynkitty.com tests', () => {

  let browser, page

  before( async () => {

    browser = await puppeteer.launch( {
      headless: true,
      executablePath: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
    } );
    page = await browser.newPage();
    await page.goto( 'http://www.puppynkitty.com' );

  } )

  after( async () => {

    await page.close();
    await browser.close();

  } )

  it( 'Has a GitHub link', async () => {

    await page.waitFor( 'nav a' );
    let githubLink = await page.evaluate( 'document.querySelectorAll( "nav a" )[ 0 ].getAttribute( "href" )' );
    assert.notEqual( githubLink.toLowerCase().search( 'github' ), -1 )

  } )

  it( 'Has a link to a google doc resume', async () => {

    await page.waitFor( 'nav a' );
    let githubLink = await page.evaluate( 'document.querySelectorAll( "nav a" )[ 1 ].getAttribute( "href" )' );
    assert.notEqual( githubLink.toLowerCase().search( 'docs.google.com' ), -1 )

  } )

} );
