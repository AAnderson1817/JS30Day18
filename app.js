//Because the querySelector for data-time yields a Node List and not technically an array, we can't use map on it by default. We use Array.from to turn it into an array.
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

console.log(timeNodes);

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const[mins,secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
