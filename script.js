/*
HAIKU!


Log 7 AM -> -5

My sleeping hours
are total peace, I wish it stayed.
My waking ruined.

Log 8 AM -> -4

Preparing for school,
my brain is numb, my head is
feeling empty.

Log 9 AM -> -3

My mind awakens,
emotion flows, happiness
is waiting for me.

Log 10 AM -> -2

Fully positive,
nothing sad anymore, this
is true bliss indeed.

Log 11 AM -> -1

Something feels off, I
can't place what, I'll shrug it off.
Today is perfect.

Log 12 PM -> 0

Today isn't what
I thought, sadness snuck into
my now dreary mind.

Log 1 PM -> 1

Fury unraveling,
All I can do is hold it
in. Silence surrounds.

Log 2 PM -> 2

Dark thoughts surround my
head. Slithering in the cracks
of my tiny brain.

Log 3 PM -> 3

Grasping destiny,
could this be my final thought
alive? Confusion.

Log 4 PM -> 4

This isn't what I
want, I need stability.
I can try again.

Log 5 PM -> 5

Realizations, the
painful retribution. I'm
doing fine. Just fine.

Log 6 PM -> 6

I'm doing more than
fine. Aware of my power.
I am the greatest!

Log 7 PM -> 7

Rising, and rising.
Still going higher. I think
I'm unstoppable.

Log 8 PM -> 8

I have to study.
My head is going silent.``
Numb-er hands and heads.

Log 9 PM -> 9`

Embracing complete
darkness, it's better to feel
absolute nothing.


`
<style> body {
background: linear-gradient(yellow, red);
background-repeat: no-repeat; 
background-size: cover; 
width: 100%; 
height: 100%; 
}
</style>
<p style="color:black">wow</p>
<button style="position:fixed;
bottom:10px;right:10px;">yay</button
`

*/

// Elements 
var body = document.getElementById("body") 
var div = document.getElementById("content")
var text = document.getElementById("text")
var button = document.getElementById("button")
var style = document.getElementById("style")
var button_copy = copy(button)

// Actual stuff
var count = -7
var past = -8


var words = {};

words[-7] = `
<h1> Haikus! </h1`

words[-6] = `
This poem can get a *bit* <p style="color:darkred">dark!</p> <br>
Continue?`

words[-5] = `
7 AM: <br><br>
My sleeping hours <br>
are total peace, I wish it stayed. <br>
My morning ruined.`

words[-4] = `
8 AM: <br><br>
Preparing for school, <br>
my brain is numb, my head is <br>
feeling empty.`

words[-3] = `
9 AM: <br><br>
My mind awakens, <br>
emotion flows, happiness <br>
is waiting for me.`

words[-2] = `
10 AM: <br><br>
Fully positive, <br>
nothing sad anymore, this <br>
is true bliss indeed.`

words[-1] = `
11 AM: <br><br>
Something feels off, I <br>
can't place what, I'll shrug it off. <br>
Today is perfect.`

words[0 ] = `
12 PM: <br><br>
Today isn't what <br>
I thought, sadness snuck into <br>
my now dreary mind.`

words[1 ] = `
1 PM: <br><br>
Fury unraveling, <br>
All I can do is hold it <br>
in. Silence surrounds.`

words[2 ] = `
2 PM: <br><br>
Dark thoughts surround my <br>
head. Slithering in the cracks <br>
of my tiny brain.`

words[3 ] = `
3 PM: <br><br>
Grasping destiny, <br>
could this be my final thought <br>
alive? Confusion.`

words[4 ] = `
4 PM: <br><br>
This isn't what I <br>
want, I need stability. <br>
I can try again.`

words[5 ] = `
5 PM: <br><br>
Realizations, the <br>
painful retribution. I'm <br>
doing fine. Just fine.`

words[6 ] = `
6 PM: <br><br>
I'm doing more than <br>
fine. Aware of my power. <br>
I am the greatest!`

words[7 ] = `
7 PM: <br><br>
Rising, and rising. <br>
Still going higher. I think <br>
I'm unstoppable.`

words[8 ] = `
8 PM: <br><br>
I have to study. <br>
My head is going silent. <br>
Numb-er hands and heads.`

words[9 ] = `
9 PM: <br><br>
Embracing complete <br>
darkness, it's better to feel <br>
nothing-ness right now.`

words[10] = `
- - - Sleeping z<sup>z<sup>z</sup></sup> - - - <br>
Press (Control A) to reveal plot`


var content = {};
content[-6] = "<p>a</p>"

var backgrounds = {};
backgrounds[-6] = "<p>a</p>"


function copy(vars) {return vars} //My insecurity!

function anim() {
	if (count == 11) {
		count = -5
		past = -6
		window.requestAnimationFrame(anim)
	} else {
		if (past != count) {
			past = copy(count)
			body.innerHTML.style = backgrounds[count]
			div.innerHTML.style = content[count]
			text.innerHTML = words[count]
			past = copy(count)
		}
		window.requestAnimationFrame(anim)}
}

window.requestAnimationFrame(anim)

button.addEventListener(
	"click", function() {
		count += 1
		console.log((count-1) + " to -> " + (count))
});