const testimonials = [
{
name: "Chaylee",
photoUrl:
"https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg",
text:"This book is exactly what our business has been lacking."
},
{
name: "Sandy",
photoUrl:
"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/800px-Pierre-Person.jpg",
text:"Man, this thing is getting better and better as I learn more about it."
},
{
name: "Farzad",
photoUrl:
"https://caricom.org/wp-content/uploads/Floyd-Morris-Remake-1024x879-1.jpg",
text: "We're loving it. I didn't even need training."
  }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial()

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];

imgEl.src = photoUrl;
textEl.innerText = text;
usernameEl.innerText = name;
idx++
if (idx === testimonials.length) {
  idx = 0;
}

setTimeout(() => {
  updateTestimonial()
}, 2000)
}
