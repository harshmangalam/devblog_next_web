export default function randomColor() {
  return ["blue", "green", "pink", "orange", "purple","yellow"][
    Math.floor(Math.random() * 5) + 1
  ];
}
