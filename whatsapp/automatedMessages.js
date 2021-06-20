function sendMessage(messageText) {
  const lines = messageText.split('\n');
  let counter = 0;
  const totalLines = lines.length;

  setInterval(() => {
    if (counter >= lines.length) return;


    if (lines[counter].trim() != '') {
      console.log(`${totalLines} - ${counter + 1} | ${lines[counter]}`)

      window.InputEvent = window.Event || window.InputEvent;

      const event = new InputEvent('input', { bubbles: true });
      const textbox = document.querySelector('div._2_1wd[data-tab="6"]');

      textbox.textContent = lines[counter];
      textbox.dispatchEvent(event);
      document.querySelector("button._1E0Oz").click();
    }

    counter++;
  }, 300);
}

sendMessage(`
Your
Message
Here
`);