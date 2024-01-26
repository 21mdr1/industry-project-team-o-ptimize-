import "./Home.scss";

function Home() {
  return (
    <>
    {/* Testing mixins... */}
      <div class="flex">
        <h1 class="h1">This is an H1</h1>
        <h2 class="h2">This is an H2</h2>
        <h3 class="h3">This is an H3</h3>
        <p class="p1">This is a P1</p>
        <p class="p2">This is a P2</p>
        <p class="link">This is what a link would look like</p>
        <button class="blue">Click me</button>
        <button class="yellow">Click me</button>
      </div>
    </>
  );
}

export default Home;
