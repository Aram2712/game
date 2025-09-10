
import './Sections.scss';
import CustomVideo from '../Components/CustomVideo';
import videoFile from '../assets/video.mp4';
import line from '../assets/line.png';

function VideoSection() {
    return (
        <section className='videoSection'>
            <h4 className='chooseUsTitle'>You are still not sure? Check this out!</h4>
            <img src={line} className='lineImage' />
            <img src={line} className='bottomLine' />
            <CustomVideo src={videoFile} width="100%" />
        </section>
    )
}

export default VideoSection