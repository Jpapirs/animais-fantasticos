export default function outSideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((userevent) => {
      setTimeout(() => {
        html.addEventListener(userevent, handleoutsideclick);
      });
    });
    element.setAttribute(outside, "");
  }
  function handleoutsideclick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userevent) => {
        html.removeEventListener(userevent, handleoutsideclick);
      });
      callback();
    }
  }
}
