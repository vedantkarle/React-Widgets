import Accordion from "./Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend JS framework",
  },
  {
    title: "Why use React?",
    content: "React is great JS framework and is famous!",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
