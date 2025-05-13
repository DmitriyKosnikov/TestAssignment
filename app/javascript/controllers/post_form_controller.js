import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["title", "body", "userSelect", "submitBtn", "notice"]

  submit(e) {
    e.preventDefault()
    this.submitBtnTarget.disabled = true

    fetch(this.element.action, {
      method: "POST",
      body: new FormData(this.element),
      headers: {
        "X-CSRF-Token": document.querySelector("[name='csrf-token']").content,
        "Accept": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          this.clearForm()
          this.showNotice("Success!", "green")
        } else {
          this.showNotice(data.errors.join(", "), "red")
        }
      })
      .finally(() => this.submitBtnTarget.disabled = false)
  }

  clearForm() {
    this.titleTarget.value = ""
    this.bodyTarget.value = ""
    this.userSelectTarget.selectedIndex = 0
  }

  showNotice(message, color) {
    const notice = this.noticeTarget
    notice.textContent = message
    notice.style.color = color
    setTimeout(() => notice.textContent = "", 3000)
  }
}