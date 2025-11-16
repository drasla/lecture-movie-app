
function App() {
  let count = 0; // 바닐라 JS처럼 그냥 변수

  const handleClick = () => {
    count += 1;
    document.getElementById("count").textContent = count;
  };

  return (
    <>
      <span id="count">0</span>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App
