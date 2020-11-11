# Task

Create a catalogue of 10 items and each item should have
a button that lets you set an item as available or 
unavailable.

There should be visual representation showing an items availablity.
**ie we should be able to see what's available in the UI**. You 
could do this by toggling a class on the item.

# Deliverables

- A github repo showing your completed code
- Your site hosted somewhere on the internet eg. vercel, netlify, firebase
- This readme file updated with the approach you took and an explanation on your decisions
 
 # Solution
 This is a catalogue to display if an item is available or not.

 #Steps Taken
 #Array
-With the task at hand, I first created an array for my catalogue with keys being Sku, name, and the amount and a boolean presence. 
-Iterating over the catalogue created, I created buttons that were to show whether or not the items were available' 
 I also made the array into a list that would be displayed on the browser.
 -I chose this approach because I felt it would make me lesser lines of code than manually writing the catalogue items. 

#buttons
-Each button, on clicking, would check if the presence of the said item was there(true) or not(false).
- This would trigger addition of two classes which depending on the presence set, the button will acquire new attributes.
-The attributes are: "Available" and "Not available".
- I chose to base the availability or not of the items on presence because boolean expressions represent the one-ness and zero-ness of computing.

#Deployment
- this has been deployed on netlify link- https://stacyeval1.netlify.app/


 

