const infoB = document.getElementById('infoButton')
const input = window.location.search.split('=')[1]

fetch(`/search/?name=${input.toLowerCase()}`)
  .then(response => {
    if (!response.ok) throw new Error(response.status)
    return response.json()
  })
  .then(data => {
    fillinformation(data)
  })

function fillinformation (data) {
  document
    .getElementById('flagImg')
    .setAttribute('src', data[0]['country_flag'])
  document.getElementById('flagImg').textContent = data[0]['industry']

  document.getElementById('companyName').textContent = data[0]['carname']

  document.getElementById('carLogo').setAttribute('src', data[0]['iconurl'])

  for (const index of data[0]['geners']) {
    let par = document.createElement('span')
    par.textContent = index
    document.getElementById('genres').appendChild(par)
  }
}

infoB.addEventListener('click', event => {
  window.location.href = `/info/?name=${input}`
})

function getcountryinfo () {
  let countyName = document.getElementById('flagImg').textContent

  window.location.href = `/country/?name=${countyName}`
}
