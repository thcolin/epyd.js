// state.analyze
export const fetch = (kind, id) => {
  return {
    type: 'FETCH',
    kind,
    id
  }
}

export const togglePause = () => {
  return {
    type: 'TOGGLE_PAUSE'
  }
}

export const toggleVideos = (to) => {
  return {
    type: 'TOGGLE_VIDEOS',
    to
  }
}

export const shiftVideo = (id, to) => {
  return {
    type: 'SHIFT_VIDEO',
    id,
    to
  }
}

export const editVideo = (id, key, value) => {
  return {
    type: 'EDIT_VIDEO',
    id,
    key,
    value
  }
}

export const setDownloading = (to) => {
  return {
    type: 'SET_DOWNLOADING',
    to
  }
}

export const downloadSelection = () => {
  return {
    type: 'DOWNLOAD_SELECTION'
  }
}

export const downloadVideo = (id) => {
  return {
    type: 'DOWNLOAD_VIDEO',
    id
  }
}

// state.errors
export const closeError = (id) => {
  return {
    type: 'CLOSE_ERROR',
    id
  }
}
