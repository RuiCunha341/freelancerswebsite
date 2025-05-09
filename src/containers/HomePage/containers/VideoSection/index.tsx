import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { SectionEnum } from 'enums/sections';
import useElementOnScreen from 'hooks/useElementOnScreen';
import PosterImage from '../../../../assets/images/VideoPreviewImage.png';
import ProjectsVideoMP4 from '../../../../assets/videos/SampleVideo.mp4';
import ProjectsVideoWEBM from '../../../../assets/videos/SampleVideo.webm';

function VideoSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggered = useElementOnScreen(sectionRef, 0, false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (triggered && !visible) setVisible(true);
    }, [triggered]);

    return (
        <div
            className='video-section-container'
            id={SectionEnum.Video}
            ref={sectionRef}
        >
            {visible && (
                <video
                    className='video-section-container__video'
                    autoPlay
                    playsInline
                    controls
                    muted
                    poster={PosterImage}
                >
                    <source src={ProjectsVideoMP4} type='video/mp4' />
                    <source src={ProjectsVideoWEBM} type='video/webm' />
                    <track
                        src='/videos/dummy.vtt'
                        kind='captions'
                        srcLang='en'
                        label='English'
                        default
                    />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
}

export default VideoSection;
