import { interestTagIconSrcPairs } from '../Data'
import DescriptiveWordTag from '../components/DescriptiveWordTag'
import InterestTag from '../components/InterestTag'
import ProfilePic from '../components/ProfilePic'
import Navbar from '../nav-bar/NavBar'
import FactLabel from './FactLabel'
import ProfileHeader from './Header'
import TagBox from './TagBox'
import TextBox from './TextBox'
import './page.css'

export default function Page() {

    const data = {
        profilePicSrc: '',
        name: 'John Smith',
        pronouns: 'He/They',
        major: 'Public Health',
        schoolYear: 'Senior',
        intro: 'Hi! I’m John Smith, 4th year studying public health. I love to read, bike and knit. Looking forward to meeting you!',
        interests: ['Music', 'Dance', 'Drawing'],
        threeDescriptiveWords: ['Eccentric', 'Funny', 'Fashionable'],
        funFact: 'I can do a handstand and a cartwheel!'

    }

    const interest1 = data.interests[0]
    const interest2 = data.interests[1]
    const interest3 = data.interests[2]



    return (
        <>
            <div className='main-container' style={{ justifyContent: 'center' }}>
                <ProfileHeader />
                <div style={{height:'53px'}}/>
                <main className='profile-main'>
                    <ProfilePic src = 'profilepics/John_Smith.png' styleClass='profile-pic-large' />
                    <h1 className='profile-h1'>{data.name}</h1>
                    <div className='fact-label-container'>
                        <FactLabel factLabel='Pronouns' fact={data.pronouns} />
                        <FactLabel factLabel='Major' fact={data.major} />
                        <FactLabel factLabel='School Year' fact={data.schoolYear} />
                    </div>
                    <h2 className='profile-h2'>Intro</h2>
                    <TextBox text={data.intro} />
                    <h2 className='profile-h2'>Interests</h2>
                    <TagBox>
                        <InterestTag text={interest1} iconSrc={interestTagIconSrcPairs[interest1]} />
                        <InterestTag text={interest2} iconSrc={interestTagIconSrcPairs[interest2]} />
                        <InterestTag text={interest3} iconSrc={interestTagIconSrcPairs[interest3]} />
                    </TagBox>
                    <h2 className='profile-h2'>3 Words That Describe me</h2>
                    <TagBox>
                        <DescriptiveWordTag word={data.threeDescriptiveWords[0]} />
                        <DescriptiveWordTag word={data.threeDescriptiveWords[1]} />
                        <DescriptiveWordTag word={data.threeDescriptiveWords[2]} />
                    </TagBox>
                    <h2 className='profile-h2'>One Sentence About Me</h2>
                    <TextBox text={data.funFact} />
                </main>
                <div style={{height: '84px'}}/>
            </div>
            <Navbar />
        </>

    )
}