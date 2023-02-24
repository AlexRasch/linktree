document.addEventListener("DOMContentLoaded", () => {
    // 'Profile' Share button
    document.getElementById('share-button-url').addEventListener('click', fnCopyText);

    // Share buttons
    document.querySelectorAll('.tile-share-button').forEach(btnShare => btnShare.addEventListener('click', fnCopyText))
  });

  async function fnCopyText(e){
    e.preventDefault()
    const strUrl = this.getAttribute('data-url')
    try {
        if (window.isSecureContext && navigator.clipboard){
            navigator.clipboard.writeText(strUrl)
        }else{
            // in case we are not using https
            unsecuredCopyToClipboard(strUrl);
        }
        // ToDo replace
        alert("Copied the text: " + strUrl)
    } catch (err) {
        console.error(err)
    }
  }
/*
* Credit: Lissy93
* https://stackoverflow.com/questions/71873824/copy-text-to-clipboard-cannot-read-properties-of-undefined-reading-writetext
*/
function unsecuredCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);
  }