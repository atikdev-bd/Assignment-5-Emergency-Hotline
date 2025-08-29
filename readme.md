
##  1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

 # document.getElementById("idName")
 একটা id দিয়ে শুধু একটা element পাওয়া যায়। (কারণ id ইউনিক হয়)

# document.getElementsByClassName("className")
 একই class এর অনেকগুলো element থাকলে, এগুলোকে একটা HTMLCollection (array-like) আকারে রিটার্ন করে।

# document.querySelector("css-selector")
 CSS selector এর মতো ব্যবহার করা যায়। শুধু প্রথম element রিটার্ন করে।

# যেমনঃ document.querySelector(".box") → প্রথম .box ক্লাসের element দিবে।

# document.querySelectorAll("css-selector")
 CSS selector দিয়ে মিলে যাওয়া সবগুলো element কে NodeList আকারে দেয়।



 ## 2. How do you **create and insert a new element into the DOM**?

নতুন element বানানো → document.createElement("tagName")

এর মধ্যে text/content বসানো → 
.innerText / .innerHTML ব্যবহার করে।

কোন parent element এ ঢুকাতে হবে সেটা খুঁজে → appendChild() বা append() দিয়ে ঢোকানো।


## 3. What is **Event Bubbling** and how does it work?

👉 Event bubbling মানে হলো event প্রথমে যে element-এ ঘটে (child element), সেখান থেকে ধাপে ধাপে উপরের parent element গুলোতেও propagate (ছড়িয়ে পড়া)।

উদাহরণ:

একটা button আছে div এর ভিতরে, আর div আছে body এর ভিতরে। যদি button এ click event দিই, তখন প্রথমে button কাজ করবে → তারপর div → তারপর body → এভাবে উপরে উঠতে থাকবে।


## 4. What is **Event Delegation** in JavaScript? Why is it useful?

👉 Event Delegation মানে হলো parent element এ event listener বসানো, তারপর event bubbling এর মাধ্যমে child element এর event handle করা।


Why it is useful :

অনেক child element এর জন্য আলাদা আলাদা event না বসিয়ে → শুধু parent এ event দিলে performance ভালো হয়।

পরে dynamically নতুন child element আসলেও কাজ করবে।

 ## 5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault()
 ব্রাউজারের default কাজ বন্ধ করে দেয়।


stopPropagation()
 event bubbling বা capturing বন্ধ করে দেয়।
অর্থাৎ event যেন parent element এ ছড়িয়ে না যায়।

সহজ ভাষায়:

preventDefault() → ব্রাউজারের default action বন্ধ করে।

stopPropagation() → event parent element এ ছড়ানো বন্ধ করে।
