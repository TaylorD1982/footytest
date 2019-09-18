Football Betting Group 2019/2020

Six friends take part in an annual contest in which they place a £2 accumulator bet on the weekend’s football matches. At the end of the season, the contestant with the highest total winnings is declared champion. The purpose of this site is to provide is to provide metrics and statistics in an attractive, user-friendly way.

UX

The site has a simple, clean, layout with a limited colour-scheme of black and grey contrasted with a more vibrant orange. The majority of the screen will be filed with white, drawing the user’s attention to the various elements of the site.

The original design of the site is shown below. The final version is broadly the same although you will notice one or two changes.

The visitors to the site will be the six participants in the contest. The site’s primary function is to display a table showing the current standings of the competition and so this element has been placed at the top of the page.

The league table is supplemented with other performance metrics, which focus on individual participants as well as the group as a whole. The buttons and graphs are designed to be colorful and easy to understand.

USER STORIES

Below are a number of scenarios, which demonstrate how a visitor to the site might navigate through the various sections.

David wants to see how this weekend’s football results have affected his standings in the table. He scrolls down to the league table, which is the first element of the site, and sees that he is now in 3rd place. He wants to see how he is performing in terms of wins this year and so clicks on the heading of the ‘wins’ column. The order of this column is re-sorted allowing him to see how he ranks in that particular respect.

William wants to view some information about the trends in his betting this season. In the navigation bar, he selects the option ‘Player Information’ and is taken down to that section of the site.

He selects his name from the 6 buttons and a modal pops up. He sees in the section 2019 / 2020 Season’ that his average odds for this year are 12/1 and his new favorite team (the team he selects the most often) is Newcastle United. While the modal is open, he hovers his mouse over the image on the right hand side and is presented with a pop up that reminds him that he won the title in 2017 and 2019.

Struan notices an error in his total in the league table. In the navigation bar, he selects the option ‘Contact’ and is taken down to the bottom of the site. There, he enters his name, email address and a message, which will be sent to the administrator’s Gmail account.

Bingham wants to know the location of the teams the teams he has selected most often. He scrolls down to the map and hits the button. As the markers drop down consecutively, he can easily see where his markers are landing. He zooms in on a particular marker and hover his mouse over it. A pop-up confirms that he has selected this team on 3 occasions this year.

Duffy wants to see how the group as a whole is performing against the bookmakers this season. In the navigation bar, he selects ‘Group Statistics’ and is taken down to that sections of the site. He sees that the second chart displays this information. The Vertical Axis tells him that the group is currently £87.50 behind the bookmakers but that this is an improvement on two weeks ago, when the group were losing by £113.75.

Features

Existing Features

· Feature 1 (Navbar) - The navbar allows the user to navigate to the various sections on the page. It collapses into a ‘burger’ in smaller screen sizes.

· Feature 2 (league table) – The league table ranks the players by their winnings in its default position. It is interactive, allowing the user to sort the data in the other columns.

· Feature 3 (Player Information). Each player has a separate button which, when clicked, displays a modal with data and an image confirming their total trophies won. When hovering over this image, a popup confirms which trophies they have won and in which years.

· Feature 4 (Group Information) - There are 4 charts showing information about the group’s performances this season and in previous seasons too.

· Feature 5 (Map) – The map shows the locations of the ten teams selected the most time by each player. It is colour coded and the markers drop down consecutively to let players see their selections more easily.

· Feature 6 (contact form) – A contact form allows users to reach out to the site’s administrator if, for example, they want features added or if data is incorrect. The form is linked to a Gmail account via EmailJS.

· Feature 7 (return to top button). In an image of the footballer Lionel Messi. This image functions as a button and returns players to the top of the page.

Features Left to Implement

· I would like the map to have a separate button for each of the contestants. At present, if a location has been selected by more than one player, the markers are very close to each other and so it is necessary to zoom in very close to see the separate markers.

· I would like a success message to display when a message is sent from the contact form.

Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

Tabulator – www.tabulator.info

Google Charts – www.developers.google.com/chart.

JQuery - The project uses JQuery to simplify DOM manipulation. www.jquery.com

Google Fonts – The typeface used throughout the site. www.fonts.google.com

Bootstrap – Used to create the navigation bar, buttons and grid layout. www.getbootstrap.com

Google Maps – Used for the ‘Betting Locations’ section. www.developers.google.com/maps

EmailJS – The contact form is linked to a Gmail account using this site. www.emailjs,com

MS Paint – Used to create the original design of the site.

Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

Navigation Bar

i. User clicks on the navigation bar item “Player Information” and is taken down to that section of the website.

ii. User clicks on the navigation bar item “Group Statistics” and is taken down to that section of the website.

iii. User clicks on the navigation bar item “Betting Locations” and is taken down to that section of the website.

iv. User clicks on the navigation bar item “Contact” and is taken down to that section of the website.

v. In mobile view, the navigation bar shrinks to a burger image. When clicked on, the navigation items are displayed below

League Table

i. User clicks on the heading of the “Name” column and the data is sorted alphabetically. Click again and it re-sorts in reverse alphabetical order.

ii. User clicks on the heading of the “Winnings” column and the data is sorted from high to low. Click again and it re-sorts from low to high.

iii. User clicks on the heading of the “Wins” column and the data is sorted from high to low. Click again and it re-sorts from low to high.

iv. User clicks on the heading of the “Deficit” column and the data is sorted from high to low. Click again and it re-sorts from low to high.

Player information buttons

i. User hovers over a button with the mouse and the image grows larger.

ii. User clicks on the image and a modal pop up appears.

iii. User hovers their mouse over the ‘trophies’ image and a pop up displays dates of wins

Group information

I. User hovers their mouse over the charts and specific information is displayed regarding that specific piece of data.

Betting Locations

I. User clicks on the “Click Here” button and markers drop down onto the map, one after the other.

II. The user then zooms in on the map and hover the mouse over a specific market. A pop-up shows the player to whom the market applies and how many times they have made this particular selection.

Contact Form

I. User fills in their name and adds a message but does not enter their email address. A message pops up below the ‘Email’ field stating “Please fill in this field”.

II. User fills in their email address and adds a message but does not enter their name. A message pops up below the ‘Name’ field stating “Please fill in this field”.

III. User fills in their name and email address but does not enter a message. A message pops up below the ‘Message’ field stating “Please fill in this field”.

“Return to the Top” button

I. Player hovers their mouse over the button and it expands slightly in size.

II. Player clicks on the button and it returned to the top of the page.

Larger Screens

The logo at the top of the page is wider on this view (it is a different image to the one used on smaller screens).

The sections headings are also wider in this view.

The navigation bar is not collapsed in this view.

Smaller Screens

The major difference is that the navigation bar is collapsed into a ‘burger’.

Bugs or problems encountered during testing

· The image in the modal protruded from the bottom of the modal on certain mobile devices. This was resolved by making the image fractionally smaller.

· There is an issue with the map markers, where they appear at their final location for a fraction of a second before dropping down to that location. I have yet to resolve this bug.

Deployment

This section should describe the process you went through to deploy the project to a hosting platform.

The site has been deployed on Git Pages

Credits

Media

· The images of the whisky glasses were obtained from

· The image of Lionel Messi came from

Acknowledgements

· I received inspiration for this project from X