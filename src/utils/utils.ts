export const removeStyle = (ref: HTMLDivElement) => {
  console.log(ref.classList);
  ref.classList.add("animate-slide-out");
};
