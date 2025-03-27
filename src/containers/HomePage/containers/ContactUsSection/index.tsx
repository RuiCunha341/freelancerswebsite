import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { SectionEnum } from 'enums/sections';
import { useForm } from 'hooks/Forms';
import Input from 'components/Input';
import { emailRegex } from 'utils/regex';
import Button from 'components/Button';
import useElementOnScreen from 'hooks/useElementOnScreen';
// import Lottie from 'lottie-react';
// import animationData from 'assets/animations/animation2.json';
import TextArea from 'components/TextArea';
import BackgroundImage1920 from '../../../../assets/images/ContactUsImage1920.webp';
import BackgroundImage1600 from '../../../../assets/images/ContactUsImage1600.webp';
import BackgroundImage1024 from '../../../../assets/images/ContactUsImage1024.webp';
import LogoImage from '../../../../assets/images/LogoImage.webp';
import { ContactUsRequest } from './interface';

function ContactUsSection() {
    // indicates if currently awaiting submission response
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loading, setLoading] = useState(false);
    const [triedToSubmit, setTriedToSubmit] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggered = useElementOnScreen(sectionRef, 0, false);
    const [visible, setVisible] = useState(false);
    // form logic
    const { register, submit, form, hasChanges } = useForm<ContactUsRequest>({
        url: '',
        onSuccess: () => {
            console.log('SUBMITTED');
            /*
                toast.success({
                    message: t(
                        cvss
                            ? 'form.CHANGES_SAVED_WITH_SUCCESS'
                            : 'settingsPage.NEW_CVSS_SUBMIT_SUCCESS_MESSAGE',
                    ),
                });
                */
            setLoading(false);
        },
        onError: () => {
            console.log('SUBMITTED');
            setLoading(false);
        },
    });

    useEffect(() => {
        if (triggered && !visible) setVisible(true);
    }, [triggered]);

    return (
        <div
            className='contact-us-section'
            id={SectionEnum.ContactUs}
            ref={sectionRef}
        >
            <img
                loading='lazy' // loads only when visible
                src={BackgroundImage1920}
                srcSet={`${BackgroundImage1024} 1024w, ${BackgroundImage1600} 1600w, ${BackgroundImage1920} 1920w`} // loads the correct image based on devide width
                alt='HomePage Background'
                className={`contact-us-section__background-image ${
                    visible ? 'visible' : ''
                }`}
            />
            <p
                className={`contact-us-section__title ${
                    visible ? 'visible' : ''
                }`}
            >
                Let’s talk about you, your company, your next project
            </p>
            {/** 
            <div style={{ width: 300, height: 300, backgroundColor: 'red' }}>
                <Lottie animationData={animationData} loop />
            </div> */}
            <div className='contact-us-section__content'>
                <div className='contact-us-section__content__left-side'>
                    <img
                        src={LogoImage}
                        alt='HomePage Background'
                        className={`contact-us-section__content__left-side__logo ${
                            visible ? 'visible' : ''
                        }`}
                    />
                    <div
                        className={`contact-us-section__content__left-side__text-container ${
                            visible ? 'visible' : ''
                        }`}
                    >
                        <p className='contact-us-section__content__left-side__text-container__title'>
                            Contact
                        </p>
                        <p className='contact-us-section__content__left-side__text-container__text'>
                            <a href='mailto:tomas.sequeira@vistira.com'>
                                tomas.sequeira@vistira.com
                            </a>
                        </p>
                        <p className='contact-us-section__content__left-side__text-container__text'>
                            <a href='tel:+351930423557'>+351 930423557</a>
                        </p>
                    </div>
                </div>
                <div className='contact-us-section__content__right-side'>
                    <div
                        className={`contact-us-section__content__right-side__field-container ${
                            visible ? 'visible' : ''
                        }`}
                    >
                        <Input
                            placeholder='Name'
                            {...register('name')}
                            $error={
                                triedToSubmit &&
                                (form.name === undefined || form.name === ''
                                    ? '* Required field'
                                    : undefined)
                            }
                        />
                    </div>
                    <div
                        className={`contact-us-section__content__right-side__field-container ${
                            visible ? 'visible' : ''
                        }`}
                    >
                        <Input
                            placeholder='Company'
                            {...register('company')}
                            $error={
                                triedToSubmit &&
                                (form.company === undefined ||
                                form.company === ''
                                    ? '* Required field'
                                    : undefined)
                            }
                        />
                    </div>
                    <div
                        className={`contact-us-section__content__right-side__field-container ${
                            visible ? 'visible' : ''
                        }`}
                    >
                        <Input
                            placeholder='Email'
                            {...register('email')}
                            $error={
                                triedToSubmit &&
                                (form.email === undefined ||
                                form.email === '' ||
                                !emailRegex.test(form.email)
                                    ? '* Required field'
                                    : undefined)
                            }
                        />
                    </div>
                    <div
                        className={`contact-us-section__content__right-side__field-container ${
                            visible ? 'visible' : ''
                        }`}
                    >
                        <TextArea
                            placeholder='Project'
                            {...register('project')}
                            $error={
                                triedToSubmit &&
                                (form.project === undefined ||
                                form.project === ''
                                    ? '* Required field'
                                    : undefined)
                            }
                        />
                    </div>
                    <div className='contact-us-section__content__right-side__footer'>
                        <div
                            className={`contact-us-section__content__right-side__footer__button-container ${
                                visible ? 'visible' : ''
                            }`}
                        >
                            <Button
                                text='Send Message'
                                onClick={() => {
                                    setTriedToSubmit(true);
                                    // submit();
                                }}
                                disabled={
                                    !loading &&
                                    hasChanges &&
                                    (form.name === undefined ||
                                        form.name === '' ||
                                        form.company === undefined ||
                                        form.company === '' ||
                                        !form.email ||
                                        form.email === '' ||
                                        !emailRegex.test(form.email) ||
                                        form.project === undefined ||
                                        form.project === '')
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsSection;
