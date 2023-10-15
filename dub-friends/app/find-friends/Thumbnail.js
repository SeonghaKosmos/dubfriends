"use client"
import './thumbnail.css'
import ProfilePic from "../components/ProfilePic";
import InterestTag from '../components/InterestTag';
import { interestTagIconSrcPairs } from '../Data';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import DescriptiveWordTag from '../components/DescriptiveWordTag';

export default function Thumbnail(props) {

    const selectedDisplayOption = useSelector((state) => (state.DisplayOption.options[state.DisplayOption.selected]))

    const router = useRouter()
    const navToProfile = () => {
        router.push('/profile')
    }

    let tag1, tag2, tag3

    if (selectedDisplayOption === 'interests') {
        tag1 = props.data.interests[0]
        tag2 = props.data.interests[1]
        tag3 = props.data.interests[2]

        tag1 = <InterestTag text={tag1} iconSrc={interestTagIconSrcPairs[tag1]} />
        tag2 = <InterestTag text={tag2} iconSrc={interestTagIconSrcPairs[tag2]} />
        tag3 = <InterestTag text={tag3} iconSrc={interestTagIconSrcPairs[tag3]} />

    } else if (selectedDisplayOption === 'three words') {
        tag1 = props.data.threeWords[0]
        tag2 = props.data.threeWords[1]
        tag3 = props.data.threeWords[2]

        tag1 = <DescriptiveWordTag word={tag1}/>
        tag2 = <DescriptiveWordTag word={tag2}/>
        tag3 = <DescriptiveWordTag word={tag3}/>
    }



    return (
        <div className="thumbnail-body flex-row" onClick={navToProfile}>
            <ProfilePic src = {props.data.profilePicSrc} styleClass='profile-pic-small' />
            <div className='thumbnail-info flex-column'>
                <span className='name-tag'>{`${props.data.name} (${props.data.pronouns})`}</span>
                <div className='interests-container flex-row'>
                    {selectedDisplayOption !== 'one sentence' &&
                        <>
                            {tag1}
                            {tag2}
                            {tag3}
                        </>

                    }
                    {selectedDisplayOption === 'one sentence' &&
                        <div style={{ fontSize: '14px' }}>
                            {props.data.oneSentence}
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}