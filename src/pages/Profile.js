import React, { Fragment } from 'react'
import styled from 'styled-components'
import NavBar from '../components/navbar'
import profileImage from '../asset/Profile.jpg'

const ProfileWrapper = styled.div`
    display: flex;
    height: 94vh;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const ImageWrapper = styled.div`
    display: flex;
    width: 50vw;
    flex-direction: row-reverse;
    margin-right: 10vw;
`

const ProfileImage = styled.img`
    display: flex;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    border: 10px solid #f0f0f0;
    object-fit: cover;
`

const ProfileTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 94vh;
    width: 50vw;
`

const NameText = styled.span`
    display: flex;
    font-size: 50px;
    font-weight: bold;
    margin: 1em 0 0.5em 0;
    background: linear-gradient(to left, #833ab4, #fd1d1d, #fcb045);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    height: 40vh;
    align-items: flex-end;
`

const Text = styled.span`
    font-family: "Noto Sans KR";
    height: 57vh;
`

export default function Profile() {
    return (
        <Fragment>
            <NavBar title="Harugatto"/>
            <ProfileWrapper>
                <ImageWrapper>
                    <ProfileImage src={ profileImage } alt="Proifle IMG"/>
                </ImageWrapper>
                <ProfileTextWrapper>
                    <NameText>
                        Profile
                    </NameText>
                    <Text>
                        😃 KDMHS 18th Hacking Defence<br />
                        🎂 2003.04.19 <br />
                        💡 TRUST - Hacking Defence Club <br />
                        💡 BMW - Benedu Math Worriors <br />
                        🏆 The Hacking Championship Junior 2019 - 3rd Prize 
                    </Text>
                </ProfileTextWrapper>
            </ProfileWrapper>
        </Fragment>
    )
}
