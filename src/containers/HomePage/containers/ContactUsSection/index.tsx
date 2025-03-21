import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { SectionEnum } from 'enums/sections';
import { useTranslation } from 'react-i18next';
import { useForm } from 'hooks/Forms';
import Input from 'components/Input';
import { emailRegex } from 'utils/regex';
import Button from 'components/Button';
import useElementOnScreen from 'hooks/useElementOnScreen';
// import Lottie from 'lottie-react';
// import animationData from 'assets/animations/animation2.json';
import BackgroundImage from '../../../../assets/images/ContactUsImage.webp';
import { ContactUsRequest } from './interface';

function ContactUsSection() {
    const { t } = useTranslation();
    // indicates if currently awaiting submission response
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loading, setLoading] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggered = useElementOnScreen(sectionRef, 0, false);
    const [visible, setVisible] = useState(false);
    // form logic
    const { register } = useForm<ContactUsRequest>({
        url: '',
        onSuccess: () => {
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
                src={BackgroundImage}
                alt='ContactUs Background'
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
                    <p
                        className={`contact-us-section__content__left-side__text ${
                            visible ? 'visible' : ''
                        }`}
                    >
                        {t('contactUs.TELL_US')}
                    </p>
                </div>
                <div className='contact-us-section__content__right-side'>
                    <div
                        className={`contact-us-section__content__right-side__field-container ${
                            visible ? 'visible' : ''
                        }`}
                    >
                        <Input
                            placeholder='Your name'
                            {...register('name', {
                                $required: true,
                                resolveError: () => t('form.REQUIRED_FIELD'),
                            })}
                        />
                    </div>
                    <div
                        className={`contact-us-section__content__right-side__field-container ${
                            visible ? 'visible' : ''
                        }`}
                    >
                        <Input
                            placeholder='Your company'
                            {...register('email', {
                                regex: emailRegex,
                                $required: true,
                                resolveError: () => t('form.EMAIL_INVALID'),
                            })}
                        />
                    </div>
                    <div
                        className={`contact-us-section__content__right-side__field-container ${
                            visible ? 'visible' : ''
                        }`}
                    >
                        <Input
                            placeholder='Your email'
                            {...register('email', {
                                regex: emailRegex,
                                $required: true,
                                resolveError: () => t('form.EMAIL_INVALID'),
                            })}
                        />
                    </div>
                    <div
                        className={`contact-us-section__content__right-side__field-container ${
                            visible ? 'visible' : ''
                        }`}
                    >
                        <Input
                            placeholder='Your project'
                            {...register('project', {
                                $required: true,
                                resolveError: () => t('form.REQUIRED_FIELD'),
                            })}
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
                                    //
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsSection;
