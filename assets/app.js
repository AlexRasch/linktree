document.addEventListener("DOMContentLoaded", () => {
    const shareButtons = document.querySelectorAll('.tile-share-button')
    shareButtons.forEach(btnShare => btnShare.addEventListener('click', fnCopyText))
  });

  async function fnCopyText(e){
    e.preventDefault()
    const strUrl = this.getAttribute('data-url')
    try {
        if (window.isSecureContext && navigator.clipboard){
            navigator.clipboard.writeText(strUrl)
        }else{
            // Other copy function ?
            // https://stackoverflow.com/questions/71873824/copy-text-to-clipboard-cannot-read-properties-of-undefined-reading-writetext
        }
        // ToDo replace
        alert("Copied the text: " + strUrl)
    } catch (err) {
        console.error(err)
    }
  }