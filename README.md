<h2 align="center">Most Common Data Structures for React</h2>

<h3 align="center">Data Structures In Frontend JavaScript/React In The Real World</h3>

<p align="center">
    Data structures can be intimidating. Especially for the self-taught 
folks among us. If you already tried to study data structures in 
JavaScript/React you know what typically happens: </p>

- 🌎 A bunch of CS theory is thrown at you.
- 🔭 You read pages of code that manually implement e.g. a linked list.
- 📖 All the examples are abstract using <i>foo</i> and <i>bar</i> or <i>cats</i> and <i>dogs</i>.

<p>Now in this repo, you can find simple real world data structure
examples for React</p>

<details>
  <summary><b>Table of Contents</b></summary>

<div align="center">
    <h3>1. Set</h3>
    <p>A Set is a keyed collection as well that is natively supported 
in JavaScript. But while it’s easier to think of a Map as an object, a 
Set is more like an array. It’s important to note that each value in a 
Set is unique. You can’t add a value twice. That’s why you may see a 
Set used to remove duplicates from an array.</p>
     <img 
src="https://user-images.githubusercontent.com/47864126/203989055-2269a2e3-4f4e-4904-bcdb-0070c5921cc2.png" 
/>	
    <p>Compared to an array, the main advantage is that you can check 
if a Set contains a value in a performant way.

</p>
     <h3>Real-World Example: Keeping track of selected items</h3>
     <p>https://user-images.githubusercontent.com/47864126/203786175-6ea6329f-99fe-4e90-b1de-e3dea5a6cc66.mov</p>
    <h3>2. Map</h3>
    <p>A (hash) map, hash table, or dictionary is basically a 
key-value storage. In JavaScript we actually use this all the time. We 
also have a native JavaScript alternative in form of a Map. It has a 
few handy methods and properties (such as Map.size), is optimized 
performance-wise for accessing values by key, and allows any kind of 
type as keys (even objects).

Another advantage of the Map: with objects the keys are converted to 
strings. A Map on the other hand preserves the original 
type</p>
     <h3>Real-World Example: Messages with user names</h3>
     
<img 
src="https://user-images.githubusercontent.com/47864126/203972864-fbb6be92-24f6-4251-ae45-846a151ee289.png" 
/>
    <h3>3. Stack</h3>
    <p>A basic stack has two features:

You can add an item to the top of the stack.
You can remove an item from the top of the stack.
This is called “Last in, first out” (aka LIFO). Might sound 
complicated but we can implement it with a simple array (as it’s not 
natively supported in JavaScript).</p>
     <img 
src="https://user-images.githubusercontent.com/47864126/203989292-3a4ae5c9-68d9-460f-886c-4980afd42ce4.png" 
/>
     <h3>Real-World Example: Undo previous actions</h3>
<p>https://user-images.githubusercontent.com/47864126/203981727-ff28b357-bf2b-4939-b64f-21fab1043b07.mov</p>
    <h3>4. Queue</h3>
     <p>A queue is very similar to a stack. But instead of removing 
the element that was added last, we remove the element that was first 
added to the queue. This is called “First in, first out” (aka FIFO).

Like a queue in the supermarket.

We can implement it again using a simple array as it's not natively 
supported in JavaScript.</p>
     <img 
src="https://user-images.githubusercontent.com/47864126/203989460-5212e218-e4fe-41c5-8c0f-0b3648cd42d7.png" 
/>
     <h3>Real-World Example: Notifications</h3>
<p>https://user-images.githubusercontent.com/47864126/203981735-a3d94dcb-9b0e-42f9-8fcb-0f4dbded129c.mov</p>
    <h3>5. Tree</h3>
   <p>A tree is a nested data structure. It starts with a parent that 
has children. The children again can have children of their own and so 
on. Together with trees you often find recursive functions.

Here is one example using a nested object:</p>
<img 
src="https://user-images.githubusercontent.com/47864126/203989561-3c2f6118-044d-4a19-aabd-140a6fbc73bf.png" 
/> 
<h3>Real-World Example: Nested menus or comments</h3>
     <img 
src="https://user-images.githubusercontent.com/47864126/203981750-774a3a53-302f-4f29-a4c0-60e4bda97d93.png" 
/> </div>

</details>
