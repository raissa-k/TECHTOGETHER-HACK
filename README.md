## Inspiration
We were interested in building a calculator. During our brainstorming, we came up with the idea for a retirement calculator which would take into account fees charged by different companies, based on questions frequently asked in 403(b) groups aimed at educators. 

## What it does
The calculators take into account factors such as current age, age of retirement, contribution and the annual return rate to tell the users how much they'll have in their account by the time they retire. 
Another feature is the retirement projection, which estimates the amount needed to support the user's lifestyle based on retirement age and lifespan expectancy.

## How we built it
The factors to be taken into account by the formulas were based on research of how 401(k) and 403(b) contributions work, and how fees are calculated.
For the retirement projection, rather than show how much could be safely withdrawn each month (safe withdrawal rate), we went the opposite direction and calculated the amount needed to be able to support a set monthly withdrawal. 
We built in the limitations for our calculators which allows users to go ahead and input a planned catch-up percentage that doesn’t go into effect until they’re 50.
Accessibility was also a priority for us, 

## Challenges we ran into
The information available often contradicts itself or is simply obfuscating. It was a challenge in and of itself to understand 401(k) and 403(b) through research so it would be possible write down the formulas.

Everything related to JavaScript was new to us, but a challenge we were excited to take on. We have just started covering JavaScript in our bootcamp so there was a definite gap between what we wanted to do and what we knew how to do, and this was a fun experience.

On the navigation department, a challenge that could not be overcome with the time available was the resizing of the fonts. This feature was idealized as incremental changes to font size rather than a set amount.

## Accomplishments that we're proud of
### Raissa
I'm proud of being able to make an accessible website to host the calculators. Although the design might not be super creative or groundbreaking, it is easy to navigate and I made sure everything is focusable when browsing using a keyboard. I am aware many of the accessible features might be redundant in light of technologies such as screen readers, but I did think of my own mother. She doesn't use any external tools to help navigation and isn't very tech-savvy, but would appreciate resizing the font easily in the websites she visits. 
### Leah
I worked on the 401(k) retirement amount Calculator which calculates how much you’ll have for retirement based on what you’re putting in. Incorporating the catchup amount and showing the accurate amount they’ll have in retirement if they’re 24 now and already pay a monthly payment but start putting in a catch-up payment when they reach 50 until retirement confused me at first, but I’m extremely proud I figured it out. For the formula I used the FV level annuity formula and kept double checking our results by hand. We have only had 3 lessons of JavaScript in our bootcamp and I focused primarily on the JavaScript for the calculators here so I’m extremely proud. 

### Andie
I worked on the retirement projections calculator and also the 403(b) calculator using base code from Leah. The projection estimates how much money you will need saved up for retirement based on the anticipated monthly withdrawals and expected lifespan, and the 403(b) calculates the amount you would have for retirement based on your contributions and the impact of different fee percentages. With only a few hours of JavaScript under my belt, I'm proud of figuring out how to use JavaScript to apply payout annuity and compounding interest formulas, and fixing one of the output errors.

## What we learned
### Raissa
As this was my first real use of JavaScript on a project, I learned a lot about functions and how to customize solutions that are already available. Sometimes easy solutions are the best, and you really need to be specific with what you want done to be able to write code for it. 
It was also very helpful to run Lighthouse tests on the website to check for accessibility issues, as I had let a few details - such as redundant aria-roles - to go by unnoticed.

### Leah
That it’s extremely hard to find info on 401k and 403bs and some info contradicts itself or has changed. I also was not aware of the catch-up payments when you turn 50 before this or that you can just use the annuity formula to figure out the amount you’ll have for retirement. This was my first time using JavaScript to try and calculate something more advanced with multiple limitations like this. It showed me that there’s a lot you can do in JavaScript and how to transfer over the logic.

### Andie
Retirement projections can be very different depending on who you're talking to and which variable are used to determine the final number. On top of that, there are fees which can significantly impact your returns. Most calculators available yield slightly different results, and it was great to see our successful application of JavaScript to do these calculations.

## What's next for Capital Hack
### Raissa
With time, I'd reduce the number of CSS and JavaScript files, and have the buttons for font resizing to make incremental adjustments. I'd like to research and possibly introduce features such as accommodations for color blindness and dyslexia. Those implementations may take a little more familiarity with JavaScript, but I feel those are relevant upgrades.
I am also interested in making a bilingual website not dependent on external translation APIs, and making the text-to-speech feature to use the relevant voice.

### Leah
 I would continue to work on the equations for the calculators, refine the if statement or maybe add loops instead. I would do more research to make sure there were no variables we missed or other restrictions that need to be included in the range for the calculations. I would also refine the code for the calculators, as I’m sure there’s some lines we could remove without it affecting the functionality.

### Andie
I would continue to work on the calculators, and would like to add an option for users to be able to determine the impact of various fees on their retirement accounts depending on the specific provider chosen. I would also like to incorporate a graph along with the number results to show the growth across time. The code could likely be more concise and easier to read and maintain as well.
