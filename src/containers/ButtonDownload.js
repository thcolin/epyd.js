import { connect } from 'react-redux'
import { downloadVideos } from 'ducks/videos'
import Button from 'components/Shared/Button'

const mapStateToProps = (state) => ({
  badge: (state.videos.result.filter(id => state.videos.entities[id].selected).length ? state.videos.result.filter(id => state.videos.entities[id].selected).length:null),
  progress: (!state.context.downloading ? 0 : state.videos.result.map(id => state.videos.entities[id]).filter(video => video.selected).map(video => video.progress).reduce((accumulator, progress) => accumulator + progress, 0) / state.videos.result.filter(id => state.videos.entities[id].selected).length),
  children: (state.context.downloading ? 'Cancel':(state.videos.result.filter(id => state.videos.entities[id].selected).length ? 'Download selection':'Select some videos')),
  disabled: (!state.videos.result.filter(id => state.videos.entities[id].selected).length)
})

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(downloadVideos())
  }
})

const ButtonDownload = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default ButtonDownload