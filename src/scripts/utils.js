export function getNavigationType(fromPath, toPath) {
  if (fromPath.startsWith('/movies') && toPath === '/') {
    return 'movie-to-home'
  }

  if (fromPath === '/' && toPath.startsWith('/movies')) {
    return 'home-to-movie'
  }

  if (fromPath.startsWith('/movies') && toPath.startsWith('/people')) {
    return 'movie-to-person'
  }

  if (fromPath.startsWith('/people') && toPath.startsWith('/movies')) {
    return 'person-to-movie'
  }

  return 'other'
}

export function isBackNavigation(navigateEvent) {
  if (
    navigateEvent.navigationType === 'push' ||
    navigateEvent.navigationType === 'replace'
  ) {
    return false
  }
  if (
    navigateEvent.destination.index !== -1 &&
    navigateEvent.destination.index < navigation.currentEntry.index
  ) {
    return true
  }
  return false
}

export function shouldNotIntercept(navigationEvent) {
  return (
    navigationEvent.canIntercept === false ||
    // If this is just a hashChange,
    // just let the browser handle scrolling to the content.
    navigationEvent.hashChange ||
    // If this is a download,
    // let the browser perform the download.
    navigationEvent.downloadRequest ||
    // If this is a form submission,
    // let that go to the server.
    navigationEvent.formData
  )
}

export function getPathId(path) {
  return path.split('/')[2]
}

export function updateTheDOMSomehow(data) {
  document.getElementById('content').innerHTML = data
}
