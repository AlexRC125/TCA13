function updateSix(){
    document.getElementById('output').innerHTML = "Bees are super important because they help plants make more plants. They fly around collecting pollen, which fertilizes flowers and helps them grow into fruits and veggies. Without bees, a lot of the food we love wouldn't exist. Plus, they make yummy honey that we enjoy eating. So basically, bees are like nature's little helpers, making sure everything stays green and tasty.";
    document.getElementById('img').src="img/licensed-image-removebg-preview.png";
}
function updateTwo(){
    document.getElementById('output').innerHTML = "Bees have some big problems to deal with. Pesticides, especially types called neonicotinoids, mess up their ability to find food and get back to the hive. They're losing their homes because of cities spreading out and farms taking over. Weird weather caused by climate change messes with their schedules and the flowers they like. Plus, they have to battle against bugs and diseases like Varroa mites and Nosema ceranae, which make them weak and can wipe out entire colonies. We need to step up and help bees out before it's too late, because they're super important for keeping plants growing and ecosystems healthy.";
    document.getElementById('img').src="img/images-removebg-preview.png";
}
function updateThree(){
    document.getElementById('output').innerHTML = "You can help bees by planting flowers, avoiding pesticides, and spreading awareness about their importance. Creating a bee-friendly environment in your backyard or community is a great way to support these crucial pollinators.";
    document.getElementById('img').src="img/Bee3.jpg";
}
function updateFour(){
    document.getElementById('output').innerHTML = "You can help bees by planting bee-friendly flowers in your garden, avoiding pesticides, and supporting local beekeepers by buying their products. Spread the word about the importance of bees and encourage others to do the same.";
    document.getElementById('img').src="img/beeatthisle.jpg";
}

 // Fun facts about bees
 const beeFacts = [
    "Bees communicate through dance, known as the 'waggle dance', to tell other bees where to find food.",
    "A beehive can contain up to 60,000 bees during peak season.",
    "Honey bees fly at a speed of around 15 miles per hour.",
    "Bees have five eyes - three small ones on top of the head and two large ones in front.",
    "Bees are essential pollinators, helping to pollinate many of the world's crops.",
    "The queen bee can lay up to 2,000 eggs per day during the summer months."
];

// Function to display a random fun fact about bees
function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * beeFacts.length);
    const fact = beeFacts[randomIndex];
    document.getElementById('funFacts').innerText = fact;
    document.getElementById('funFacts').style.display = 'block';
}

// Event listener to trigger display of fun fact when image is clicked
document.getElementById('beeImage').addEventListener('click', displayRandomFact);



