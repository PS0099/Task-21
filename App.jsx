import "./App.css";
import Heading from "./Components/Heading";
import Card from "./Components/Card/Card";

function App() {
  const Cards = [
    {
      image: "https://img.freepik.com/free-photo/dystopian-landscape-with-futuristic-motorcycle-monster_23-2149369694.jpg?semt=ais_hybrid",
      name: "Card 1",
      description: "This is card 1.",
    },
    {
      image: "https://img.freepik.com/free-photo/retro-tin-robot-toy-playing-garden_53876-41414.jpg?semt=ais_hybrid",
      name: "Card 2",
      description: "This is card 2.",
    },
    {
      image: "https://img.freepik.com/free-photo/group-individuals-is-strolling-city-with-futuristic-vibe_1258-296366.jpg?semt=ais_hybrid",
      name: "Card 3",
      description: "This is card 3.",
    },
    {
      image: "https://img.freepik.com/free-photo/bioluminescent-mushrooms-casting-enchanting-glow-mysterious-depths-jungle_1268-35002.jpg?semt=ais_hybrid",
      name: "Card 4",
      description: "This is card 4.",
    },
    {
      image: "https://img.freepik.com/premium-photo/little-cute-smart-robot-family-living-forest-holding-seedlings-plant-forest-environment-conservation-technology-concept-generative-ai_10307-2525.jpg?semt=ais_hybrid",
      name: "Card 5",
      description: "This is card 5.",
    },
    {
      image: "https://img.freepik.com/premium-photo/mysterious-woman-with-umbrella-rainy-night-digital-art-style-illustration-painting_37402-57.jpg?semt=ais_hybrid",
      name: "Card 6",
      description: "This is card 6.",
    },
    {
      image: "https://img.freepik.com/premium-photo/close-up-insect-water_1048944-13389638.jpg?semt=ais_hybrid",
      name: "Card 7",
      description: "This is card 7.",
    },
    {
      image: "https://img.freepik.com/free-photo/various-spooky-halloween-pumpkin-carving_23-2149495156.jpg?semt=ais_hybrid",
      name: "Card 8",
      description: "This is card 8.",
    },
    {
      image: "https://img.freepik.com/free-photo/tourist-from-mountain-top-sun-rays-man-wear-big-backpack-against-sun-light_1150-9129.jpg?semt=ais_hybridl",
      name: "Card 9",
      description: "This is card 9.",
    },
    {
      image: "https://img.freepik.com/free-photo/alcohol-bottles-arrangement-bar_23-2150346955.jpg?semt=ais_hybrid",
      name: "Card 10",
      description: "This is card 10.",
    },
    {
      name:"Card 11",
      image: "https://img.freepik.com/free-photo/beautiful-japanese-forest-scene_23-2151498135.jpg?ga=GA1.1.1916923152.1724585670&semt=ais_hybrid",
      description: "This is card 11."
    },
    {
      name: "Card 12",
      image: "https://img.freepik.com/free-vector/cute-tiger-flat-cartoon-style_1308-111529.jpg?ga=GA1.1.1916923152.1724585670&semt=ais_hybrid",
      description: "This is card 12."
    }
  ];
  Cards.forEach((card, index) => {
    card.id = index++;
  });
  return (
    <>
      <div className="body">
        <Heading></Heading>
      </div>
      <Card C={Cards}></Card>
    </>
  );
}
export default App;
