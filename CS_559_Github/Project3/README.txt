README File

Assigment #3

This assigment I used what I had from #2 and used the glMatrix Library instead of the 
canvas translations


My Assigment consists of of an image of dump truck that is traveling along the road
once the truck makes it about 3/4 of the way down the road it stops and drops the 
cargo that tumbles off the screen. Once the truck lift is down the truck continues
till it is off the canvas screen. The page is then refreshed and the animation is 
played again. 

The dump truck and road where drawn with lines and shape functions, however I did
look at a reference picture from google to help me design the truck.

The dump truck consists of many shapes that are drawn together using the glMatrix Library
to create the image. First the body of the truck is drawn. Then using that translation the wheels are 
positioned and rotate along with the truck's movement. Next the lift of the truck is 
drawn attached to the back where it rotates when it delivers the cargo. The cargo is 
also drawn to rotate with the lift. 

The animation of the page is done with reqeustAnimationFrame.

I coded the assigmend in notepad++ and tested in chrome version 93.0.4577.82

I also tried microsoft edge version 93.0.961.52
and Firefox version 92.0