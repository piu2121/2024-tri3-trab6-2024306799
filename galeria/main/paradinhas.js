document.querySelectorAll("[data-folder]").forEach(el => {
    const total = el.dataset.total
    const folder = el.dataset.folder
    let html = ''
    for (let i = 1; i <= total; i++) {
      html += `
        <div>
          <img src="imagens/${folder}/${folder} (${i}).jpg">
        </div>    
      `
    }
    el.innerHTML = html
  })
const galleryImageModal = document.querySelector('.mostar')
const galleryBtClose = galleryImageModal.querySelector('.fecha')
const galleryContent = galleryImageModal.querySelector('.parada')
const imgs = document.querySelectorAll('.galera img')
const btnext=galleryImageModal.querySelector('.passa-direita')
const btbefore=galleryImageModal.querySelector('.passa-esquerda')

btnext.addEventListener('click', () => {
  i++
  html += `
  <div>
    <img src="imagens/${folder}/${folder} (${i}).jpg">
  </div>    
`
  
})

btbefore.addEventListener('click', () => {
  galleryImageModal.before()
})

galleryBtClose.addEventListener('click', () => {
  galleryImageModal.close()
})

imgs.forEach(img => {
  img.addEventListener('click', () => {
    galleryContent.innerHTML = `<img src="${img.src}">`
    galleryImageModal.showModal()
  })
})
