import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["button"]

  loadMore() {
    const nextPage = new URLSearchParams(window.location.search).get('page') || 1
    const url = `${window.location.pathname}?page=${parseInt(nextPage) + 1}`

    this.buttonTarget.disabled = true
    this.buttonTarget.textContent = 'Загрузка...'

    fetch(url, { headers: { "Accept": "text/html" } })
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, 'text/html')
        const newPosts = doc.getElementById('posts').innerHTML
        const newButton = doc.querySelector('[data-controller="pagination"] [data-action]')

        document.getElementById('posts').insertAdjacentHTML('beforeend', newPosts)
        
        if (newButton) {
          this.buttonTarget.replaceWith(newButton)
        } else {
          this.buttonTarget.remove()
        }
      })
      .finally(() => this.buttonTarget.disabled = false)
  }
}