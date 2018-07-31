/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    * A describe function is for grouping related specs, which group comprises * a test suite.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
          allFeeds variable has been defined and that it is not
          empty. Also, this is our first test spec, which is a test case in a test suite. The first parameter of Jasmine's global function it() is the title of the spec, and the second represents a function that implements the test case. A spec contains one or more expectations, which can be true or false, and in order for the spec to pass, all expectations must be true.
         */
        it('variable defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures that it has a URL defined
         * and that the URL is not empty.
         */

        it('url defined', function() {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined', function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
         });


    });

    /* A new test suite named "The menu" */
    describe('The menu', function() {
        /* This test ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden', function() {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. It has
          * two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('toggles on and off on click', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');

            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);

            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);

        });
    });

    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous, so this test will require
         * the use of Jasmine's beforeEach() and asynchronous done() functions.
         */

        // Calls a function to an asynchronous request
        beforeEach(function(done) {
            loadFeed(0, done);
        });


        // Tests whether there is at least one .entry element within .feed container
        it('has at least one entry', function() {
            const feedEntries = document.querySelectorAll('.feed .entry');
            expect(feedEntries.length).toBeGreaterThan(0);
        });

    });

    /* A new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* A test that ensures that when a new feed is loaded
         * by the loadFeed function, the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        const feed = document.querySelector('.feed');
        const firstFeed = [];

        // New feed loads automatically when this code runs. Since done() can only be called once, we call it in the final async function to let Jasmine know when to continue
        beforeEach(function(done) {
            // Calls first feed
            loadFeed(0, function() {
                // Converts first feed's children elements into an array list, then loops over each entry
                // Pushes innerText to firstFeed Array
                Array.from(feed.children).forEach(function(entry) {
                    firstFeed.push(entry.innerText);
                });
                // Calls the new feed
                loadFeed(1);
            });

            // Calls done()
            loadFeed(1, function() {
                done();
            });
        });

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function, the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        it('a new feed is loaded', function() {
            Array.from(feed.children).forEach(function(entry,index) {
                expect(entry.innerText === firstFeed[index]).toBe(false);
            });
        });

    }); // End of New Feed Selection test suite

}());
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('all feeds has url and not empty', function () {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                var url = allFeeds[i].url;
                expect(url).toBeDefined();
                expect(url).not.toBe('');
            }
        });

        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('all feeds has name and not empty', function () {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                var name = allFeeds[i].name;
                expect(name).toBeDefined();
                expect(name).not.toBe('');
            }
        });

    });


    /* Write a new test suite named "The menu" */
    describe('The menu', function () {

        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu element is hidden by default', function () {
            expect($('.menu-hidden').is(':visible')).toBe(true);
        });

        /* Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('menu visible when clicked', function () {
            $('a.menu-icon-link').trigger('click');
            expect($('.menu-hidden').is(':visible')).toBe(false);
        });

        it('menu hidden when clicked', function () {
            $('a.menu-icon-link').trigger('click');
            expect($('.menu-hidden').is(':visible')).toBe(true);
        });
    });


    /* Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {

        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('loadFeed function is called and completes its work', function (done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);

            // Invoke done callback function
            done();
        });

    });

    /* Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function () {

        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var feed0;
        var feed1;

        beforeEach(function (done) {
            loadFeed(0, function () {
                // Get the first article header of the current feed
                feed0 = $('.feed').find('h2')[0].innerText;
                // Invoke done callback function
                done();
            });
        });

        // Change feed back to the first one.
        afterEach(function (done) {
            loadFeed(0, done);
        });

        it('new feed is loaded by the loadFeed function that the content actually changes', function (done) {

            // Load new feed
            loadFeed(1, function () {
                // Get the first article header of the new feed
                feed1 = $('.feed').find('h2')[0].innerText;

                // Compare two of them, should not equal
                expect(feed0).not.toEqual(feed1);

                // Invoke done callback function
                done();
            });

        });

    });

}());